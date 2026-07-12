import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [
    {
      id: 1,
      resourceId: 2,
      resourceName: "Conference Room B2",
      bookedBy: "Raj Mehta",
      department: "Finance",
      date: "2026-07-15",
      startTime: "09:00",
      endTime: "10:00",
      purpose: "Team Meeting",
      status: "Upcoming",
    },
    {
      id: 2,
      resourceId: 3,
      resourceName: "Toyota Innova",
      bookedBy: "Priya Shah",
      department: "HR",
      date: "2026-07-16",
      startTime: "13:00",
      endTime: "15:00",
      purpose: "Client Visit",
      status: "Upcoming",
    },
  ],
};

const hasOverlap = (bookings, newBooking) => {
  return bookings.some((booking) => {
    if (
      booking.resourceId !== newBooking.resourceId ||
      booking.date !== newBooking.date ||
      booking.status === "Cancelled"
    ) {
      return false;
    }

    return (
      newBooking.startTime < booking.endTime &&
      newBooking.endTime > booking.startTime
    );
  });
};

const bookingSlice = createSlice({
  name: "bookings",

  initialState,

  reducers: {
    addBooking: (state, action) => {
      if (!hasOverlap(state.bookings, action.payload)) {
        state.bookings.push(action.payload);
      } else {
        alert("Booking overlaps with an existing booking.");
      }
    },

    cancelBooking: (state, action) => {
      const booking = state.bookings.find(
        (b) => b.id === action.payload
      );

      if (booking) {
        booking.status = "Cancelled";
      }
    },

    completeBooking: (state, action) => {
      const booking = state.bookings.find(
        (b) => b.id === action.payload
      );

      if (booking) {
        booking.status = "Completed";
      }
    },

    updateBooking: (state, action) => {
      const index = state.bookings.findIndex(
        (b) => b.id === action.payload.id
      );

      if (index !== -1) {
        if (!hasOverlap(state.bookings, action.payload)) {
          state.bookings[index] = action.payload;
        } else {
          alert("Updated booking overlaps with another booking.");
        }
      }
    },
  },
});

export const {
  addBooking,
  cancelBooking,
  completeBooking,
  updateBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;