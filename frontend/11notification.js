import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [
    {
      id: 1,
      title: "Asset Assigned",
      message: "Dell Latitude 5440 has been assigned to Raj Mehta.",
      type: "success",
      isRead: false,
      createdAt: "2026-07-12 09:15",
    },
    {
      id: 2,
      title: "Maintenance Approved",
      message: "Maintenance request for Toyota Innova has been approved.",
      type: "info",
      isRead: false,
      createdAt: "2026-07-12 10:00",
    },
    {
      id: 3,
      title: "Overdue Return",
      message: "Laptop AF-0007 is overdue for return.",
      type: "warning",
      isRead: false,
      createdAt: "2026-07-11 17:45",
    },
    {
      id: 4,
      title: "Audit Completed",
      message: "Quarterly audit for the IT Department has been completed.",
      type: "success",
      isRead: true,
      createdAt: "2026-07-10 16:30",
    },
  ],
};

const notificationSlice = createSlice({
  name: "notifications",

  initialState,

  reducers: {
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },

    markAsRead: (state, action) => {
      const notification = state.notifications.find(
        (item) => item.id === action.payload
      );

      if (notification) {
        notification.isRead = true;
      }
    },

    markAllAsRead: (state) => {
      state.notifications.forEach((notification) => {
        notification.isRead = true;
      });
    },

    deleteNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (item) => item.id !== action.payload
      );
    },

    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const {
  addNotification,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  clearNotifications,
} = notificationSlice.actions;

export default notificationSlice.reducer;