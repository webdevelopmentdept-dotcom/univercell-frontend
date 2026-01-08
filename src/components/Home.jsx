import image from "../assets/imag1.png";
import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Univercell Mobile | Mobile Service & Training – Radnus Communication
        </title>

        <meta
          name="description"
          content="Univercell Mobile, rebranded as Radnus Communication in 2011. Trusted mobile sales, service and technician training experts across India since 2003."
        />

        <meta
          name="keywords"
          content="Univercell Mobile, Univercell Mobile Pondicherry, Radnus Communication, mobile service center, mobile repair training, chip level mobile repair, mobile technician training India"
        />

        <link rel="canonical" href="https://www.univercellmobile.co.in/" />
      </Helmet>

      <section
        id="home"
        style={{
          minHeight: "96vh",
          paddingTop: "100px",
          background:
            "linear-gradient(135deg,#5b2be0 0%,#7b3fe4 35%,#b43acb 65%,#2f80ed 100%)",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="row align-items-center text-white">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 hero-left">
              <h1 className="fw-bold display-5">
                <span style={{ color: "#ffffff" }}>UNIVERCELL MOBILE</span>
              </h1>

              <h4 className="mt-2">
                <span style={{ color: "#ffd6ff", fontWeight: "700" }}>
                  Rebranded as RADNUS COMMUNICATION in 2011
                </span>
              </h4>

              <p
                className="mt-3"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: "480px",
                  lineHeight: "1.9",
                }}
              >
                Trusted mobile sales, service and technician training experts.
                Same organization, same team and same values — serving customers
                across India for over two decades.
              </p>

              <a
                href="https://www.radnus.in"
                className="btn rounded-pill px-4 py-2 mt-3"
                style={{
                  background: "#ffffff",
                  color: "#5b2be0",
                  fontWeight: 500,
                }}
              >
                Visit Radnus.in
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src={image}
                alt="Univercell Mobile rebranded as Radnus Communication"
                className="img-fluid   mw-100"
                style={{
                  transform: "rotate(-4deg)",
                  maxHeight: "490px",
                }}
              />
            </div>
          </div>
        </div>

        {/* DIAGONAL WHITE CURVE */}
        <div className="hero-diagonal-curve" />
      </section>
    </>
  );
}
