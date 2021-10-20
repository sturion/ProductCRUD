import { initializeApp } from 'firebase/app'
import { getFirestore,collection,addDoc,getDocs} from 'firebase/firestore';
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


/*export const getProducts = async() => {
  const docRef = doc(database, "products");
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data())
  return docSnap.data();
  
  }*/

export const getProducts = async() => {
  const querySnapshot = await getDocs(collection(database, "products"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}

  export const setProducts = async(fotoUrl:string,name:string,price:number) => {
    await addDoc(collection(database, "products"), {
      fotoUrl: fotoUrl,
      name: name,
      price: price,
    });
  }

