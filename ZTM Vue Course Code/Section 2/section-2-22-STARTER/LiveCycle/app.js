let vm = Vue.createApp({
    data(){
        return{
            message: "Hello world!"
        }
    },
    beforeCreate(){
        console.log('beforeCreate() function is called!', this.message)
    },
    created(){
        console.log('create() function is called!', this.message)
    },
    
    beforeMount(){
        console.log('beforeMount() function is called!', this.$el)
    },
    
    mounted(){
        console.log('mounted() function is called!', this.$el)
    },
    beforeUpdate(){
        console.log('beforeUpdate() function is called!')
    },
    updated(){
        console.log('updated() function is called!')
    },
    beforeUnnmount(){
        console.log('beforeUnnmount() function is called!')
    },
    unnmount(){
        console.log('unnmount() function is called!')
    }



})
vm.mount('#app')