import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import "firebase/database"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(database, "products"));
  var data: any = [];
  querySnapshot.forEach((doc) => {
    let productData = {
      id: doc.id,
      data: doc.data()
    }
    data.push(productData)
  })
  return data;
}

export const setProducts = async (photoUrl: string, name: string, price: number) => {
  await addDoc(collection(database, "products"), {
    photoUrl: photoUrl,
    name: name,
    price: price,
  });
}


export const delProduct = async (id: string) => {
  await deleteDoc(doc(database, "products", id));
  window.location.reload();
}

export const attNameProduct = async (id: string, name: string) => {
  const attProduct = doc(database, "products", id);
  await updateDoc(attProduct, { name: name });
  window.location.reload();
}

export const attPriceProduct = async (id: string, price: any) => {
  if (isNaN(price)) {
    alert("o valor não é um número")
  }
  else {
    const attProduct = doc(database, "products", id);
    await updateDoc(attProduct, { price: price });
  }
  window.location.reload();
}

export const attUrlProduct = async (id: string, url: string) => {
  const attProduct = doc(database, "products", id);
  await updateDoc(attProduct, { photoUrl: url });
  window.location.reload();
}

export const searchBarList = async (name: string) => {
  const q = query(collection(database, "products"), where("name", "==", name));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log("Pesquisa =", doc.id, " => ", doc.data());
  });
}


