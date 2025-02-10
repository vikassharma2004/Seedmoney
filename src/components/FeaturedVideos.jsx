import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import img from "../../public/placeholder.svg"

const featuredVideos = [
  {
    id: "1",
    title: "Introduction to Accessibility",
    thumbnail: img,
  },
  {
    id: "2",
    title: "Web Development Basics",
    thumbnail: img,
  },
  {
    id: "3",
    title: "Machine Learning Fundamentals",
    thumbnail: img,
  },
]

export default function FeaturedVideos() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Featured Content</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Popular Learning Videos
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((video) => (
              <div key={video.id} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <img
                          className="h-24 w-full object-cover rounded-md"
                          src={video.thumbnail || img}
                          alt={video.title}
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{video.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Learn about {video.title.toLowerCase()} in this engaging video.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link href={`/video/${video.id}`}>
                      <Button variant="outline" className="w-full">
                        Watch Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to={"/videos"}>
            <Button size="lg">View All Videos</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

