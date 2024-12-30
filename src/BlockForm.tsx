import { useState, FormEvent } from "react";

// ? BlockForm Component: A form component that validates and handles website URL inputs for blocking purposes

function BlockForm() {
  const [value, setValue] = useState(""); // Stores the input field value
  const [error, setError] = useState(""); // Stores validation error messages

  // ? Validates if the provided string is a valid website URL
  const isValidUrl = (urlString: string): boolean => {
    try {
      // Remove common protocols 'http://', 'https://, and 'www.' from the URL for validation
      const processedUrl = urlString.replace(/^(https?:\/\/)?(www\.)?/, "");

      // Regular expression to validate domain format
      const domainRegex =
        /^[a-zA-Z0-9] [a-zA-Z0-0-] {1,61} [a-zA-Z0-9]\.[a-zA-Z]{2,}$/;

      return domainRegex.test(processedUrl);
    } catch {
      // Returns false if any error occurs during validation
      return false;
    }
  };

  // ? Handles changes in the input field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // Update the input value state
    // Clear error when user starts typing again
    if (error) setError("");
  };

  // ? Handles form submission and validation
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevents page reload on form submission

    // Check if the input is empty or only whitespace
    if (!value.trim()) {
      setError("Please enter a website URL");
      return;
    }

    // Validate URL format
    if (!isValidUrl(value)) {
      setError("Please enter a valid website URL (e.g., example.com)");
      return;
    }

    // If validation passes, log the URL and clear errors
    console.log("Website to block:", value);
    setError(""); // Clear any existing errors messages
  };

  return (
    // Form container
    <form onSubmit={handleSubmit} className="p-4 bg-red-400">
      {/* Form title */}
      <h1 className="bg-green-400">
        Select the website you would like to block
      </h1>

      {/* Input field with validation */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter website URL"
        className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />

      {/* Error message display */}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

      {/* Submit button */}
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
