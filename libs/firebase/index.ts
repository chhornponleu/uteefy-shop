
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import { getFirestore, initializeFirestore, memoryLocalCache, persistentLocalCache } from "firebase/firestore";
import { Platform } from "react-native";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: process.env.EXPO_PUBLIC_FIREBASE_apiKey,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_authDomain,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_projectId,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_storageBucket,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_messagingSenderId,
    appId: process.env.EXPO_PUBLIC_FIREBASE_appId

};

// https://docs.expo.dev/guides/using-firebase/
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
initializeFirestore(app, {
    localCache: Platform.OS === 'web' ? persistentLocalCache() : memoryLocalCache()
})
export const db = getFirestore(app);
export const auth = getAuth(app,)
export default app;