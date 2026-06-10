import {
  Brain,
  Code2,
  Video,
  BarChart3,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: <Brain size={28} />,
      title: "AI-Generated Questions",
      desc: "Generate role-specific technical questions automatically from your job description.",
    },
    {
      icon: <Code2 size={28} />,
      title: "Live Coding Environment",
      desc: "Evaluate coding skills in a secure real-time coding workspace with multiple language support.",
    },
    {
      icon: <Video size={28} />,
      title: "Video Interview Recording",
      desc: "Capture candidate communication, confidence, and problem-solving explanations.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "AI Evaluation & Analytics",
      desc: "Receive detailed candidate scoring, insights, and performance reports instantly.",
    },
  ];

  const workflow = [
    {
      icon: <FileText size={24} />,
      title: "Upload Job Description",
    },
    {
      icon: <Brain size={24} />,
      title: "AI Generates Questions",
    },
    {
      icon: <Code2 size={24} />,
      title: "Live Coding Assessment",
    },
    {
      icon: <Video size={24} />,
      title: "Video Interview",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "AI Evaluation",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Shortlist Candidates",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-0 left-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 mb-8">
          ✨ AI-Powered Technical Screening Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
          Automate Your
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Screening
          </span>
          <br />
          With AI
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
          InterviewX automates the first round of technical interviews using
          AI-generated questions, live coding assessments, video recordings,
          intelligent evaluation, and performance analytics.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 font-semibold shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:scale-105 transition">
            Book a Demo
          </button>

          <button className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 transition">
            Start Free Trial
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-indigo-400">50+</h3>
            <p className="text-slate-400 mt-2">
              Hours Saved Monthly Per Team
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-indigo-400">90%</h3>
            <p className="text-slate-400 mt-2">
              Reduction in Manual Screening
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-indigo-400">3x</h3>
            <p className="text-slate-400 mt-2">Faster Hiring Pipeline</p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="relative py-24 border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-indigo-400 font-semibold">
              Problem Faced
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Companies spend too much time conducting initial technical
              interviews.
            </h2>

            <p className="mt-6 text-slate-400 leading-relaxed text-lg">
              Engineering teams spend countless hours manually screening
              candidates. Senior developers are pulled away from building
              products just to conduct repetitive first-round interviews.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-950/50 to-slate-950 border border-indigo-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-indigo-400">
              InterviewX Solution
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
              InterviewX automates the complete first screening round, helping
              recruiters identify top technical talent while reducing manual
              effort and hiring costs.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "AI-Generated Interview Questions",
                "Live Coding Environment",
                "Video Interview Recording",
                "AI Evaluation",
                "Performance Analytics",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Everything Needed To Automate Screening
          </h2>
          <p className="text-slate-400 mt-4">
            End-to-end AI-powered candidate evaluation platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-indigo-500/10 text-indigo-400 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">How InterviewX Works</h2>
            <p className="text-slate-400 mt-4">
              Simple workflow. Powerful hiring outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-6">
            {workflow.map((step, idx) => (
              <div
                key={idx}
                className="text-center bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>

                <div className="text-sm text-indigo-400 mb-2">
                  Step {idx + 1}
                </div>

                <h3 className="font-medium">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Evaluation */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold">
              AI Evaluation Engine
            </h2>

            <p className="mt-6 text-slate-400 leading-relaxed">
              Our AI evaluates candidate performance across coding,
              communication, problem-solving, and technical expertise to provide
              recruiters with objective hiring insights.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            {[
              ["Problem Solving", "95%"],
              ["Code Quality", "91%"],
              ["Communication", "89%"],
              ["Technical Knowledge", "86%"],
            ].map(([label, value]) => (
              <div key={label} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>{label}</span>
                  <span className="text-indigo-400">{value}</span>
                </div>

                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-16">
            Recruiter Analytics Dashboard
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              ["1,284", "Candidates Screened"],
              ["132", "Top Talent Identified"],
              ["18 Min", "Average Screening"],
              ["+63%", "Hiring Efficiency"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <h3 className="text-3xl font-bold text-indigo-400">
                  {value}
                </h3>
                <p className="text-slate-400 mt-2">{label}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="space-y-4">
              {[
                ["Sarah Jenkins", "Senior Full Stack Engineer", "94/100"],
                ["Alex Rivera", "Backend Engineer", "88/100"],
                ["Mikael Chen", "DevOps Engineer", "72/100"],
              ].map(([name, role, score]) => (
                <div
                  key={name}
                  className="flex justify-between items-center bg-slate-950 rounded-xl border border-slate-800 p-4"
                >
                  <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-slate-500">{role}</p>
                  </div>

                  <div className="text-indigo-400 font-bold">
                    {score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Trusted By Hiring Teams
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <p className="text-lg text-slate-300">
              "What took our engineering team 20 hours every week now takes
              less than 2. InterviewX transformed our hiring process."
            </p>

            <div className="mt-6 text-indigo-400">
              — Engineering Manager
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <p className="text-lg text-slate-300">
              "We reduced technical screening costs by nearly 70% while
              improving candidate quality."
            </p>

            <div className="mt-6 text-indigo-400">
              — Head of Talent Acquisition
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-slate-800">
        <h2 className="text-5xl font-bold">
          Screen Better Candidates.
          <br />
          Hire Faster.
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-slate-400 text-lg">
          Automate technical interviews with AI and focus only on the most
          qualified candidates.
        </p>

        <button className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 px-10 py-5 rounded-xl font-semibold shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:scale-105 transition" pointer="cursor">
          Start Screening Candidates Today
          <ArrowRight size={18} />
        </button>

        <p className="mt-12 text-slate-600 text-sm">
          © {new Date().getFullYear()} InterviewX. All Rights Reserved.
        </p>
      </section>
    </div>
  );
}

export default Home;