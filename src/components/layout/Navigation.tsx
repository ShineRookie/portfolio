import {Code, Home, Mail, User} from "lucide-react";
import {motion} from "framer-motion";

const Navigation = ({ activeSection, setActiveSection } : {activeSection: string; setActiveSection: (section: string) => void}) => {
    const navItems = [
        { icon: <Home />, name: 'home', label: 'Главная' },
        { icon: <User />, name: 'about', label: 'Обо мне' },
        { icon: <Code />, name: 'projects', label: 'Проекты' },
        { icon: <Mail />, name: 'contact', label: 'Контакты' }
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto bg-white/40 backdrop-blur-md z-50 flex justify-around p-4 shadow-lg">
            {navItems.map(({ icon, name, label }) => (
                <motion.button
                    key={name}
                    onClick={() => setActiveSection(name)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center gap-2 p-2 rounded-full ${
                        activeSection === name 
                            ? 'bg-blue-500 text-white' 
                            : 'text-gray-600 hover:bg-blue-100'
                    }`}>
                        {icon}
                    <span className="hidden md:inline">{label}</span>
                </motion.button>))}
        </nav>
    );
};

export default Navigation;