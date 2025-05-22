import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='h-screen text-center'>
            tis is erro
            
            <Link to='/'>
            Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;