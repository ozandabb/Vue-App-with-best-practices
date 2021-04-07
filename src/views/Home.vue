<template>
  <!-- <div class="home">
    <h3>Welcome {{name}}</h3>
    <router-link to="/about">About us</router-link>
    <button class="logout" @click="Logout" >LOGOUT</button>
  </div> -->
 <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <button class="btn btn-outline-success" @click="Logout" type="submit">Logout</button>
    </form>
  </div>
</nav>

</template>

<script>
import {ref, onBeforeMount} from 'vue';
import firebase from 'firebase';

export default {
  setup () {
    const name = ref("");

    onBeforeMount( () => {
      const user = firebase.auth().currentUser;
      if(user){
        name.value = user.email.split('@')[0]; 
      }

    });

    const Logout = () =>{
      firebase
      .auth()
      .signOut()
      .catch( err => alert(err.message))

    }

    return{
      name,
      Logout
    }
  }
  
}
</script>

