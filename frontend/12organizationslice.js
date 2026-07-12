import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departments: [
    {
      id: 1,
      name: "IT",
      head: "Amit Patel",
      parentDepartment: "",
      status: "Active",
    },
    {
      id: 2,
      name: "Human Resources",
      head: "Priya Shah",
      parentDepartment: "",
      status: "Active",
    },
    {
      id: 3,
      name: "Finance",
      head: "Rajesh Joshi",
      parentDepartment: "",
      status: "Active",
    },
  ],

  categories: [
    {
      id: 1,
      name: "Electronics",
      warrantyMonths: 24,
    },
    {
      id: 2,
      name: "Furniture",
      warrantyMonths: 0,
    },
    {
      id: 3,
      name: "Vehicle",
      warrantyMonths: 60,
    },
  ],

  employees: [
    {
      id: 1,
      name: "Admin User",
      email: "admin@assetflow.com",
      department: "IT",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Amit Patel",
      email: "amit@assetflow.com",
      department: "IT",
      role: "Asset Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Priya Shah",
      email: "priya@assetflow.com",
      department: "Human Resources",
      role: "Department Head",
      status: "Active",
    },
    {
      id: 4,
      name: "Raj Mehta",
      email: "raj@assetflow.com",
      department: "Finance",
      role: "Employee",
      status: "Active",
    },
  ],
};

const organizationSlice = createSlice({
  name: "organization",

  initialState,

  reducers: {
    addDepartment: (state, action) => {
      state.departments.push(action.payload);
    },

    updateDepartment: (state, action) => {
      const index = state.departments.findIndex(
        (dept) => dept.id === action.payload.id
      );

      if (index !== -1) {
        state.departments[index] = action.payload;
      }
    },

    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },

    updateCategory: (state, action) => {
      const index = state.categories.findIndex(
        (cat) => cat.id === action.payload.id
      );

      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },

    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },

    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      );

      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },

    promoteEmployee: (state, action) => {
      const employee = state.employees.find(
        (emp) => emp.id === action.payload.id
      );

      if (employee) {
        employee.role = action.payload.role;
      }
    },

    deactivateEmployee: (state, action) => {
      const employee = state.employees.find(
        (emp) => emp.id === action.payload
      );

      if (employee) {
        employee.status = "Inactive";
      }
    },

    activateEmployee: (state, action) => {
      const employee = state.employees.find(
        (emp) => emp.id === action.payload
      );

      if (employee) {
        employee.status = "Active";
      }
    },
  },
});

export const {
  addDepartment,
  updateDepartment,
  addCategory,
  updateCategory,
  addEmployee,
  updateEmployee,
  promoteEmployee,
  deactivateEmployee,
  activateEmployee,
} = organizationSlice.actions;

export default organizationSlice.reducer;