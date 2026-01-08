import "bootstrap-icons/font/bootstrap-icons.css";
import { Helmet } from "react-helmet-async";

import s1 from "../assets/imageasacademy.jfif";
import s2 from "../assets/service.webp";
import s4 from "../assets/toolstech.png";
import s3 from "../assets/white.webp";
import s5 from "../assets/accessories1.jpg";
import s6 from "../assets/startup1.jpg";

const services = [
  {
    img: s1,
    title: "Radnus Academy",
    icon: "bi-mortarboard",
    desc: "Skill development, certification and placement support for aspiring mobile technicians.",
    link: "https://www.radnus.in/academy",
  },
  {
    img: s2,
    title: "Service Pro",
    icon: "bi-tools",
    desc: "Advanced chip-level repair support and board diagnosis for service professionals and B2B partners.",
    link: "https://www.radnus.in/service",
  },
  {
    img: s3,
    title: "OEM Solutions",
    icon: "bi-box-seam",
    desc: "Custom brand mobile accessories manufacturing with nationwide OEM and white-label distribution.",
    link: "https://www.radnus.in/whitelabel",
  },
  {
    img: s4,
    title: "Tools & Technologies",
    icon: "bi-cpu",
    desc: "Professional mobile repair tools, equipment supply, and complete service setup guidance.",
    link: "https://www.radnus.in/tools-tech",
  },
  {
    img: s5,
    title: "Accessories",
    icon: "bi-phone",
    desc: "Retail and wholesale distribution of genuine and branded mobile accessories across India.",
    link: "https://www.radnus.in/accessories",
  },
  {
    img: s6,
    title: "Startup Support",
    icon: "bi-rocket-takeoff",
    desc: "Business setup, mentoring and PMEGP loan assistance for new mobile entrepreneurs.",
    link: "https://www.radnus.in/startup",
  },
];

export default function Services() {
  return (
    <>
      {/* SERVICES SECTION */}
      <section id="services" className="py-5 bg-white">
        <div className="container">
          <style>{`
            .service-card {
              max-width: 280px;
              margin: auto;
            }

            .img-wrapper {
              aspect-ratio: 4 / 3;
              overflow: hidden;
              border-radius: 12px;
            }

            .service-card .img-fluid {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .service-icon {
              width: 44px;
              height: 44px;
              border-radius: 12px;
              background: rgba(75, 79, 216, 0.12);
              display: flex;
              align-items: center;
              justify-content: center;
              color: rgba(75, 79, 216, 0.97);
              font-size: 20px;
              margin-bottom: 8px;
            }

            .service-card .card-title {
              font-size: 16px;
            }

            .service-card .card-text {
              font-size: 13px;
            }

            .services-label {
              background: #3d227c38;
              color: rgb(74, 0, 224);
              letter-spacing: 1.4px;
              font-size: 14px;
              padding: 6px 14px;
              border-radius: 30px;
              display: inline-block;
              margin-bottom: 8px;
            }
          `}</style>

          {/* SECTION HEADER */}
          <div className="text-center mb-2">
            <span className="text-uppercase fw-bold services-label">
              SERVICES
            </span>
          </div>

          <h2 className="fw-bold fs-5 text-center mb-4">
            Services Ecosystem by Univercell Mobile
          </h2>

          {/* SERVICES GRID */}
          <div className="row gy-4 justify-content-center">
            {services.map((s, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card border-0 shadow-sm h-100 rounded-4 service-card">
                  <div className="p-2 img-wrapper">
                    <img
                      src={s.img}
                      className="img-fluid"
                      alt={`${s.title} service by Univercell Mobile (Radnus Communication)`}
                    />
                  </div>

                  <div className="card-body text-start pt-2">
                    <div className="service-icon">
                      <i className={`bi ${s.icon}`}></i>
                    </div>

                    <h5 className="fw-bold card-title">{s.title}</h5>

                    <p className="mt-1 card-text " style={{ fontSize: "14px" }}>
                      {s.desc}
                    </p>

                    <div className="d-flex justify-content-end">
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary rounded-pill btn-sm px-3"
                        title={`${s.title} by Univercell Mobile`}
                        style={{ textDecoration: "none" }}
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
