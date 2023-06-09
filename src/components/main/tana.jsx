import React from "react";
import "./main.scss";

export default function Tana() {
  return (
    <>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Pricing</h1>
        <p className="fs-5 text-muted">
          bu ish bootstrapt va react kutubxonalari yordamida ishlangan narx navo misoli
        </p>
      </div>

      <main>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }} className="mb-3 text-center">
          <div className="my-card">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  0$
                  <small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Sign up for free
                </button>
              </div>
            </div>
          </div>
          <div className="my-card">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  19$
                  <small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Get started</button>
              </div>
            </div>
          </div>
          <div className="my-card">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3"><h4 className="my-0 fw-normal">Enterprice</h4></div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  29$
                  <small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
