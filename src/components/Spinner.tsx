import React from "react";
import { motion } from "framer-motion";

const Spinner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-[999]"
    >
      <div className="w-14 h-14 border-4 border-white/30 border-t-indigo-600 rounded-full animate-spin" />
    </motion.div>
  );
};

export default Spinner;
