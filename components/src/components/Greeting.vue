<template>
<p>{{msg}}</p>
  <h3 v-if="age  > 25">{{msg}}</h3>  
  <p v-else>You must be 25 years or older to view this message</p>
</template>

<script>
 export default{
   
    name: 'GreetingApp', 
    props: ['age'],
    data() {
      return{
        msg: 'Hello World!',
      }
    }
  };

</script>
<style scoped lang="scss">
    $colorRed: red;
    $colorBlue: blue;


 h3{
    color: $colorRed;
 }
 p{
    color: $colorBlue;
 }
</style>

