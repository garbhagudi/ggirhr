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
        'https://salesiq.zohopublic.in/widget',
        'siq36d4ad6e23f762f7609018f38cfdfe2eab4c8b7feebbbc5c0f95f382914e90c5'
      )}
    </React.Fragment>
  );
}
