import "./styles.css";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section className="mt-3">
            <div className="row">
              <div className="col-md-12">
                <img
                  src="https://placehold.co/400x300/EFEFEFF/grey?text=Employees%20Smiling"
                  alt="Employees Smiling Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </section>
          <section className="mt-5">
            <div className="row">
              <div className="col-md-12">
                <h2>Our Employees</h2>
                <p>
                  Meet our dedicated team of professionals who work terelessly
                  to achieve our company's goal.
                </p>
                <Link to="/employee" className="btn btn-primary">
                  View Employees
                </Link>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <div className="row">
              <div className="col-md-12">
                <h2>Company Report</h2>
                <p>
                  Explore our latest financial report to gain insights into our
                  company's performance and growth.
                </p>
                <Link to="/report" className="btn btn-primary">
                  View Report
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
