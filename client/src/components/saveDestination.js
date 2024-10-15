import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../pages/user/firebase';

const saveDestination = async (destination) => {
    if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const destinationRef = doc(db, 'users', userId);

        try {
            const userDoc = await getDoc(destinationRef);
            let savedDestinations = [];

            if (userDoc.exists()) {
                savedDestinations = userDoc.data().savedDestinations || [];
            }

            const exists = savedDestinations.some(
                (dest) => dest.name === destination.name && dest.location === destination.location
            );

            if (!exists) {
                savedDestinations.push(destination);
                await updateDoc(destinationRef, {
                    savedDestinations: savedDestinations,
                });
                console.log('Destination saved successfully', savedDestinations);
            } else {
                console.log('Destination already saved');
            }
        } catch (error) {
            console.error('Error adding document: ', error.message);
        }
    } else {
        console.error('User not logged in');
    }
}

const deleteDestination = async (destination) => {
    if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const destinationRef = doc(db, 'users', userId);

        try {
            const userDoc = await getDoc(destinationRef);
            if (userDoc.exists()) {
                const savedDestinations = userDoc.data().savedDestinations || [];

                const updatedDestinations = savedDestinations.filter(
                    (dest) => dest.name !== destination.name || dest.location !== destination.location
                );

                await updateDoc(destinationRef, {
                    savedDestinations: updatedDestinations,
                });
                console.log('Destination deleted successfully:', updatedDestinations);
            } else {
                console.log('User document does not exist.');
            }
        } catch (error) {
            console.error('Error deleting destination: ', error.message);
        }
    } else {
        console.log('User not authenticated');
    }
};

export { saveDestination, deleteDestination };