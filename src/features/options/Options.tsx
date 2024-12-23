function Options() {
  const sendMessage = () => {
    chrome.runtime.sendMessage(
      { type: "GREETING", payload: "Hello from Options" },
      (response) => {
        console.log("Response:", response);
      }
    );
  };

  return (
    <div className="Options">
      <h1>Extension Options</h1>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default Options;
