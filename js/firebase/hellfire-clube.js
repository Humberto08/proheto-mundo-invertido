import app from "./app.js"
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

// Código usado para salvar no banco de dados//
export async function subscribeToHellfireClub(subscription){
    const db = getFirestore(app)
    const hellfireClubcollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubcollection, subscription)
    return docRef.id
}


export async function getHellfireClubSubscriptions() {
    const db = getFirestore(app)
    const hellfireClubcollection = collection(db, 'hellfire-clube')
    const hellfireClubcollectionSnapshot = await getDocs(hellfireClubcollection);
    const subscription = hellfireClubcollection.map(doc => doc.data());
    return subscription;
}

