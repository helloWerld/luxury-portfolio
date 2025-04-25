import { useRef, useEffect } from "react";

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  lineColor = "#efefef",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = -10,
  className = "",
  style = {},
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll("span");
    let isInitialAnimation = true;
    let spinCount = 0;
    let lastTime = 0;
    const spinDuration = 400;
    const totalSpins = 1;

    const initialSpin = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const progress = timestamp - lastTime;
      const rotation = (progress / spinDuration) * 360;

      items.forEach((item) => {
        item.style.setProperty("--rotate", `${rotation}deg`);
      });

      if (progress < spinDuration) {
        requestAnimationFrame(initialSpin);
      } else {
        spinCount++;
        lastTime = 0;
        if (spinCount < totalSpins) {
          requestAnimationFrame(initialSpin);
        } else {
          isInitialAnimation = false;
          // Reset rotation to 0 after initial animation
          items.forEach((item) => {
            item.style.setProperty("--rotate", "0deg");
          });
        }
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (isInitialAnimation) return;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = event.clientX - centerX;
        const a = event.clientY - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r =
          ((Math.acos(b / c) * 180) / Math.PI) *
          (event.clientY > centerY ? 1 : -1);

        item.style.setProperty("--rotate", `${r}deg`);
      });
    };

    window.addEventListener("pointermove", onPointerMove);

    // Start initial spin animation
    requestAnimationFrame(initialSpin);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ clientX: rect.x, clientY: rect.y } as PointerEvent);
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  // Create a grid's worth of spans
  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      className="block origin-center"
      style={
        {
          backgroundColor: lineColor,
          width: lineWidth,
          height: lineHeight,
          "--rotate": `${baseAngle}deg`,
          transform: "rotate(var(--rotate))",
          willChange: "transform",
        } as React.CSSProperties
      }
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`grid place-items-center ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style,
      }}
    >
      {spans}
    </div>
  );
}
