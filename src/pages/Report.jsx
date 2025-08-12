import Header from "../components/Header";
import Footer from "../components/Footer";
import { employees } from "./Employee";

const Report = () => {
  const mostWorkedEmp = employees.reduce((acc, curr) =>
    acc.hoursWorked > curr.hoursWorked ? acc : curr
  );

  const highestRatedEmp = employees.reduce((acc, curr) =>
    acc.performanceRate > curr.performanceRate ? acc : curr
  );

  const totalOvertimeHours = employees.reduce(
    (acc, curr) => acc + curr.overTimeHours,
    0
  );

  return (
    <>
      <Header />
      <div className="container py-4">
        <h2>HR Report</h2>
        <hr />
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3>Most Worked Employee</h3>
            {mostWorkedEmp && (
              <>
                <p>Name: {mostWorkedEmp.name}</p>
                <p>Hours Worked: {mostWorkedEmp.hoursWorked}</p>
              </>
            )}
          </div>
          <div className="col-md-4 mb-4">
            <h3>Highest Rated Employee</h3>
            {highestRatedEmp && (
              <>
                <p>Name: {highestRatedEmp.name}</p>
                <p>Performance Rate: {highestRatedEmp.performanceRate}</p>
              </>
            )}
          </div>
          <div className="col-md-4 mb-4">
            <h3>Total Overtime Hours</h3>
            <p>Total Overtime Hours: {totalOvertimeHours}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Report;
