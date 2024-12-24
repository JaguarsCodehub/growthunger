'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface FeedbackProps {
    onSubmit: (rating: number) => void;
}

const Feedback: React.FC<FeedbackProps> = ({ onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (rating > 0) {
            onSubmit(rating);
            setSubmitted(true);
        }
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Rate Our Website</h2>
            <div className="flex space-x-2 mt-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <Button
                        key={num}
                        onClick={() => setRating(num)}
                        className={`border ${rating === num ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    >
                        {num}
                    </Button>
                ))}
            </div>
            <div className="mt-4">
                <Button onClick={handleSubmit} disabled={rating === 0} className="bg-green-500 text-white">
                    Submit
                </Button>
            </div>
            {submitted && <p className="mt-2 text-green-600">Thank you for your feedback!</p>}
        </div>
    );
};

export default Feedback;