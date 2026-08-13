import {
  FileText,
  BriefcaseBusiness,
  Brain,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      icon: <FileText size={30} />,
      title: "AI Resume Review",
      desc: "Get instant AI-powered suggestions to improve your resume, structure and job-readiness.",
    },
    {
      icon: <BriefcaseBusiness size={30} />,
      title: "Application Tracker",
      desc: "Track every job application, interview and opportunity from one organized dashboard.",
    },
    {
      icon: <Brain size={30} />,
      title: "Interview Preparation",
      desc: "Practice coding, aptitude and HR questions to become more confident before interviews.",
    },
  ];

  return (
    <section
      id="features"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-purple-400 font-semibold tracking-[0.25em] text-sm mb-4">
            EVERYTHING YOU NEED
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Why Choose JobTrack AI?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Everything you need to organize your job search and move
            closer to your dream career.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;