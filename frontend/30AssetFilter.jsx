import { FaFilter, FaUndo } from "react-icons/fa";

const AssetFilter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const resetFilters = () => {
    setFilters({
      category: "",
      status: "",
      department: "",
      location: "",
    });
  };

  return (
    <div className="bg-white shadow rounded-xl p-5">

      <div className="flex items-center gap-2 mb-5">
        <FaFilter className="text-cyan-600" />

        <h2 className="text-lg font-semibold">
          Filters
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Category */}
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">All Categories</option>
          <option>Laptop</option>
          <option>Furniture</option>
          <option>Vehicle</option>
          <option>Printer</option>
          <option>Meeting Room</option>
        </select>

        {/* Status */}
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">All Status</option>
          <option>Available</option>
          <option>Allocated</option>
          <option>Reserved</option>
          <option>Under Maintenance</option>
          <option>Lost</option>
          <option>Retired</option>
          <option>Disposed</option>
        </select>

        {/* Department */}
        <select
          name="department"
          value={filters.department}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">All Departments</option>
          <option>IT</option>
          <option>Finance</option>
          <option>Human Resources</option>
          <option>Administration</option>
          <option>Transport</option>
        </select>

        {/* Location */}
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">All Locations</option>
          <option>Ahmedabad Office</option>
          <option>Second Floor</option>
          <option>Parking Area</option>
          <option>Server Room</option>
          <option>Warehouse</option>
        </select>

      </div>

      <div className="flex justify-end mt-5">

        <button
          onClick={resetFilters}
          className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg transition"
        >
          <FaUndo />

          Reset Filters
        </button>

      </div>

    </div>
  );
};

export default AssetFilter;