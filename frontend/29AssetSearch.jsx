import { FaSearch, FaQrcode } from "react-icons/fa";

const AssetSearch = ({ searchText, setSearchText }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5">

      <div className="flex flex-col md:flex-row gap-4">

        {/* Search Input */}
        <div className="relative flex-1">

          <FaSearch
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by Asset Tag, Name, Serial Number, Employee..."
            className="w-full border rounded-lg py-3 pl-12 pr-4
                       focus:ring-2 focus:ring-cyan-500
                       focus:outline-none"
          />

        </div>

        {/* QR Scanner Button */}
        <button
          className="flex items-center justify-center gap-2
                     bg-cyan-600 hover:bg-cyan-700
                     text-white px-6 py-3 rounded-lg
                     transition"
        >
          <FaQrcode />

          Scan QR
        </button>

      </div>

      <p className="text-sm text-gray-500 mt-3">
        Search assets by asset tag, asset name, serial number,
        employee name or department.
      </p>

    </div>
  );
};

export default AssetSearch;