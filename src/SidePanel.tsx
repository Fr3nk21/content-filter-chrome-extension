import { useEffect } from "react";

function SidePanel() {
  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      if (message.type === "GREETING") {
        console.log("Received message in Side Panel:", message.payload);
        sendResponse({ message: "Hello from Side Panel" });
      }
    });
  }, []);

  return <div className="bg-red-400 p-4">Side Panels</div>;
}

export default SidePanel;
