import { configureStore } from "@reduxjs/toolkit";

// Reducers
import authReducer from "./slices/authSlice";
import assetReducer from "./slices/assetSlice";
import bookingReducer from "./slices/bookingSlice";
import maintenanceReducer from "./slices/maintenanceSlice";
import notificationReducer from "./slices/notificationSlice";
import organizationReducer from "./slices/organizationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    assets: assetReducer,
    bookings: bookingReducer,
    maintenance: maintenanceReducer,
    notifications: notificationReducer,
    organization: organizationReducer,
  },

  devTools: true,
});