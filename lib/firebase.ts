import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp, query, getDocs } from 'firebase/firestore';

// Replace these with your Firebase project credentials
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Function to store email in Firestore
export const storeEmail = async (email: string): Promise<boolean> => {
  try {
    const usersCollection = collection(db, 'users');
    
    await addDoc(usersCollection, {
      email: email,
      timestamp: Timestamp.now(),
      createdAt: new Date().toISOString(),
    });
    
    console.log('Email stored successfully:', email);
    return true;
  } catch (error) {
    console.error('Error storing email:', error);
    return false;
  }
};

// Function to get all emails (for debugging/admin)
export const getAllEmails = async () => {
  try {
    const usersCollection = collection(db, 'users');
    const querySnapshot = await getDocs(usersCollection);
    const emails: any[] = [];
    
    querySnapshot.forEach((doc) => {
      emails.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    
    return emails;
  } catch (error) {
    console.error('Error fetching emails:', error);
    return [];
  }
};
