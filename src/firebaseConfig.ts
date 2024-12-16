import { getDownloadURL, getStorage, listAll, ref } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (find this in your Firebase Console under Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyAfJUxHsWfEal_vYF-ALsKze1SxhnF-yBA",
  authDomain: "petcare-13172.firebaseapp.com",
  projectId: "petcare-13172",
  storageBucket: "petcare-13172.firebasestorage.app",
  messagingSenderId: "506012682441",
  appId: "1:506012682441:web:ac92d2022ae23ef26ba518",
  measurementId: "G-X4YKMQZMR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);
const storage = getStorage(app);
const storageRef = ref(storage, 'pets/');

// Get the image's download URL
listAll(storageRef)
  .then((res) => {
    // Iterate through each file in the folder
    res.items.forEach((itemRef) => {
      // For each file, get the download URL
      getDownloadURL(itemRef)
        .then((url) => {
        })
        .catch((error) => {
          console.error("Error fetching image URL:", error);
        });
    });
  })
  .catch((error) => {
    console.error("Error listing files:", error);
  });


export const fetchImages = async () => {
  const folderRef = ref(storage, "pets");
  const result = await listAll(folderRef);
  const urls = await Promise.all(
    result.items.map((itemRef) => getDownloadURL(itemRef))
  );
  return urls
};

export { db };