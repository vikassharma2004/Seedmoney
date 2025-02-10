import { useEffect,useState } from "react";
import {fetchVideoSummaryById} from "../lib/video.js"
 const  VideoSummary = ({ videoId }) => {
    const [summary, setSummary] = useState(null);
  
    useEffect(() => {
      const fetchSummary = async () => {
        // Simulate fetching summary data
        // You can replace this with an API call
        const fetchedSummary = await fetchVideoSummaryById(videoId);
        setSummary(fetchedSummary);
      };
  
      fetchSummary();
    }, [videoId]);
  
    return (
      <div>
        <p>{summary || "Loading summary..."}</p>
      </div>
    );
  };
  export default VideoSummary;
  