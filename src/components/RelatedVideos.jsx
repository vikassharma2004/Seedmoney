
import { useEffect, useState } from "react";
import { fetchRelatedVideos } from "@/lib/video";
const RelatedVideos = ({ currentVideoId }) => {
    const [relatedVideos, setRelatedVideos] = useState([]);
  
    useEffect(() => {
      const Videos = async () => {
        // Simulate fetching related video data
        const fetchedRelatedVideos = await fetchRelatedVideos(currentVideoId);
        setRelatedVideos(fetchedRelatedVideos);
      };
  
      Videos();
    }, [currentVideoId]);
  
    return (
      <div>
        <ul>
          {relatedVideos.map((video) => (
            <li key={video.id} className="flex mb-4 items-center">
              <img src={video.thumbnail} alt={video.title} className="w-32 h-24 rounded-lg object-cover" />
              <div className="ml-4">
                <p className="font-semibold text-xl">{video.title}</p>
                <p className="text-sm text-gray-500">{video?.views||1000} views</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RelatedVideos;
  