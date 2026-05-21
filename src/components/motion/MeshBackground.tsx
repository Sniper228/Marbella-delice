"use client";

import { motion } from "framer-motion";

export function MeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="mesh-blob left-[-10%] top-[10%] h-[420px] w-[420px] bg-strawberry/35 dark:bg-strawberry/20"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mesh-blob right-[-5%] top-[30%] h-[380px] w-[380px] bg-mango/30 dark:bg-mango/15"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mesh-blob bottom-[5%] left-[25%] h-[320px] w-[320px] bg-berry-soft/25 dark:bg-berry-soft/12"
        animate={{ x: [0, 30, 0], y: [0, -35, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mesh-blob bottom-[20%] right-[15%] h-[260px] w-[260px] bg-fresh-blue/20 dark:bg-fresh-blue/10"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
