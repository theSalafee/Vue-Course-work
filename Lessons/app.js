const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: "Sir",
            author: "Naasir",
            age: 42,
        };
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks; // toggles true || false on showBooks
        }
    },
});
app.mount("#app");
