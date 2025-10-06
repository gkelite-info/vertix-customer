import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkHew0IYIG7ary8xEowYYZB2bjK0s_eSM",
  authDomain: "vertixtaxsolutions1.firebaseapp.com",
  projectId: "vertixtaxsolutions1",
  storageBucket: "vertixtaxsolutions1.firebasestorage.app",
  messagingSenderId: "549689910439",
  appId: "1:549689910439:web:9458ee308b51a86440e782",
  measurementId: "G-XDH00FTY11"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
