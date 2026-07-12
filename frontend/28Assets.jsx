import { useState } from "react";

import AssetSearch from "./components/AssetSearch";
import AssetFilter from "./components/AssetFilter";
import AssetTable from "./components/AssetTable";

const Assets = () => {
  const [searchText, setSearchText] = useState("");

  const [filters, setFilters] = useState({
    category: "",
    status: "",
    department: "",
    location: "",
  });

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Asset Directory
          </h1>

          <p className="text-gray-500 mt-1">
            Search, filter and manage all organization assets.
          </p>
        </div>

      </div>

      {/* Search */}
      <AssetSearch
        searchText={searchText}
        setSearchText={setSearchText}
      />

      {/* Filters */}
      <AssetFilter
        filters={filters}
        setFilters={setFilters}
      />

      {/* Asset Table */}
      <AssetTable
        searchText={searchText}
        filters={filters}
      />

    </div>
  );
};

export default Assets;