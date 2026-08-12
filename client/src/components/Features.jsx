import { FileText, Briefcase, Brain } from "lucide-react";
import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      icon: <FileText size={42} className="text-purple-500" />,
      title: "AI Resume Review",
      desc: "Get instant AI suggestions to improve your resume.",
    },
    {
      icon: <Briefcase size={42} className="text-purple-500" />,
      title: "Application Tracker",
      desc: "Track every job application in one dashboard.",
    },
    {
      icon: <Brain size={42} className="text-purple-500" />,
      title: "Interview Preparation",
      desc: "Practice coding, aptitude and HR questions.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-black text-white py-24 px-8"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Why Choose JobTrack AI?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;