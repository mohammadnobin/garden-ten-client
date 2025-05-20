import React from 'react';
import { useLoaderData } from 'react-router';
import PlantForm from '../components/PlantForm';

const Users = () => {
    const users = useLoaderData()
    return (
        <div className='mt-36'>
              {/* {users.map((user, index) => (
                <div key={user._id} className="">
                    {user.name}
                    <img className='w-11' src={user.photoURL} alt="" />
                </div>
            ))} */}
            <PlantForm />
        </div>
    );
};

export default Users;