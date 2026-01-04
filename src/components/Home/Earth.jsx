import React, { useEffect, useState, useRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoMercator } from "d3-geo";
import { gsap } from "gsap";
import { countryImages, destinations } from "../../data/Earth/data";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const hub = { name: "Nepal", coordinates: [84.124, 28.3949] };

const Earth = () => {
  const projection = geoMercator()
    .scale(100)
    .translate([800 / 2, 450 / 2]);

  const [progress, setProgress] = useState(0);
  const [hoveredDestination, setHoveredDestination] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const blinkingDotsRef = useRef([]);

  useEffect(() => {
    let animationFrameId;
    let start;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const newProgress = (elapsed % 4000) / 4000;
      setProgress(newProgress);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    if (blinkingDotsRef.current.length === 0) return;

    const blinkTween = gsap.to(blinkingDotsRef.current, {
      opacity: 0,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      stagger: 0.15,
    });

    return () => {
      blinkTween.kill();
    };
  }, []);

  const setDotRef = (el, index) => {
    blinkingDotsRef.current[index] = el;
  };

  const handleMouseEnter = (event, destination) => {
    const { clientX, clientY } = event;
    setHoveredDestination(destination);
    setPopupPos({ x: clientX, y: clientY });
  };

  const handleMouseLeave = () => {
    setHoveredDestination(null);
  };

  return (
    <div
      className="w-full bg-white"
      style={{ height: 810, position: "relative" }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 100 }}
        width={800}
        height={450}
        style={{ display: "block", margin: "0 auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.properties.NAME !== "Antarctica")
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#BFD9F2"
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                />
              ))
          }
        </Geographies>

        <Marker coordinates={hub.coordinates}>
          <circle r={3} fill="#1f3c88" stroke="#fff" strokeWidth={2} />
        </Marker>

        {destinations.map(({ name, coordinates }, index) => (
          <Marker
            key={name}
            coordinates={coordinates}
            onMouseEnter={(e) => handleMouseEnter(e, { name, coordinates })}
            onMouseLeave={handleMouseLeave}
          >
            <circle
              ref={(el) => setDotRef(el, index)}
              r={5}
              fill="purple"
              stroke="white"
              strokeWidth={1}
              style={{ opacity: 1 }}
            />
          </Marker>
        ))}

        {destinations.map(({ name, coordinates }) => {
          const [x1, y1] = projection(hub.coordinates);
          const [x2, y2] = projection(coordinates);

          const x = x1 + (x2 - x1) * progress;
          const y = y1 + (y2 - y1) * progress;

          return (
            <g key={name}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#e63946"
                strokeWidth={1.5}
                strokeDasharray="6 6"
                strokeLinecap="round"
                opacity={0.8}
              />
              <circle cx={x} cy={y} r={2} fill="#e63946" />
            </g>
          );
        })}
      </ComposableMap>

      {hoveredDestination && (
        <div
          style={{
            position: "fixed",
            top: popupPos.y + 10,
            left: popupPos.x + 10,
            backgroundColor: "white",
            padding: 8,
            borderRadius: 6,
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            pointerEvents: "none",
            zIndex: 10,
            width: 140,
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: 6,
              textAlign: "center",
              fontSize: 14,
            }}
          >
            {hoveredDestination.name}
          </div>
          <img
            src={countryImages[hoveredDestination.name]}
            alt={hoveredDestination.name}
            style={{ width: "100%", borderRadius: 4 }}
          />
        </div>
      )}
    </div>
  );
};

export default Earth;
