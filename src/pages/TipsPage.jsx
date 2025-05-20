import React from 'react';
import { useLoaderData } from 'react-router';
import TipsCard from '../components/TipsCard';

const TipsPage = () => {
    const tips = useLoaderData(); // এটা অ্যারে ধরে নিচ্ছি
    console.log(tips);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">All Gardening Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tips.map(tip => (
                    <TipsCard key={tip._id} tip={tip} />
                ))}
            </div>
        </div>
    );
};

export default TipsPage;
