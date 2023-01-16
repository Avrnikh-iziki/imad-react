import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCJgqwGOhYm00BaWSweZZ_6TTjeOeM33wk",
    authDomain: "store-1e09c.firebaseapp.com",
    projectId: "store-1e09c",
    storageBucket: "store-1e09c.appspot.com",
    messagingSenderId: "709667352140",
    appId: "1:709667352140:web:aaf9bbb2ceb8351f9a8ee9"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };