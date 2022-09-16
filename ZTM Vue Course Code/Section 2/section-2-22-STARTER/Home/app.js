const vm = Vue.createApp({
    data() {
        return {
            myObject: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
            numbers: [1, 2, 3, 4, , 5],
            count: 0
        }

    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(n => n % 2 === 0)
        }
    }
}).mount('#app')