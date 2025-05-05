export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Logo box */}
      <div className="w-32 h-32 bg-gray-300 flex items-center justify-center mb-6 rounded">
        <span className="text-gray-600">Logo</span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4">corflynn</h1>

      {/* Text box */}
      <div className="max-w-md bg-white p-6 rounded shadow">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
