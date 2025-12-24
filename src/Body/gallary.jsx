import React, { useState, useMemo, useEffect, useRef } from "react";
import galleryDataJson from "../json-file-loop/Data-Loop.json";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORY_MAP = {
  "LOGO DESIGN" : ["Logo-Design"],
  "WEB DEVELOPMENT": ["Web-Design-Figma", "WEb-Design-Figma"],
  "PHOTO DESIGN": ["Photo-Editing"],
  ANIMATION: ["Animations"],
};

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeGroup, setActiveGroup] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hovered, setHovered] = useState(false);
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const cleanData = useMemo(
    () =>
      galleryDataJson.map((item) => ({
        ...item,
        type: item.src?.endsWith(".mp4") ? "video" : "image",
      })),
    []
  );

  const groupedData = useMemo(() => {
    let data = cleanData;
    if (activeFilter !== "ALL") {
      data = cleanData.filter((item) =>
        CATEGORY_MAP[activeFilter]?.includes(item.title)
      );
    }
    return data.reduce((acc, item) => {
      if (!acc[item.group]) acc[item.group] = [];
      acc[item.group].push(item);
      return acc;
    }, {});
  }, [cleanData, activeFilter]);

  const groupItems = activeGroup ? groupedData[activeGroup] : [];
  const activeItem = groupItems[modalIndex];

  const next = () => setModalIndex((i) => (i + 1) % groupItems.length);
  const prev = () =>
    setModalIndex((i) => (i === 0 ? groupItems.length - 1 : i - 1));

  useEffect(() => {
    document.body.style.overflow = activeGroup ? "hidden" : "auto";
  }, [activeGroup]);

  // ================= THUMBNAIL DOTS =================
  const totalDots = groupItems.length
    ? Math.ceil(groupItems.length / Math.floor(window.innerWidth / 90))
    : 1;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.clientWidth;
    setActiveDot(Math.round(scrollLeft / containerWidth));
  };

  return (
    <>
<section id="portfolio" className="my-5 py-5 bg-text" data-text="04">
      <div id="portfolio" className="section-header my-5 " data-aos="fade-up">
        <div className="row justify-content-center g-5">
          <div className="col-lg-4">
            <span className="text-muted text-uppercase">some of my recent works</span>
            <h2 className="display-2 txt-fx slide-up ">Portfolio</h2>
          </div>
          <div className="col-lg-4" data-aos="fade-up">
            <p>
              This project showcases my creative design style across logo design, photo editing, graphic design, motion graphics, and Figma UI/UX design. It highlights my problem-solving approach by turning ideas into visually engaging and user-friendly solutions. Each element tells a story, reflecting my ability to communicate concepts effectively through design.
            </p>
            {/* <a href="#gallary" className="btn btn-dark px-5 py-4">View All</a> */}
          </div>
        </div>
      </div>
</section>


      {/* ================= FILTER BUTTONS ================= */}
      <div style={{ textAlign: "center", margin: 30 }}>
        {["ALL", "LOGO DESIGN", "WEB DEVELOPMENT", "PHOTO DESIGN", "ANIMATION"].map(
          (f) => (
            <button
              key={f}
              onClick={() => {
                setActiveFilter(f);
                setActiveGroup(null);
              }}
              style={{
                margin: 6,
                padding: "10px 22px",
                borderRadius: 30,
                border: "none",
                fontWeight: 600,
                background: activeFilter === f ? "#000" : "#ddd",
                color: activeFilter === f ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {f}
            </button>
          )
        )}
      </div>

      {/* ================= GROUP CARDS ================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20,
          // padding: 20,
        }}
      >
        {Object.entries(groupedData).map(([gid, items]) => {
          const preview = items[0];

          return (
            <div
              key={gid}
              style={{
                cursor: "pointer",
                borderRadius: 14,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 6px 15px rgba(0,0,0,.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
              onClick={() => setActiveGroup(gid)}
            >
              {preview.type === "video" ? (
                <video
                  src={preview.src}
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                  muted
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={preview.src}
                  alt=""
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                />
              )}

              <div style={{ padding: 14, flex: 1 }}>
                <h4 style={{ marginBottom: 6 }}>{preview.subtitle}</h4>
                <p style={{ fontSize: 14, color: "#555", marginBottom: 12 }}>
                  {preview.description}
                </p>
              </div>

              {!isMobile && (
                <div style={{ padding: "0 14px 14px 14px" }}>
                  <button
                    style={{
                      padding: "8px 18px",
                      borderRadius: 20,
                      border: "none",
                      background: "#000",
                      color: "#fff",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                    onClick={() => setActiveGroup(gid)}
                  >
                    View Project →
                  </button>
                </div>
              )}

              {isMobile && (
                <div
                  onClick={() => setActiveGroup(gid)}
                  style={{
                    padding: 12,
                    textAlign: "center",
                    fontWeight: 600,
                    cursor: "pointer",
                    borderTop: "1px solid #eee",
                  }}
                >
                  Tap to View →
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ================= MODAL ================= */}
      {activeGroup && activeItem && (
        <div
          onClick={() => setActiveGroup(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.95)",
            zIndex: 9999,
            padding: 20,
            overflowY: "auto",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 1200, margin: "auto", color: "#fff" }}
          >
            <button
              onClick={() => setActiveGroup(null)}
              style={{
                position: "fixed",
                top: 20,
                right: 20,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <X size={32} color="#fff" />
            </button>

            {/* HEADING */}
            <h2 style={{ marginBottom: 15, color: "#fff" }}>
              {activeItem.subtitle}
            </h2>

            {/* CONTENT */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
                gap: 20,
              }}
            >
              {/* IMAGE / VIDEO */}
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {activeItem.type === "video" ? (
                  <video
                    src={activeItem.src}
                    controls
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    style={{ width: "100%" }}
                  />
                ) : (
                  <img
                    src={activeItem.src}
                    alt=""
                    style={{ width: "100%" }}
                  />
                )}

                {/* OVERLAY ARROWS ONLY ON HOVER */}
                {!isMobile && hovered && (
                  <>
                    <button
                      onClick={prev}
                      style={{
                        position: "absolute",
                        left: 10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,.6)",
                        borderRadius: "50%",
                        border: "none",
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <ChevronLeft color="#fff" size={24} />
                    </button>

                    <button
                      onClick={next}
                      style={{
                        position: "absolute",
                        right: 10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,.6)",
                        borderRadius: "50%",
                        border: "none",
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <ChevronRight color="#fff" size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* TEXT */}
              <div style={{ marginTop: isMobile ? 15 : 0 }}>
                <h4 style={{ color: "#fff" }}>{activeItem.title}</h4>
                <p style={{ lineHeight: 1.6 }}>{activeItem.description}</p>
              </div>
            </div>

            {/* MOBILE BUTTONS */}
            {isMobile && (
              <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                <button
                  onClick={prev}
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 8,
                    border: "none",
                    background: "#FFD600",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  ← Previous
                </button>
                <button
                  onClick={next}
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 8,
                    border: "none",
                    background: "#FFD600",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Next →
                </button>
              </div>
            )}

            {/* ================= THUMBNAILS WITH DOTS ================= */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              style={{
                display: "flex",
                gap: 10,
                overflowX: "auto",
                overflowY: "hidden",
                whiteSpace: "nowrap",
                width: "100%",
                paddingBottom: 10,
                paddingTop: 20,
                scrollBehavior: "smooth",
              }}
            >
              {groupItems.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => setModalIndex(i)}
                  style={{
                    width: 80,
                    height: 60,
                    flex: "0 0 auto",
                    border:
                      modalIndex === i
                        ? "2px solid #FFD600"
                        : "2px solid transparent",
                    cursor: "pointer",
                  }}
                >
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* DOT INDICATORS */}
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 8 }}>
              {Array.from({ length: totalDots }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: i === activeDot ? "#FFD600" : "#555",
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
