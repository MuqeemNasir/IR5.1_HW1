import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { employees } from "./Employee";

function EmployeeDetails() {
  const { empId } = useParams();
  const emp = employees.find((em) => em.id === empId);

  return (
    <>
      <div>
        <Header />
        <section className="container mt-4">
          <div className="row">
            <div className="col">
              <div id="emp-details">
                {emp ? (
                  <>
                    <h2>{emp.name}</h2>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <strong>Name: </strong>
                        {emp.name}
                      </li>
                      <li className="list-group-item">
                        <strong>Designation: </strong>
                        {emp.title}
                      </li>
                      <li className="list-group-item">
                        <strong>Department: </strong>
                        {emp.department}
                      </li>
                    </ul>
                  </>
                ) : (
                  <p className="alert alert-danger">Employee Not Found.</p>
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default EmployeeDetails;
