import Script from 'next/script';
const WIDGET_CODE =
  'siq9cb07e4f29c86a0622c4785734fcaba7b624414ff160b99492e8afeead60bd0a';

export default function SalesIQ() {
  return (
    <Script
      id='zsiqscript'
      src={`https://salesiq.zohopublic.com/widget?wc=${WIDGET_CODE}`}
      strategy='afterInteractive'
    />
  );
}
