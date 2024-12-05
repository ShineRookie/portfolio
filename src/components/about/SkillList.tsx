import {motion} from "framer-motion";

export const SkillsList = () => {
    const skills = ['TypeScript', 'Swift', 'Python', 'C++', "C#"];

    return (
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-center"
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    );
};