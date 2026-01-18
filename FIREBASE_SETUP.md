# Firebase Setup Guide

## What Was Done

✅ **Firebase integration added** to store user emails with timestamps  
✅ **Firestore database** configured to save emails in a `users` collection  
✅ **Email validation** integrated into the Hero component's subscription form  
✅ **Error handling** added for failed submissions  

---

## Setup Instructions

### Step 1: Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Name it (e.g., "Void Browser")
4. Accept the terms and create the project
5. Wait for the project to be initialized

### Step 2: Enable Firestore Database
1. In Firebase Console, go to **"Build"** → **"Firestore Database"**
2. Click **"Create Database"**
3. Choose **"Start in test mode"** (for development)
4. Select a location close to you
5. Click **"Create"**

### Step 3: Get Your Firebase Credentials
1. In Firebase Console, click the **"</>  Web"** icon to add a web app
2. Register the app (name it "Void Browser")
3. Copy the Firebase config object
4. You'll see something like:
```javascript
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx.firebaseapp.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxx",
  appId: "xxx",
};
```

### Step 4: Add Environment Variables
1. In the project root, create a `.env.local` file (copy from `.env.example`)
2. Replace the placeholders with your Firebase credentials:
```
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

### Step 5: Run the Project
```bash
npm run dev
```

The app will now save emails to your Firebase Firestore database!

---

## Database Structure

### Collection: `users`
Each document contains:
- **email**: string (user's email address)
- **timestamp**: Firestore Timestamp (when submitted)
- **createdAt**: string (ISO timestamp for reference)

### Example Document:
```json
{
  "email": "user@example.com",
  "timestamp": "2026-01-18T12:34:56.789Z",
  "createdAt": "2026-01-18T12:34:56.789Z"
}
```

---

## Files Modified/Created

### New Files:
- **`lib/firebase.ts`** - Firebase initialization and email storage functions
- **`.env.example`** - Environment variable template

### Updated Files:
- **`components/Hero.tsx`** - Integrated Firebase email storage with the subscribe form
- **`package.json`** - Firebase package added

---

## Testing

1. Run `npm run dev`
2. Enter an email in the form on the homepage
3. Click **"Request Invite"**
4. Go to [Firebase Console](https://console.firebase.google.com/) → Firestore Database
5. Check the `users` collection to see your email stored with timestamp!

---

## Security Rules (Optional)

For production, update your Firestore rules in **Firebase Console** → **Rules**:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{document=**} {
      // Allow anyone to read/write (for MVP, lock down later)
      allow read, write: if true;
    }
  }
}
```

---

## Support Functions

The `lib/firebase.ts` file includes:

- **`storeEmail(email: string)`** - Saves an email to Firestore
- **`getAllEmails()`** - Retrieves all stored emails (for admin/debugging)

Example usage in your components:
```typescript
import { storeEmail } from '../lib/firebase';

const success = await storeEmail('user@example.com');
if (success) console.log('Email saved!');
```

---

## Troubleshooting

### "Could not find firebase credentials"
- Make sure `.env.local` exists with all 6 environment variables
- Restart the dev server: `npm run dev`

### "Permission denied" errors
- Go to Firebase Console → Firestore Rules
- Make sure you're in **test mode** (allows read/write)
- Alternatively, add the security rule above

### Emails not appearing in database
- Check browser console for errors (F12)
- Verify email validation passes
- Check your Firebase project ID in `.env.local`

Enjoy! 🚀
