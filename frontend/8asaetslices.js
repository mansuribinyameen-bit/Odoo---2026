import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assets: [
    {
      id: 1,
      assetTag: "AF-0001",
      name: "Dell Latitude 5440",
      category: "Laptop",
      serialNumber: "DL-2026-1001",
      department: "IT",
      assignedTo: "Raj Mehta",
      location: "Ahmedabad Office",
      condition: "Excellent",
      status: "Allocated",
      acquisitionDate: "2026-01-15",
      acquisitionCost: 85000,
      isBookable: false,
    },
    {
      id: 2,
      assetTag: "AF-0002",
      name: "Conference Room B2",
      category: "Meeting Room",
      serialNumber: "-",
      department: "Administration",
      assignedTo: "",
      location: "Second Floor",
      condition: "Excellent",
      status: "Available",
      acquisitionDate: "2025-08-10",
      acquisitionCost: 0,
      isBookable: true,
    },
    {
      id: 3,
      assetTag: "AF-0003",
      name: "Toyota Innova",
      category: "Vehicle",
      serialNumber: "GJ01AB1234",
      department: "Transport",
      assignedTo: "",
      location: "Parking Area",
      condition: "Good",
      status: "Under Maintenance",
      acquisitionDate: "2024-06-20",
      acquisitionCost: 1850000,
      isBookable: true,
    },
  ],
};

const assetSlice = createSlice({
  name: "assets",

  initialState,

  reducers: {
    addAsset: (state, action) => {
      state.assets.push(action.payload);
    },

    updateAsset: (state, action) => {
      const index = state.assets.findIndex(
        (asset) => asset.id === action.payload.id
      );

      if (index !== -1) {
        state.assets[index] = action.payload;
      }
    },

    deleteAsset: (state, action) => {
      state.assets = state.assets.filter(
        (asset) => asset.id !== action.payload
      );
    },

    changeStatus: (state, action) => {
      const asset = state.assets.find(
        (a) => a.id === action.payload.id
      );

      if (asset) {
        asset.status = action.payload.status;
      }
    },
  },
});

export const {
  addAsset,
  updateAsset,
  deleteAsset,
  changeStatus,
} = assetSlice.actions;

export default assetSlice.reducer;