import { Eye, Ear, Hand, MessageSquare } from "lucide-react"

const features = [
  {
    name: "Eye-tracking Support",
    description: "Navigate and control the platform using eye movements.",
    icon: Eye,
  },
  {
    name: "Speech Recognition",
    description: "Control the platform and navigate content using voice commands.",
    icon: MessageSquare,
  },
  {
    name: "Gesture Controls",
    description: "Use hand gestures to interact with videos and platform features.",
    icon: Hand,
  },
  {
    name: "Audio Descriptions",
    description: "Detailed audio descriptions of video content for visually impaired users.",
    icon: Ear,
  },
]

export default function AccessibilityFeatures() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Accessibility</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Designed for everyone
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform incorporates cutting-edge accessibility features to ensure that all users can enjoy a seamless
            learning experience.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}



