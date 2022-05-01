import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAPulcy542O7W3ArccOGu2RxRk4-4isFj8",
  authDomain: "martians-95e5a.firebaseapp.com",
  databaseURL: "https://martians-95e5a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "martians-95e5a",
  storageBucket: "martians-95e5a.appspot.com",
  messagingSenderId: "722772274019",
  appId: "1:722772274019:web:747f4f65810d293e4e0156"
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const whitelistCollection = collection(db, 'whitelist')

export default whitelistCollection

// export const createAddress = address => {
//   return await addDoc(whitelistCollection, address)
// }

// export const getAddress = async id => {
//   const address = await whitelistCollection.doc(id).get()
//   return address.exist ? address.data() : null
// }

// export const updateAddress = (id, address) => {
//   return whitelistCollection.doc(id).update(address)
// }

// export const deleteAddress = id => {
//   return whitelistCollection.doc(id).delete()
// }

// export const useLoadAddresses = () => {
//   const addresses = ref([])
//   const close = whitelistCollection.onSnapshot(snapshot => {
//     addresses.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return addresses
// }