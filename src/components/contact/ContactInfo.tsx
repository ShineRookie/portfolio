import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const ContactInfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await addDoc(collection(db, 'messages'), {
                ...formData,
                timestamp: new Date()
            });
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="space-y-4 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Имя
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Сообщение
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors duration-200 ${
                        status === 'loading'
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                >
                    {status === 'loading' ? 'Отправка...' : 'Отправить'}
                </button>
                {status === 'success' && (
                    <div className="text-green-600 text-center">
                        Сообщение успешно отправлено!
                    </div>
                )}
                {status === 'error' && (
                    <div className="text-red-600 text-center">
                        Ошибка при отправке сообщения. Попробуйте позже.
                    </div>
                )}
            </form>
        </div>
    );
};