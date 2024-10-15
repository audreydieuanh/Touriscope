import React, { useEffect, useState } from 'react';
import { getUserData } from './getUserData'; 

const UserProfile = () => {
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await getUserData();

            if (userData) {
                setFirstName(userData.firstName);
                setLastName(userData.lastName);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h1>Welcome, {firstName}!</h1>
        </div>
    );
};

export default UserProfile;
