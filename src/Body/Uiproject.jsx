import { useState } from "react";
import projects from "../json-file-loop/ui_project.json";
import { motion, AnimatePresence } from "framer-motion";

function UIProject_Component() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* MAIN SECTION */}
      <div id="uiux" data-aos="fade-up"
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#ffffff",
          padding: "100px 0px",
          boxSizing: "border-box",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto 60px",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <p style={{ fontSize: "12px", letterSpacing: "4px", color: "#8d8d8d" }}>
            PORTFOLIO
          </p>

          <h1 style={{ fontSize: "60px", color: "#111", fontWeight: "700" }}>
            UI / UX Design
          </h1>

          <p style={{ color: "#666", fontSize: "18px" }}>
            Click any project below to open case study.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
                borderRadius: "22px",
                overflow: "hidden",
                cursor: "pointer",
                background: "#fff",
                boxShadow: "0 8px 28px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "24px",
                }}
              >
                <h2 style={{ color: "#fff", fontSize: "24px" }}>
                  {project.title}
                </h2>

                <span style={{ color: "#f2f2f2", fontSize: "14px" }}>
                  View Project →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL WITH ANIMATION */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: "0",
              background: "#f5f5f2",
              zIndex: 9999,
              overflowY: "auto",
            }}
          >
            {/* BACK BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "fixed",
                top: "30px",
                left: "30px",
                width: "54px",
                height: "54px",
                border: "none",
                borderRadius: "50%",
                background: "#111",
                color: "#fff",
                fontSize: "18px",
                cursor: "pointer",
                zIndex: 10000,
              }}
            >
              ←
            </button>

            {/* CONTENT */}
            <div
              style={{
                maxWidth: "1500px",
                margin: "0 auto",
                padding: "100px 5vw",
              }}
            >
              <h1 style={{ textAlign: "center", fontSize: "48px" }}>
                {selectedProject.title}
              </h1>

              {selectedProject.link && (
                <p style={{ textAlign: "center" }}>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More →
                  </a>
                </p>
              )}

              {/* CONTENT IMAGES / VIDEOS */}
              <div style={{ background: "#fff" }}>
                {selectedProject.content.map((item, index) => (
                  <div key={index}>
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt=""
                        style={{
                          width: "100%",
                          display: "block",
                        }}
                      />
                    ) : (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        style={{ width: "100%", display: "block" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default UIProject_Component;