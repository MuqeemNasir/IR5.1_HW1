import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export const employees = [
  {
    id: "1",
    name: "John Doe",
    title: "Software Developer",
    department: "IT",
    hoursWorked: 210,
    performanceRate: 0.79,
    overTimeHours: 60,
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Designer",
    department: "Design",
    hoursWorked: 195,
    performanceRate: 0.95,
    overTimeHours: 45,
  },
  {
    id: "3",
    name: "Bob Johnson",
    title: "Project Manager",
    department: "Management",
    hoursWorked: 170,
    performanceRate: 0.85,
    overTimeHours: 20,
  },
];

const Employee = () => {
  const [departmentFilter, setDepartmentFilter] = useState("All");

  const filteredDepartment =
    departmentFilter === "All"
      ? employees
      : employees.filter((emp) => emp.department === departmentFilter);

  return (
    <>
      <Header />
      <div className="container py-3">
        <h2>List of Employees</h2>
        <div className="form-group my-4">
          <label htmlFor="departmentFilter">Filter by Department: </label>
          <select
            id="departmentFilter"
            className="form-select"
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
          </select>
        </div>
        <ul className="list-group">
          {filteredDepartment.map((emp) => (
            <li key={emp.id} className="list-group-item">
              <h5>{emp.name}</h5>
              <p>{emp.title}</p>
              <Link to={`/employee/${emp.id}`} className="btn btn-primary">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Employee;
