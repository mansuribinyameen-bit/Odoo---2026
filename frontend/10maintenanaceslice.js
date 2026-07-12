import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maintenanceRequests: [
    {
      id: 1,
      assetId: 3,
      assetTag: "AF-0003",
      assetName: "Toyota Innova",
      issue: "Engine oil leakage",
      priority: "High",
      requestedBy: "Raj Mehta",
      requestedDate: "2026-07-10",
      technician: "",
      status: "Pending",
      remarks: "",
    },
    {
      id: 2,
      assetId: 1,
      assetTag: "AF-0001",
      assetName: "Dell Latitude 5440",
      issue: "Keyboard not working",
      priority: "Medium",
      requestedBy: "Priya Shah",
      requestedDate: "2026-07-08",
      technician: "Amit Patel",
      status: "In Progress",
      remarks: "Waiting for replacement keyboard",
    },
  ],
};

const maintenanceSlice = createSlice({
  name: "maintenance",

  initialState,

  reducers: {
    addRequest: (state, action) => {
      state.maintenanceRequests.push(action.payload);
    },

    approveRequest: (state, action) => {
      const request = state.maintenanceRequests.find(
        (item) => item.id === action.payload
      );

      if (request) {
        request.status = "Approved";
      }
    },

    rejectRequest: (state, action) => {
      const request = state.maintenanceRequests.find(
        (item) => item.id === action.payload.id
      );

      if (request) {
        request.status = "Rejected";
        request.remarks = action.payload.remarks || "";
      }
    },

    assignTechnician: (state, action) => {
      const request = state.maintenanceRequests.find(
        (item) => item.id === action.payload.id
      );

      if (request) {
        request.technician = action.payload.technician;
        request.status = "In Progress";
      }
    },

    resolveRequest: (state, action) => {
      const request = state.maintenanceRequests.find(
        (item) => item.id === action.payload.id
      );

      if (request) {
        request.status = "Resolved";
        request.remarks = action.payload.remarks || "";
      }
    },
  },
});

export const {
  addRequest,
  approveRequest,
  rejectRequest,
  assignTechnician,
  resolveRequest,
} = maintenanceSlice.actions;

export default maintenanceSlice.reducer;