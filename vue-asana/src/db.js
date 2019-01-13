import Firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyD5-HoVWo9FCX_AHaf9OoDkVizfnJOKuXk",
    authDomain: "asana-vue.firebaseapp.com",
    databaseURL: "https://asana-vue.firebaseio.com",
    projectId: "asana-vue",
    storageBucket: "asana-vue.appspot.com",
    messagingSenderId: "919225390374"
});

// Экспорт базы данных для использования в компонентах
export const db = firebaseApp.database();
export let boardRef = db.ref('board') // Доска с колонками
// Прибавляем каждый раз при добавлении колонки, убираем при удалении. Помогает задать правильную позицию для колонки

// инструкция по подключению Firebase без проблем: https://alligator.io/vuejs/vuefire-firebase/