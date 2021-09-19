
const app = Vue.createApp({
    data(){
        return {
            title: 'Sir',
            author: 'Naasir',
            age: 42,

        }
    },
    methods: {
        changeTitle() {
            this.title = 'Neo : '
        }
    }
}) 


// You can add methods to the component by adding a 'methods' property
// The 'this' keyword references the component thereby allowing access to the data props

app.mount('#app') 