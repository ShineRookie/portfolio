import {motion} from "framer-motion";
import SocialLinks from "../contact/SocialLinks.tsx";
import {pageVariants, pageTransition} from "../../constants/animations.ts";

const HomePage = () => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200"
    >
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl"
        >
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Курмангалиев Алмат</h1>
            <p className="text-2xl text-gray-600">Software Engineer | Разработчик Приложений</p>
            <div className="flex justify-center gap-6 mt-6">
                <SocialLinks />
            </div>
        </motion.div>
    </motion.div>
);

export default HomePage;