"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

const images = ["/mural/img1.jpg", "/mural/img2.jpg", "/mural/img3.jpg"];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  // Swipe state
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // Handle Touch Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) next();
    if (isRightSwipe) prev();

    // Reset swipe state
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div
      className="slider-wrapper"
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        userSelect: "none",
        fontFamily: "sans-serif",
      }}
    >
      {/* Injecting CSS variables allows us to easily flip between mobile 
        and desktop layouts without hydration mismatch errors.
      */}
      <style>{`
        .slider-wrapper {
          --center-w: 70%;
          --side-w: 55%;
          --center-h: 250px;
          --side-h: 220px;
          --offset: 65%;
          --container-h: 300px;
        }
        @media (min-width: 640px) {
          .slider-wrapper {
            --center-w: 48%;
            --side-w: 28%;
            --center-h: 300px;
            --side-h: 290px;
            --offset: 145%;
            --container-h: 360px;
          }
        }
      `}</style>

      {/* Cards Container */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "relative",
          height: "var(--container-h)", // Responsive height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1000px",
          padding: "20px 0",
          overflow: "hidden", // Prevents horizontal scroll on mobile swipe
        }}
      >
        {images.map((src, index) => {
          const isCenter = index === current;
          const isLeft = index === (current - 1 + total) % total;
          const isRight = index === (current + 1) % total;

          const isVisible = isCenter || isLeft || isRight;

          return (
            <div
              key={index}
              onClick={() => {
                if (isLeft) prev();
                else if (isRight) next();
              }}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                margin: "0 auto",
                width: isCenter ? "var(--center-w)" : "var(--side-w)",
                height: isCenter ? "var(--center-h)" : "var(--side-h)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: isCenter
                  ? "0 20px 60px rgba(0,0,0,0.3)"
                  : "0 8px 30px rgba(0,0,0,0.15)",

                // Using calc() to dynamically apply the offset variable
                transform: isCenter
                  ? "translateX(0%) scale(1)"
                  : isLeft
                  ? "translateX(calc(-1 * var(--offset))) scale(0.99) rotate(4deg)"
                  : isRight
                  ? "translateX(var(--offset)) scale(0.99) rotate(-4deg)"
                  : "translateX(0%) scale(0.8)",

                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "auto" : "none",
                transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                cursor: isCenter ? "default" : "pointer",
                transformOrigin: isLeft
                  ? "right center"
                  : isRight
                  ? "left center"
                  : "center",
                zIndex: isCenter ? 2 : 1,
              }}
            >
              <Image
                src={src}
                alt={`Mural ${index + 1}`}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{
                  objectFit: "cover",
                  pointerEvents: "none",
                }}
                priority={isCenter}
              />
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "10px",
        }}
      >
        {[
          { label: "‹", action: prev },
          { label: "›", action: next },
        ].map(({ label, action }) => (
          <button
            className="font-extralight text-blue-500"
            key={label}
            onClick={action}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              border: "1.5px solid #e2e8f0",
              background: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}