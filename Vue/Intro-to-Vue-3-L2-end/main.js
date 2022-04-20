const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            // Solution
            description: 'A warm fuzzy pair of socks.',

            data: {}
        }
    },
    methods: {
        // method that will be called when the button is clicked
        async fetchUser() {
            try {
                const user = await axios.get('https://api.github.com/users/kvn');
                this.user = user.data;
                data = user.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
})
