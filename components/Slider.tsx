"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

const images = ["/mural/img1.jpg", "/mural/img2.jpg", "/mural/img3.jpg"];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        userSelect: "none",
        fontFamily: "sans-serif",
      }}
    >

      <div
        className="min-h-90"
        style={{
          position: "relative", 
          height: "360px",      
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1000px",
          padding: "20px 0",
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
                width: isCenter ? "48%" : "28%",
                height: isCenter ? "300px" : "290px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: isCenter
                  ? "0 20px 60px rgba(0,0,0,0.3)"
                  : "0 8px 30px rgba(0,0,0,0.15)",
                
              
                transform: isCenter
                  ? "translateX(0%) scale(1)"
                  : isLeft
                    ? "translateX(-145%) scale(0.99) rotate(4deg)"
                    : isRight
                      ? "translateX(145%) scale(0.99) rotate(-4deg)"
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
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}