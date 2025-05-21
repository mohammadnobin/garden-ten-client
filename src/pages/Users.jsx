import React from 'react';
import { useLoaderData } from 'react-router';


const Users = () => {
    const users = useLoaderData()
    return (
        <div className='mt-36'>
              {users.map((user) => (
                <div key={user._id} className="">
                    {user.name}
                    <img className='w-11' src={user.photoURL} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Users;