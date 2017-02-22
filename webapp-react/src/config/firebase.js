import Firebase from 'firebase'

const app = Firebase.initializeApp({
  apiKey: "AIzaSyDbthLdn40QuHvI7j5ZnziZZKVTUpbTPt4",
  authDomain: "readlists-315a4.firebaseapp.com",
  databaseURL: "https://readlists-315a4.firebaseio.com",
  storageBucket: "readlists-315a4.appspot.com",
  messagingSenderId: "599469724576"
}, 'ReadLists-web')

export default app
