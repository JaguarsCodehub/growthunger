import React from 'react';
import { Notification } from '@/types/Notification';
// import { notifications } from '@/lib/notifications';

interface NotificationCardProps {
    notification: Notification;
    className: React.ReactNode;
    index: number;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {
    const { avatar, title, message, timestamp } = notification;

    // const animationClass = index === 0 ? 'fade-in' : index === notifications.length - 1 ? 'fade-out' : 'fade-out';

    return (
        <div className={`bg-white border border-gray-400 w-[375px] md:w-[550px] bg-opacity-70 backdrop-blur-xl shadow-lg rounded-lg p-4 flex items-center justify-between fade-in-out`}>
            <div className="flex items-center space-x-2">
                <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                    <h1 className='text-base font-bold text-black'>{title}</h1>
                    <p className="text-sm text-gray-900">{message}</p>
                </div>
            </div>
            <span className="text-xs font-bold text-gray-900">{timestamp}</span>
        </div>
    );
};

export default NotificationCard;
