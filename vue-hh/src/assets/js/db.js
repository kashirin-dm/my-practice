import Firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyCLH4jdLUhHAhx2Dw-6BWWBGVND8htgnnQ",
    authDomain: "vue-hh.firebaseapp.com",
    databaseURL: "https://vue-hh.firebaseio.com",
    projectId: "vue-hh",
    storageBucket: "vue-hh.appspot.com",
    messagingSenderId: "617178375218"
});

// Экспорт базы данных для использования в компонентах
export const db = firebaseApp.database();
export let vacanciesRef = db.ref('vacancies'); // Массив со всеми объектами