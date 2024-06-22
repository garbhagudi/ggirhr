import React from 'react';
import { useEffect } from 'react';

//Zoho Sales Iq Script:
const useScript = (url, widgetCode) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');

    let code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`;

    script.appendChild(document.createTextNode(code));
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, widgetCode]);
};

export default function SalesIQ() {
  return (
    <React.Fragment>
      {useScript(
        'https://salesiq.zohopublic.com/widget',
        'siq9cb07e4f29c86a0622c4785734fcaba7b624414ff160b99492e8afeead60bd0a'
      )}
    </React.Fragment>
  );
}
