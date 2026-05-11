import { useState } from "react";
import projects from "../json-file-loop/ui_project.json"
function UIProject_Component() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
    {/* tumbline-size-1200px 1500px  */}
    {/* main-tumbline- 1440px width Unlimited height  this for image creation (1536px 1024px)*/}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#ffffff",
          padding: "100px 0px",
          boxSizing: "border-box",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
             style={{
                maxWidth: "720px",
                margin: "0 auto 60px",
                textAlign: "center",
                padding: "0 20px",
             }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "4px",
              color: "#8d8d8d",
              marginBottom: "18px",
            }}
          >
            PORTFOLIO
          </p>

          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 76px)",
              lineHeight: "0.95",
              color: "#111",
              margin: "0 0 22px",
              fontWeight: "700",
            }}
          >
            UI / UX Design
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "6px",
            }}
          >
            I create modern and minimal digital experiences with strong user
            flow and clean interface systems.
          </p>

          <p
            style={{
              color: "#888",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Click any project below to open case study.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
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
                  display: "block",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1), transparent)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#ddd",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    marginBottom: "10px",
                  }}
                >
                  UI / UX
                </p>

                <h2
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    fontWeight: "600",
                    margin: "0 0 10px",
                  }}
                >
                  {project.title}
                </h2>

                <span
                  style={{
                    color: "#f2f2f2",
                    fontSize: "14px",
                  }}
                >
                  View Project →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          style={{
            position: "fixed",
            inset: "0",
            background: "#f5f5f2",
            zIndex: "9999",
            overflowY: "auto",
          }}
        >
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
              zIndex: "10000",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            ←
          </button>

          <div
            style={{
              maxWidth: "1500px",
              margin: "0 auto",
              padding: "100px 5vw ",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "50px",
              }}
            >
              <p
                style={{
                  color: "#8d8d8d",
                  fontSize: "12px",
                  letterSpacing: "4px",
                  marginBottom: "16px",
                }}
              >
                CASE STUDY
              </p>

              <h1
                style={{
                  fontSize: "clamp(42px, 5vw, 72px)",
                  color: "#111",
                  margin: "0",
                  fontWeight: "700",
                }}
              >
                {selectedProject.title}
              </h1>
              <p
                style={{
                  color: "#8d8d8d",
                  fontSize: "12px",
                  letterSpacing: "4px",
                  marginBottom: "16px",
                }}
              >
              {selectedProject.link && (
                  <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                  
                   >
                 Learn More →
                  </a>
                   )}
              </p>
            </div>
            

            <div
              style={{
                width: "100%",
                overflow: "hidden",
                lineHeight: "0",
                background: "#fff",
              }}
            >
              {selectedProject.content.map((item, index) => (
                <div key={index}>
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt=""
                      style={{
                        width: "100%",
                        display: "block",
                        margin: "0",
                        padding: "0",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      // controls
                      style={{
                        width: "100%",
                        display: "block",
                        margin: "0",
                        padding: "0",
                        background: "#000",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UIProject_Component;