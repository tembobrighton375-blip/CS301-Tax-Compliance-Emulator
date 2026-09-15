// export default function AppShell({
//   children,
//   accentColor = "#C9A870",
//   maxWidth: maxWidthOverride = null,
// }) {
//   const [width, setWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1200,
//   );

//   useEffect(() => {
//     const onResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const isMobile = width < 640;
//   const isTablet = width >= 640 && width < 1024;
//   const isDesktop = width >= 1024;

//   // Use override if provided, otherwise default per breakpoint
//   const maxWidth = maxWidthOverride
//     ? isMobile
//       ? "100%"
//       : maxWidthOverride
//     : isDesktop
//       ? 1100
//       : isTablet
//         ? 720
//         : "100%";

//   const borderRadius = isMobile ? 0 : isDesktop ? 24 : 16;
//   const outerPadding = isMobile ? 0 : isDesktop ? 24 : 16;

//   return (
//     <div
//       style={{
//         minHeight: "100dvh",
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "flex-start",
//         background: "linear-gradient(160deg, #2a3d4d 0%, #4a5f72 100%)",
//         padding: outerPadding,
//         boxSizing: "border-box",
//       }}
//     >
//       {isDesktop && (
//         <div
//           style={{
//             position: "fixed",
//             top: "20%",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "700px",
//             height: "700px",
//             background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
//             pointerEvents: "none",
//             zIndex: 0,
//           }}
//         />
//       )}

//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           maxWidth: maxWidth,
//           background:
//             "linear-gradient(180deg, rgba(30,50,75,0.6) 0%, rgba(20,35,55,0.75) 100%)",
//           backdropFilter: "blur(24px)",
//           WebkitBackdropFilter: "blur(24px)",
//           border: isMobile ? "none" : "1px solid rgba(255,255,255,0.12)",
//           borderRadius: borderRadius,
//           boxShadow: isMobile ? "none" : "0 24px 60px rgba(0,0,0,0.4)",
//           overflow: "hidden",
//           zIndex: 1,
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function AppShell({
  children,
  accentColor = "#C9A870",
  maxWidth: maxWidthOverride = null,
}) {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  // Use override if provided, otherwise default per breakpoint
  const maxWidth = maxWidthOverride
    ? isMobile
      ? "100%"
      : maxWidthOverride
    : isDesktop
      ? 1100
      : isTablet
        ? 720
        : "100%";

  const borderRadius = isMobile ? 0 : isDesktop ? 24 : 16;
  const outerPadding = isMobile ? 0 : isDesktop ? 24 : 16;

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "linear-gradient(160deg, #2a3d4d 0%, #4a5f72 100%)",
        padding: outerPadding,
        boxSizing: "border-box",
      }}
    >
      {isDesktop && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "700px",
            background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: maxWidth,
          background:
            "linear-gradient(180deg, rgba(30,50,75,0.6) 0%, rgba(20,35,55,0.75) 100%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: isMobile ? "none" : "1px solid rgba(255,255,255,0.12)",
          borderRadius: borderRadius,
          boxShadow: isMobile ? "none" : "0 24px 60px rgba(0,0,0,0.4)",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
