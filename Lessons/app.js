// Lesson 6 using the VUE.js CDN

const app = Vue.createApp({

    // set up any data, functions we want
    //template: '<h2>I am the template.</h2>'
    data(){
        return {
            title: 'The Final Empire',
            author: 'Naasir al-Amreekee',
            age: 42,

        }
    }




}) // create a VUE.js app

/**
 * data-v-app : the attribute where the vue app is 'mounted'. 
 */

app.mount('#app') // mount the app to a specific element