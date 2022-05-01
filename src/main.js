import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import firebase from 'firebase/compat/app'
// import { firebaseConfig } from './firebase-config.js'
// import 'firebase/compat/firestore'

import '../public/css/normalize.css'
import '../public/css/webflow.css'
import '../public/css/main.css'

// firebase.initializeApp(firebaseConfig)
// export const db = firebase.firestore()

createApp(App).use(store).use(router).mount('#app')
