import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import config from '@/config/config.js'

const firebaseConfig = {
  apiKey: config.firebaseConfig.FIREBASE_API_KEY,
  authDomain: config.firebaseConfig.FIREBASE_AUTH_DOMAIN,
  projectId: config.firebaseConfig.FIREBASE_PROJECT_ID,
  storageBucket: config.firebaseConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.firebaseConfig.FIREBASE_MESSAGING_SERNDER_ID,
  appId: config.firebaseConfig.FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
