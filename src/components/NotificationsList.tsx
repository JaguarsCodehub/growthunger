'use client'
import React, { useState, useEffect } from 'react';
import NotificationCard from './NotificationCard';
import { notifications } from '@/lib/notifications';
import { Notification } from '@/types/Notification';
import './NotificationsList.css';

const NotificationsList: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeNotification, setActiveNotification] = useState<Notification | null>(null);

    useEffect(() => {
        if (notifications.length === 0) return;

        setActiveNotification(notifications[currentIndex]);

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                if (nextIndex < notifications.length) {
                    setActiveNotification(notifications[nextIndex]);
                    return nextIndex;
                } else {
                    clearInterval(intervalId);
                    return prevIndex;
                }
            });
        }, 3000);

        const clearAllTimeout = setTimeout(() => {
            setActiveNotification(null);
            clearInterval(intervalId);
        }, 20000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(clearAllTimeout);
        };
    }, []);

    return (
        <div className="fixed top-10 right-8 space-y-3 z-40">
            {activeNotification && (
                <NotificationCard
                    className="fade-in-out"
                    notification={activeNotification}
                    index={currentIndex}
                />
            )}
        </div>
    );
};

export default NotificationsList;
