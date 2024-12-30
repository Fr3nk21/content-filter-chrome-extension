import { useState, FormEvent } from "react";

function BlockForm() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Website to block:", value);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-red-400">
      <h1 className="bg-green-400">
        Select the website you would like to block
      </h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter website URL"
        className="w-full px-3 py-2 border rounded-md"
      />
      <button
        type="submit"
        className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Block website
      </button>
    </form>
  );
}

export default BlockForm;
