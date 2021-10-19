import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc, doc, setDoc , where,query} from 'firebase/firestore';
import "firebase/database"

const firebaseConfig = {
apiKey: process.env.REACT_APP_APIKEY,
authDomain: process.env.REACT_APP_AUTHDOMAIN,
databaseURL: process.env.REACT_APP_DB,
projectId: process.env.REACT_APP_PID,
storageBucket: process.env.REACT_APP_SB,
messagingSenderId: process.env.REACT_APP_SID,
appId: process.env.REACT_APP_APPID,
measurementId:process.env.REACT_APP_MID
};
  
  const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const getProducts = async() => {
  const docRef = doc(database, "products", "productList");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
  
  }

  export const setProducts = async(fotoUrl:string,name:string,price:number,id:number) => {
    await setDoc(doc(database, "products","productList"), {
      fotoUrl: fotoUrl,
      name: name,
      price: price,
      id: id
    });
  }
  