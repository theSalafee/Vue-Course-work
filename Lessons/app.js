const app = Vue.createApp({
    data() {
        return {
            title: "Sir",
            author: "Naasir",
            age: 42,
        };
    },
    methods: {
        changeTitle(title) {
            this.title = title;
            console.log(title);
        },
    },
});
app.mount("#app");
