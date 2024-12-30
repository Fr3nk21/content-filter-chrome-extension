import { useState } from "react";

function BlockForm() {
  const [value, setValue] = useState("");

  const handleBlock = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log({ value });
  };

  return (
    <div className="p-4 bg-red-400">
      <h1 className="bg-green-400">
        Select the website you would like to block
      </h1>
      <input
        type="text"
        value={value}
        onChange={handleBlock}
        className="w-full px-3 py-2 border rounded-md"
      />
      <button
        type="submit"
        className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Block website
      </button>
    </div>
  );
}

export default BlockForm;
