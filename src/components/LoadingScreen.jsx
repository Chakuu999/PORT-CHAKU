import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Swornim Shrestha";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-text">
        {text}
        <span className="animate-blink" style={{ marginLeft: "2px" }}>|</span>
      </div>

      <div className="loading-bar">
        <div className="loading-bar-inner"></div>
      </div>
    </div>
  );
};