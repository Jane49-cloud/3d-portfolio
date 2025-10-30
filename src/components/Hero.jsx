import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const highlights = [
    {
      icon: "🎯",
      title: "Strategic Design",
      description: "End-to-end product strategy with measurable outcomes",
    },
    {
      icon: "⚡",
      title: "Premium Motion",
      description: "60fps interactions that feel buttery smooth",
    },
    {
      icon: "🚀",
      title: "Scale Ready",
      description: "Production-grade architecture from day one",
    },
    {
      icon: "🎨",
      title: "Pixel Perfect",
      description: "Obsessive attention to every micro-interaction",
    },
  ];

  const stats = [
    { value: "4+", label: "Years", sublabel: "Building digital products" },
    { value: "30+", label: "Launches", sublabel: "Global reach" },
    { value: "95%", label: "Client NPS", sublabel: "Partner satisfaction" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient orbs */}
      <motion.div
        style={{ x: mousePosition.x, y: mousePosition.y }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        style={{ x: -mousePosition.x, y: -mousePosition.y }}
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-6 sm:px-12 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">
                Available for select projects
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-none">
              <span className="block text-white">Craft meets</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Engineering
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Full-stack engineer obsessed with building{" "}
              <span className="text-cyan-400 font-semibold">
                premium digital experiences
              </span>
              . I transform ambitious ideas into polished products that users
              love.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-shadow"
              >
                View Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-slate-700 hover:border-cyan-500/50 rounded-full font-semibold text-white backdrop-blur-sm transition-colors"
              >
                Let's Talk
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all cursor-pointer group"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl p-8 overflow-hidden"
              >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

                {/* Code preview mockup */}
                <div className="relative space-y-3 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="h-4 bg-gradient-to-r from-slate-700/50 to-transparent rounded"
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    />
                  ))}
                </div>

                {/* Tech stack badges */}
                <div className="relative flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind", "Framer"].map(
                    (tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + i * 0.1 }}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </motion.span>
                    )
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
              </motion.div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -left-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-4 shadow-2xl max-w-[200px]"
              >
                <div className="text-xs font-semibold text-cyan-100 mb-1">
                  Current Project
                </div>
                <div className="text-sm font-bold text-white">
                  AI-Powered Analytics
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 shadow-2xl max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-purple-100">
                    Live Status
                  </span>
                </div>
                <div className="text-sm font-bold text-white">
                  Building in Public
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
