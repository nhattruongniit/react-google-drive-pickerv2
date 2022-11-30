import React from "react";

// hooks
import { useGapi } from "../hooks/useGapi";

// components
import BoxUpload from "./BoxUpload";

export default function UploadGoogleDrive() {
  const [gAPILoaded, setGAPILoaded] = React.useState(false);
  const accessToken = 'xxx'; // BE return accessToken

  useGapi("https://apis.google.com/js/api.js", () => {
    window.gapi.load("client", () => {
      setGAPILoaded(true);
    });
  });

  function uploadGoogleDrive() {
    setGAPILoaded(false);
  }

  return <BoxUpload accessToken={accessToken} gAPILoaded={gAPILoaded} uploadGoogleDrive={uploadGoogleDrive} />;
}
