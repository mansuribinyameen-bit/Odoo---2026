import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

const statusColors = {
  Available: "bg-green-100 text-green-700",
  Allocated: "bg-blue-100 text-blue-700",
  Reserved: "bg-yellow-100 text-yellow-700",
  "Under Maintenance": "bg-orange-100 text-orange-700",
  Lost: "bg-red-100 text-red-700",
  Retired: "bg-gray-100 text-gray-700",
  Disposed: "bg-slate-200 text-slate-700",
};

const AssetTable = ({ searchText, filters }) => {
  const { assets } = useSelector((state) => state.assets);

  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => {
      const search = searchText.toLowerCase();

      const matchesSearch =
        asset.assetTag.toLowerCase().includes(search) ||
        asset.name.toLowerCase().includes(search) ||
        asset.serialNumber.toLowerCase().includes(search) ||
        asset.department.toLowerCase().includes(search) ||
        asset.assignedTo.toLowerCase().includes(search);

      const matchesCategory =
        !filters.category ||
        asset.category === filters.category;

      const matchesStatus =
        !filters.status ||
        asset.status === filters.status;

      const matchesDepartment =
        !filters.department ||
        asset.department === filters.department;

      const matchesLocation =
        !filters.location ||
        asset.location === filters.location;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesDepartment &&
        matchesLocation
      );
    });
  }, [assets, searchText, filters]);

  return (
    <div className="bg-white rounded-xl shadow">

      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b">

        <h2 className="text-xl font-bold">
          Asset Directory
        </h2>

        <Link
          to="/dashboard/assets/register"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaPlus />

          Register Asset
        </Link>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-4 py-3 text-left">
                Asset Tag
              </th>

              <th className="px-4 py-3 text-left">
                Asset
              </th>

              <th className="px-4 py-3 text-left">
                Category
              </th>

              <th className="px-4 py-3 text-left">
                Department
              </th>

              <th className="px-4 py-3 text-left">
                Assigned To
              </th>

              <th className="px-4 py-3 text-left">
                Location
              </th>

              <th className="px-4 py-3 text-left">
                Condition
              </th>

              <th className="px-4 py-3 text-left">
                Status
              </th>

              <th className="px-4 py-3 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredAssets.length === 0 ? (
              <tr>
                <td
                  colSpan={9}
                  className="text-center py-10 text-gray-500"
                >
                  No assets found.
                </td>
              </tr>
            ) : (
              filteredAssets.map((asset) => (
                <tr
                  key={asset.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-4 font-semibold">
                    {asset.assetTag}
                  </td>

                  <td className="px-4 py-4">
                    {asset.name}
                  </td>

                  <td className="px-4 py-4">
                    {asset.category}
                  </td>

                  <td className="px-4 py-4">
                    {asset.department}
                  </td>

                  <td className="px-4 py-4">
                    {asset.assignedTo || "-"}
                  </td>

                  <td className="px-4 py-4">
                    {asset.location}
                  </td>

                  <td className="px-4 py-4">
                    {asset.condition}
                  </td>

                  <td className="px-4 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColors[asset.status]
                      }`}
                    >
                      {asset.status}
                    </span>

                  </td>

                  <td className="px-4 py-4">

                    <div className="flex justify-center gap-3">

                      <Link
                        to={`/dashboard/assets/${asset.id}`}
                        className="text-blue-600 hover:text-blue-800"
                        title="View"
                      >
                        <FaEye />
                      </Link>

                      <button
                        className="text-green-600 hover:text-green-800"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="flex justify-between items-center p-5 border-t">

        <p className="text-sm text-gray-500">
          Showing {filteredAssets.length} asset(s)
        </p>

        <div className="flex gap-2">

          <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
            Previous
          </button>

          <button className="px-3 py-2 bg-cyan-600 text-white rounded-lg">
            1
          </button>

          <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
            Next
          </button>

        </div>

      </div>

    </div>
  );
};

export default AssetTable;