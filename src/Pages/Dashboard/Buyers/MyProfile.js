import React from 'react';
import useTitle from '../../../Hook/useTitle';

const MyProfile = () => {

    //dynamic title
    useTitle('Profile')
    return (
        <div>
            <h1>My Profile</h1>
        </div>
    );
};

export default MyProfile; <h1>My Profile</h1>