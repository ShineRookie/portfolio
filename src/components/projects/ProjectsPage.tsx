import {motion} from "framer-motion";
import {pageVariants, pageTransition} from "../../constants/animations.ts";


const ProjectsPage = () => {
    const projects = [
        {
            title: 'Веб мессенджер',
            description: 'Приложение для обмена сообщениями в реальном времени с минималистичным дизайном и удобным интерфейсом',
            techs: ['React', 'JavaScript', 'Tailwind', 'Firebase'],
            link: 'https://flux-messenger-58c3e.web.app/'
        },
        {
            title: 'Виртуальный музей',
            description: 'Содержит каталог мифов казахского народа  о созвездиях который нарождаются на территории северного Казахстана',
            techs: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
            link: 'https://constellation-myth.web.app/'
        },
        {
            title: 'Type App',
            description: 'Приложение, где пользователь может вводить слова, чтобы активировать музыкальные эффекты',
            techs: ['React', 'JavaScript'],
            link: 'https://shinerookie.github.io/TypeAppOnReact/'
        },
        {
            title: 'Weather App',
            description: 'Простое и удобное приложение для получения актуальной информации о погоде в выбранных регионах',
            techs: ['React', 'JavaScript'],
            link: 'https://weather-app-ac2d5.web.app/'
        },
    ];

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-200 p-8 flex items-center justify-center"
        >
            <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Мои Проекты</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3, duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200"
                        >
                            <h3 className="text-xl font-bold mb-4 text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techs.map(tech => (
                                    <span
                                        key={tech}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                            >
                                Посетить сайт
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsPage;