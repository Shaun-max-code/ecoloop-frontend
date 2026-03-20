import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-200 text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold text-gray-800 mb-6"
      >
        Turn Waste into Worth ♻️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-600 mb-10 max-w-xl"
      >
        EcoLoop helps you recycle smarter, faster, and responsibly.
      </motion.p>

      <div className="flex gap-6">
        <button className="px-8 py-3 bg-green-600 text-white rounded-2xl shadow-lg hover:bg-green-700 hover:scale-105 transition">
          Upload Waste
        </button>

        <button className="px-8 py-3 border-2 border-green-600 text-green-700 rounded-2xl hover:bg-green-50 transition">
          Explore Recyclers
        </button>
      </div>

    </div>
  );
}