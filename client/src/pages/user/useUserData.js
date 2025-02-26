import React, { useEffect, useState } from 'react';
import { getUserData } from './getUserData';

const useUserData = () => {
    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [highestStreak, setHighestStreak] = useState(0);
    const [favoriteCategory, setFavoriteCategory] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await getUserData();

            if (userData) {
                setUserId(userData.uid);
                setFirstName(userData.firstName);
                setLastName(userData.lastName);
                setHighestStreak(userData.highestStreak);
                setFavoriteCategory(userData.favoriteCategory);
            }
        };

        fetchUserData();
    }, []);

    return { userId, firstName, lastName, highestStreak, favoriteCategory };
};

export default useUserData;