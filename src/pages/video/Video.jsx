import { useState, useEffect } from "react";
import { fetchVideos } from "@/lib/video";
import { Link } from "react-router-dom";

const VideoLibrary = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVideos() {
      try {
        setLoading(true);
        const response = await fetchVideos();
        setVideos(response);
      } catch (err) {
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    }
    loadVideos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center animate-pulse">Video Library</h1>

      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <Link to={`/video/${video.id}`}
            key={video.id}
            className="border p-4 cursor-pointer hover:bg-gray-100"
          >
            <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
            <h2 className="font-semibold mt-2">{video.title}</h2>
            <p className="text-sm text-gray-600">{video.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;
