import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      setMessage("Please enter your email address.");
      setIsSuccess(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsSuccess(false);
      return;
    }

    setMessage("Thank you for subscribing!");
    setIsSuccess(true);
    setEmail("");
  };

  return (
    <footer className="bg-white text-dark pt-5 pb-4" id="footer">
      <div className="container text-start" style={{ maxWidth: "1100px" }}>
        <div className="row gy-4">
          {/* Brand Section */}
          <div className="col-md-4">
            <h5
              className="fs-5 mb-3"
              style={{ color: "rgba(75, 79, 216, 0.97)" }}
            >
              Univercell Mobile (Rebranded as Radnus Communication in 2011)
            </h5>

            <p className="mb-3">
              Delivering trusted mobile sales, repairs, training, and genuine
              accessories across India since 2003.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3">
              <a
                href="https://www.instagram.com/radnus_cellphone_training/"
                className="social-box"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram fs-5"></i>
              </a>

              <a
                href="https://www.facebook.com/radnus.cellphone.training"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
              >
                <i className="bi bi-facebook fs-5"></i>
              </a>

              <a
                href="https://www.youtube.com/results?search_query=radnus+pondicherry"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
              >
                <i className="bi bi-youtube fs-5"></i>
              </a>

              <a
                href="https://wa.me/919940973030"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
              >
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 ps-md-5 text-dark">
            <h6
              className="fs-5 mb-3"
              style={{ color: "rgba(75, 79, 216, 0.97)" }}
            >
              Quick Links
            </h6>

            <ul className="list-unstyled footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/who-we-are">Who we are</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
            </ul>

            <div className="mt-4">
              <h6
                className="fs-6 mb-2"
                style={{ color: "rgba(75, 79, 216, 0.97)" }}
              >
                Call Us for Enquiries
              </h6>

              <a
                href="tel:+919940973030"
                className="text-decoration-none fw-semibold"
                style={{ color: "#222" }}
              >
                <i className="bi bi-telephone me-2"></i>
                +91 9940973030
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h6
              className="mb-3 fs-5"
              style={{ color: "rgba(75, 79, 216, 0.97)" }}
            >
              Stay Updated
            </h6>

            <p className="mb-3">
              Subscribe to our newsletter for the latest updates and insights.
            </p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control bg-light text-dark mb-2 border rounded-3"
              placeholder="Enter your email"
            />

            <button
              className="subscribe-btn w-100 rounded-3 py-2"
              onClick={handleSubscribe}
            >
              Subscribe →
            </button>

            {message && (
              <div
                className={`mt-2 fw-semibold ${
                  isSuccess ? "text-success" : "text-danger"
                }`}
              >
                {message}
              </div>
            )}

            <small className="text-secondary d-block mt-2">
              We respect your privacy. Unsubscribe at any time.
            </small>
          </div>
        </div>
      </div>

      <hr className="footer-hr" />

      <div className="text-center">
        © {new Date().getFullYear()} Univercell Mobile → Radnus. All rights
        reserved.
      </div>

      {/* Styles */}
      <style jsx>{`
        .social-box {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #bbbbbb;
          border-radius: 12px;
          text-decoration: none;
          color: #222222;
          background: white;
        }

        .social-box:hover {
          border-color: rgba(75, 79, 216, 0.97);
          color: rgba(168, 75, 216, 0.97);
          transform: translateY(-2px);
          transition: all 0.2s ease;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #140c0cff;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: rgba(168, 75, 216, 0.97);
        }

        .subscribe-btn {
          border: 1px solid rgba(222, 222, 233, 0.97);
          background: linear-gradient(90deg, rgba(168, 75, 216, 0.97));
          color: white;
        }

        .subscribe-btn:hover {
          background: white;
          color: black;
          border: 1px solid rgba(168, 75, 216, 0.97);
        }

        .footer-hr {
          width: 100%;
          margin: 20px;
          border-top: 1px solid #290b0b54;
        }
      `}</style>
    </footer>
  );
}
