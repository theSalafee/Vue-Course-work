
const app = Vue.createApp({
    data(){
        return {
            title: 'Sir',
            author: 'Naasir',
            age: 42,

        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
            console.log(title)
        }
    }
}) 


// You can add methods to the component by adding a 'methods' property
// The 'this' keyword references the component thereby allowing access to the data props

// Parameters can also be passed from the view to the component

app.mount('#app') 