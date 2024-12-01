import {motion} from "framer-motion";
import {SkillsList} from "./SkillList.tsx";
import {pageVariants, pageTransition} from "../../constants/animations.ts";

const AboutPage = () => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 p-8"
    >
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
        >
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Обо мне</h2>
            <p className="text-gray-700 leading-relaxed">
                Я начинающий разработчик с разносторонним опытом программирования на нескольких языках.
                Освоил основы разработки как в веб-приложениях, так и в нативных и системных проектах.
                Стремлюсь углублять свои знания и применять их в создании эффективных и качественных решений.
            </p>
            <SkillsList />
        </motion.div>
    </motion.div>
);

export default AboutPage;