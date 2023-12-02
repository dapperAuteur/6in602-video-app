import React, { useEffect } from "react";

const ConsoltoWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '';
    script.id = 'et-iframe';
    script.async = true;
    script.setAttribute('data-widgetId', '');
    script.setAttribute('data-version', 0.5);
    script.setAttribute('data-test', false);
    document.body.appendChild(script);
  
    return () => {
      // Cleanup script when the component unmounts
      document.body.removeChild(script);
    }
  }, []);

  return null; // This component doesn't render anything
  
};

export default ConsoltoWidget;