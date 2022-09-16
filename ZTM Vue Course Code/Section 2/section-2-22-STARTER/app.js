const vm = Vue.createApp({
    data() {
        return {
            people: [
                {
                    name: 'Tidist',
                    message: 'Hello World!'
                },
                {
                    name: 'Abyismah',
                    message: 'Vue is owsome!'
                },
                {
                    name: 'Daniel',
                    message: 'I Love Abyismah!'
                }
            ]
        }
    },
    methods: {
        move() {
            const first = this.people.shift()
            this.people.push(first)
        }
    }
}).mount('#app')

