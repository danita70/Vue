<template>
 
 <app-form >

  <div class="help">
    <p>This the some help text.</p>
  </div>
  <div class="fields">
    <div>
      <input type="text" placeholder="email" />
    </div>
    <div>
      <input type="text" placeholder="username" />
    </div>
    <div>
      <input type="password" placeholder="password" />
    </div>
  
    </div>  
  <div class="buttons">
    <button type="submit">Submit</button>
  </div>  

 </app-form>
 <app-form>

  <div class="help">
    <p>Contact help text.</p>
  </div>
  <div class="fields">
    <div>
      <input type="text" placeholder="anme" />
    </div>
    <div>
      <input type="text" placeholder="message" />
    </div>
   
  
    </div>  
  <div class="buttons">
    <button type="submit">Submit</button>
  </div>  

 </app-form>
</template>

<script>
import AppForm from "./components/MyForm.vue"
export default {
  name: 'App',
  components: {    
    AppForm,
}
 
}
</script>


