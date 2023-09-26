import { firestore } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'

export async function handler () {
  const snapshot = await getDocs(collection(firestore, 'products'))
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
  return data
}
