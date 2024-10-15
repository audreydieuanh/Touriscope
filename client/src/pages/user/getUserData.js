import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from './firebase'; 

export const getUserData = async () => {
    if (auth.currentUser) {
        const userId = auth.currentUser.uid; 
        const userDoc = await getDoc(doc(db, 'users', userId));

        if (userDoc.exists()) {
            return userDoc.data(); 
        } else {
            console.log('No such document!');
            return null;
        }
    } else {
        console.log('User not authenticated');
        return null;
    }
};

