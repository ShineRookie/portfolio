import {motion} from "framer-motion";
import {ContactInfo} from "./ContactInfo.tsx";
import {pageVariants, pageTransition} from "../../constants/animations.ts";

const ContactPage = () => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-100 p-8"
    >
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl w-full max-w-md"
        >
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Свяжитесь со мной</h2>
            <ContactInfo />
        </motion.div>
    </motion.div>
);

export default ContactPage;