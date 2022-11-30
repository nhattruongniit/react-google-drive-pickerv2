import React from "react";
export function useGapi(url, callback) {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.type = "text/javascript";

    if (callback) {
      script.onload = callback;
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, callback]);
}
