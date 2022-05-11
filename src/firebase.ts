import { initializeApp, cert } from 'firebase-admin/app'
import serviceAccount from 'serviceAccountKey.json'

initializeApp({
	credential: cert(serviceAccount),
})
