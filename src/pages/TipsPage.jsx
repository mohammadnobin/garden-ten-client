import React from 'react';
import { useLoaderData } from 'react-router';
import TipsCard from '../components/TipsCard';
import TipsTable from '../components/TipsTable';

const TipsPage = () => {
    const tips = useLoaderData(); // এটা অ্যারে ধরে নিচ্ছি
    console.log(tips);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">All Gardening Tips</h2>
            <TipsTable tips={tips} />
        </div>
    );
};

export default TipsPage;
