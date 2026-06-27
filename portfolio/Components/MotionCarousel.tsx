import { techStack } from "@/data/techstack";
import { motion } from "motion/react";

const Carousel = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-8
        rounded-md
        bg-linear-to-r
        from-[#5648B7]/10
        via-[#41C9B9]/5
        to-[#5648B7]/10
        border
        border-[#41C9B9]/20
        shadow-xl
        shadow-[#5648B7]/10
      "
    >
      {/* Left Fade */}
      <div
        className="
          absolute
          left-0
          top-0
          z-10
          h-full
          w-10 md:w-24
          bg-linear-to-r
          from-[#5648B7]
          via-[#5648B7]/70
          to-transparent
        "
      />

      {/* Right Fade */}
      <div
        className="
          absolute
          right-0
          top-0
          z-10
          h-full
          w-10 md:w-24
          bg-linear-to-l
          from-[#41C9B9]
          via-[#41C9B9]/70
          to-transparent
        "
      />

      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={`${tech.name}-${index}`}
              className="
                flex
                shrink-0
                items-center
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                px-4 md:px-6
                py-2 md:py-3
                gap-2 md:gap-3
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/20
              "
            >
              <Icon
                size={22}
                style={{ color: tech.color }}
              />

              <span className="font-medium">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Carousel;