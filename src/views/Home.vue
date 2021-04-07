<template>
  <!-- <div class="home">
    <h3>Welcome {{name}}</h3>
    <router-link to="/about">About us</router-link>
    <button class="logout" @click="Logout" >LOGOUT</button>
  </div> -->


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">MyManager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/todos">ToDos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success" @click="Logout" type="submit">Logout</button>
      </form>
    </div>
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

