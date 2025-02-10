import { Play, FileText, Brain } from "lucide-react";

const steps = [
  {
    name: "Watch",
    description: "Access our vast library of educational videos on various topics.",
    icon: Play,
  },
  {
    name: "Summarize",
    description: "Get AI-powered summaries of video content for quick understanding.",
    icon: FileText,
  },
  {
    name: "Quiz",
    description: "Test your knowledge with automatically generated quizzes.",
    icon: Brain,
  },
];

export default function HowItWorks() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Learning made accessible
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform is designed to make learning easy and accessible for everyone, regardless of their abilities.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div key={step.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}