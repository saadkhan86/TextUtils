import React from "react";

export default function About({ mode }) {
  const isLight = mode === "light";
  const textColor = isLight ? "#212529" : "#f8f9fa";
  const bgColor = isLight ? "#f8f9fa" : "#121212";
  const cardBg = isLight ? "white" : "#1e1e1e";
  const cardShadow = isLight
    ? "0 4px 12px rgba(0,0,0,0.08)"
    : "0 4px 12px rgba(255,255,255,0.05)";

  const features = [
    { title: "Upper / Lower Case", desc: "Convert text instantly between uppercase and lowercase." },
    { title: "Word & Character Count", desc: "Get live statistics for your content." },
    { title: "Smart Space Removal", desc: "Clean up extra spaces and tidy your text easily." },
    { title: "Quick Copy", desc: "Copy text with one click to use anywhere." },
    { title: "Light & Dark Mode", desc: "Comfortable themes that adapt to your environment." },
  ];

  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        minHeight: "90vh",
        transition: "all 0.4s ease",
      }}
    >
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ letterSpacing: "1px" }}>
          About <span style={{ color: isLight ? "#007bff" : "#66b2ff" }}>TextUtils</span>
        </h1>
        <p className="lead mt-3" style={{ maxWidth: "700px", margin: "auto" }}>
          TextUtils is a lightweight, modern React-based application designed to make text
          analysis effortless. Clean interface. Powerful tools. Instant results.
        </p>
      </div>

      {/* Features Section */}
      <div className="row g-4">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              className="card h-100 border-0"
              style={{
                backgroundColor: cardBg,
                boxShadow: cardShadow,
                borderRadius: "16px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div className="card-body text-center p-4">
                <h5 className="card-title mb-3 fw-semibold">
                  {feature.title}
                </h5>
                <p className="card-text text-secondary">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technology Section */}
      <div className="mt-5 text-center">
        <h3 className="fw-bold mb-3">Built With Modern Tech</h3>
        <p className="text-secondary mb-1">
          <strong>React.js</strong> • <strong>Bootstrap 5</strong> • <strong>React Router</strong>
        </p>
        <p className="text-secondary">
          Your preferences (like theme mode) are saved using <strong>localStorage</strong> for a
          smooth experience every time.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-5 text-center">
        <h3 className="fw-bold mb-3">Our Mission</h3>
        <p className="lead" style={{ maxWidth: "700px", margin: "auto" }}>
          To simplify text editing for creators, students, and professionals — making every word
          count. Fast, reliable, and thoughtfully built for productivity.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-5 text-center text-muted">
        <small>
          Made with ❤️ by <strong><a href="https://github.com/saadkhan86" target="_blank" rel="noopener noreferrer">saadkhan86</a></strong> • Powered by React
        </small>
      </footer>
    </div>
  );
}
