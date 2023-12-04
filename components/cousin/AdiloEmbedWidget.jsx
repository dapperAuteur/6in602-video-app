import React, { useEffect } from "react";

const AdiloEmbedWidget = ({dataId}) => {
  console.log('dataId :>> ', dataId);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.bigcommand.com/dynamic-embed/js/inline.js';
    script.id = 'et-iframe';
    script.async = true;
    script.setAttribute('data-widgetId', '6153673fc026597060d3764a');
    script.setAttribute('data-version', 0.5);
    script.setAttribute('data-test', false);
    document.body.appendChild(script);
  
    return () => {
      // Cleanup script when the component unmounts
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <div
        className="motion_popover"
        data-id={dataId}
        style={{ width: "100%", height: "100%", paddingTop: "56.25%", position: "relative"}}
        data-type='thumbnail'>

      </div>
    </>
  )
  
};

export default AdiloEmbedWidget;