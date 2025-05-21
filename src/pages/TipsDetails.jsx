import React from 'react';
import { useLoaderData } from 'react-router';
import TipsCard from '../components/TipsCard';

const TipsDetails = () => {
    const oneTips = useLoaderData()
    console.log(oneTips)
    return (
        <div>
            this is tips deatials
            <TipsCard tip={oneTips} />
        </div>
    );
};

export default TipsDetails;