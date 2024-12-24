'use client'
import React, { useState } from 'react';
import { Button, Spinner } from '@/components/ui/button';

const techStacks = ['React', 'Next.js', 'Vue', 'Angular'];
const mentors = ['Elon Musk', 'Alex Hormozi', 'Jeff Bezos', 'Sara Blakely'];
const goals = ['AI', 'E-commerce', 'SaaS', 'Health Tech'];

export default function StartupGame() {
    const [selectedTech, setSelectedTech] = useState('');
    const [selectedMentor, setSelectedMentor] = useState('');
    const [selectedGoal, setSelectedGoal] = useState('');
    const [journeyOutcome, setJourneyOutcome] = useState('');
    const [loading, setLoading] = useState(false);

    const handleStartJourney = async () => {
        setLoading(true);
        // Simulate a delay for loading
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulate a journey outcome based on choices
        const outcomes = [
            `🚀 With ${selectedTech} and guidance from ${selectedMentor}, your ${selectedGoal} startup skyrocketed!`,
            `😅 Despite using ${selectedTech}, your ${selectedGoal} startup faced unexpected challenges. But ${selectedMentor} helped you pivot!`,
            `🎉 Your ${selectedGoal} startup thrived with ${selectedTech}, but ${selectedMentor} had some wild ideas!`,
            `🤖 With ${selectedTech}, you created a robot that sells ${selectedGoal} products!`,
            `💡 Your ${selectedGoal} startup became a meme sensation thanks to ${selectedMentor}'s quirky advice!`,
        ];
        setJourneyOutcome(outcomes[Math.floor(Math.random() * outcomes.length)]);
        setLoading(false);
    };

    return (
        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">Create Your Virtual Startup</h2>
            <div className="mt-4">
                <h3 className="text-lg text-white">Choose Your Tech Stack:</h3>
                {techStacks.map((tech) => (
                    <Button key={tech} onClick={() => setSelectedTech(tech)} className="m-1">
                        {tech}
                    </Button>
                ))}
            </div>
            <div className="mt-4">
                <h3 className="text-lg text-white">Choose Your Mentor:</h3>
                {mentors.map((mentor) => (
                    <Button key={mentor} onClick={() => setSelectedMentor(mentor)} className="m-1">
                        {mentor}
                    </Button>
                ))}
            </div>
            <div className="mt-4">
                <h3 className="text-lg text-white">Choose Your Startup Goal:</h3>
                {goals.map((goal) => (
                    <Button key={goal} onClick={() => setSelectedGoal(goal)} className="m-1">
                        {goal}
                    </Button>
                ))}
            </div>
            <div className="mt-4">
                <Button onClick={handleStartJourney} disabled={!selectedTech || !selectedMentor || !selectedGoal} className="bg-yellow-400 text-black">
                    Start Your Journey
                </Button>
            </div>
            {loading ? (
                <div className="mt-4 flex justify-center">
                    <Spinner />
                </div>
            ) : (
                journeyOutcome && (
                    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
                        <h4 className="font-bold text-lg">Your Startup Journey:</h4>
                        <p className="text-gray-700">{journeyOutcome}</p>
                    </div>
                )
            )}
        </div>
    );
}