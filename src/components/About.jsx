import aboutImg from "../assets/about-mobile.png";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="py-4 bg-white">
        <div className="container">
          <div className="row align-items-center gy-3">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-12 text-lg-start text-center px-4">
              <div
                className="d-inline-block px-3 py-1 rounded-pill mb-2"
                style={{ backgroundColor: "#EDE9FE" }}
              >
                <small
                  className="text-uppercase fw-bold"
                  style={{
                    color: "#4A00E0",
                    letterSpacing: "1.4px",
                    fontSize: "13px",
                  }}
                >
                  ABOUT US
                </small>
              </div>

              <h2 className="fw-bold mt-2" style={{ color: "#0F172A" }}>
                From <span style={{ color: "#E22D97" }}>UNIVERCELL</span> to
                <span style={{ color: "#4A00E0" }}> RADNUS</span>
              </h2>

              <p
                className="mt-2"
                style={{
                  color: "#475569",
                  lineHeight: "1.8",
                  fontSize: "15px",
                }}
              >
                Univercell Mobile Pondicherry (Puducherry) is a trusted mobile
                service, technician training and chip-level repair support
                company. Rebranded as Radnus Communication in 2011, we have been
                serving customers across Pondicherry and Tamil Nadu with quality
                service and long-term trust since 2003.
              </p>

              <a
                href="https://www.radnus.in/about"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill px-4 py-2 mt-3"
                style={{ backgroundColor: "#E22D97", color: "#fff" }}
              >
                Explore Our Journey
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 col-12 text-center px-4">
              <img
                src={aboutImg}
                alt="Univercell Mobile Pondicherry rebranded as Radnus Communication"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
