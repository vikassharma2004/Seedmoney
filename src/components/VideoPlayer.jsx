import { useRef, useEffect } from "react";

export default function VideoPlayer({ src, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.focus();
    }
  }, []);

  return (
    <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        title={title}
        controls
        className="w-full h-full"
        tabIndex={0}
        aria-label={`Video player for ${title}`}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
