import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { getFirestore, addDoc, collection } from "firebase/firestore";
// import { FirestoreCollections } from "../../constants";
import { app } from "../../config/firebase";

// const db = getFirestore(app);
const auth = getAuth(app);

// const addUserToFirestore = async (uid, email) => {
//   const user = await addDoc(collection(db, FirestoreCollections.USERS), {
//     uid,
//     email,
//   });
//   return user;
// };

export const signup = async (email, password) => {
  const createdUser = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return createdUser.user;
};

export const signin = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signout = async () => {
  await signOut(auth);
};
