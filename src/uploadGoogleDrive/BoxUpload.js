import React from "react";

// ant icons
import { DriveIcon } from "components/icon";


function BoxUpload({ accessToken, gAPILoaded, uploadGoogleDrive }) {
  let pickerApiLoadedRef = React.useRef(null);

  const openGooglePicker = React.useCallback(() => {
    window.gapi.load("picker", () => {
      pickerApiLoadedRef.current = new window.google.picker.PickerBuilder()
        .addView(window.google.picker.ViewId.DOCS)
        .setOAuthToken(accessToken)
        .setDeveloperKey("xxx")
        .setCallback((data) => {
          if (data.action === "loaded") {
          }
          if (data.action === "picked") {
          }
          console.log("setCallback: ", data);
        })
        .build();
      pickerApiLoadedRef.current.setVisible(true);
    });
  }, [accessToken]);

  React.useLayoutEffect(() => {
    if (!gAPILoaded || !accessToken) return;
    window.gapi.client.setToken({ access_token: accessToken });

    openGooglePicker();
    // (() => {
    //   // call from api
    //   // window.gapi.client.request("https://www.googleapis.com/drive/v3/files").execute((...args: any) => {
    //   //   console.log("res: ", args);
    //   // });
    //   // console.log("🚀 ~ file: index.tsx ~ line 69 ~ res", res);
    // })();
  }, [gAPILoaded, openGooglePicker, accessToken]);

  return (
    <div
      className="bg-[#F9F0FF] w-full h-[100px] flex flex-col justify-center items-center cursor-pointer border-[1px] border-[#B37FEB]"
      onClick={uploadGoogleDrive}
    >
      <DriveIcon className="w-[30px] h-[30px] object-cover mt-4" />
      <p className=" text-[14px] font-400">Select files from Drive</p>
    </div>
  );
}

export default BoxUpload;
