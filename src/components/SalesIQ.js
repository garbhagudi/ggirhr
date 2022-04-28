import React from "react";
import { useEffect } from "react";

//Zoho Sales Iq Script:
const useScript = (url, widgetCode) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");

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
        "https://salesiq.zoho.com/widget",
        "201f3df74e42a63d69ee275e156a88ac916e6c465ec468ed92339a1ae4444508"
      )}
    </React.Fragment>
  );
}
