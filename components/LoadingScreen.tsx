import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "../public/lottie/loading.json"; // Kendi animasyon dosyan

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.section
        key="loading"
        role="alert"
        aria-live="assertive"
        aria-busy="true"
        tabIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black bg-opacity-95 backdrop-blur-md px-6"
      >
        {/* Animasyon Kutusu */}
        
        <motion.div
          className="w-80 h-80 mb-8 select-none pointer-events-none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <Lottie animationData={loadingAnimation} loop={true} />
        </motion.div>

        {/* Başlık */}
        <motion.h1
          className="text-white text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide select-none drop-shadow-lg text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Oyunlar Yükleniyor...
        </motion.h1>

        {/* Açıklama */}
        <motion.p
          className="max-w-xl text-center text-gray-300 text-lg leading-relaxed select-text drop-shadow-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          En güncel oyun verileri sunuluyor. Sabırlı olduğunuz için teşekkürler!
          <br />
          Keyifli oyunlar! 🎮🚀
        </motion.p>

        {/* İsteğe bağlı: animasyonlu küçük loading dots */}
        <motion.div
          className="flex space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, repeat: Infinity, repeatType: "loop" }}
          aria-hidden="true"
        >
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="block w-4 h-4 rounded-full bg-purple-500"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
