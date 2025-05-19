import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const HomePage = () => {
    const data = use(AuthContext)

    return (
        <div className='mt-24'>
            this is home
        </div>
    );
};

export default HomePage;