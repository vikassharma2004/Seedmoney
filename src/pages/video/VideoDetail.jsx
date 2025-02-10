import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { fetchVideoById, fetchRelatedVideos } from "@/lib/video"; 
import VideoPlayer from "../../components/VideoPlayer.jsx";


const VideoDetail = () => {
  const { id } = useParams(); // Getting video ID from the URL
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const fetchedVideo = await fetchVideoById(id);
        if (!fetchedVideo) {
          setError("Video not found");
          return;
        }
        setVideo(fetchedVideo);
        const related = await fetchRelatedVideos(id);
        setRelatedVideos(related);
      } catch (err) {
        setError("Failed to fetch video");
      } finally {
        setLoading(false);
      }
    };

    loadVideo();
  }, [id]);

  if (loading) {
    return <div>Loading video...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video Player Section */}
          <div className="lg:w-2/3">
            <VideoPlayer src={video.url} title={video.title} />
          </div>

          {/* Video Summary on the Right */}
          <div className="lg:w-1/3">
            <div className="bg-white p-4 rounded-lg shadow-md h-full overflow-y-auto">
              <h2 className="text-xl font-semibold">{video.title}</h2>
              <p className="mt-2 text-gray-700">{video.summary}</p>
            </div>
          </div>
        </div>

        {/* Related Videos Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Related Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedVideos.map((video) => (
              <div key={video.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 rounded-lg object-cover"
                />
                <div className="mt-4">
                  <p className="font-semibold text-lg">{video.title}</p>
                  <p className="text-sm text-gray-500">{video?.views || 1000} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoDetail;
