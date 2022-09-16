let vm = Vue.createApp({
    data(){
     return{
         people:[
            {
                name: 'Abyismah',
                message: 'Hellow world'
            },
            {
                name: 'Daniel',
                message: 'I like pie.'
            },
            {
                name: 'Amy',
                message: 'I Love You'
            }
         ]
    },
    
         methods:{
            move(){
                const first = this.people.shift()
                this.people.push(first)
            }
         }
    

 }).mount('#app2');
 