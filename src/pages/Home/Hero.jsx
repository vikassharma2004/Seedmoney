import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img from "../../../public/placeholder.svg";



export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Main container with max width */}
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Decorative SVG element for design */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* Hero section heading */}
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Accessible learning for</span>{" "}
                <span className="block text-indigo-600 xl:inline">everyone</span>
              </h1>
              {/* Hero section description */}
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience a new way of learning with our inclusive video platform. Designed for all abilities, our
                cutting-edge technology ensures that everyone can access and enjoy educational content.
              </p>
              {/* Call-to-action buttons */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {/* Start Learning button */}
                <div className="rounded-md shadow">
                  <Link to="/videos">
                    <Button size="lg" className="w-full">
                      Start Learning
                    </Button>
                  </Link>
                </div>
                {/* Learn More button */}
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Hero section image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={img}
          alt="Students using the AccessLearn platform"
        />
      </div>
    </div>
  );
}
