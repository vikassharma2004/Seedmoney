import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react";

export default function VideoInfo({ video }) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">{video.title || "Untitled Video"}</h1>
      <div className="flex justify-between items-center mt-2">
        <p className="text-sm text-gray-500">
          {video.views?.toLocaleString() || "0"} views • {video.uploadDate || "Unknown date"}
        </p>
        <div className="flex space-x-4">
          <Button variant="outline" size="sm">
            <ThumbsUp className="w-4 h-4 mr-2" />
            {video.likes?.toLocaleString() || "0"}
          </Button>
          <Button variant="outline" size="sm">
            <ThumbsDown className="w-4 h-4 mr-2" />
            {video.dislikes?.toLocaleString() || "0"}
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <p className={`text-sm ${isDescriptionExpanded ? "" : "line-clamp-2"}`}>
          {video.description || "No description available."}
        </p>
        {video.description && (
          <Button
            variant="link"
            size="sm"
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            className="mt-1 p-0"
          >
            {isDescriptionExpanded ? "Show less" : "Show more"}
          </Button>
        )}
      </div>
    </div>
  );
}
