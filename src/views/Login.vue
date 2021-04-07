<template>
<div class="container">
    <!-- <div> -->
  <div class="row">
    <div class="col-sm-8  d-none d-lg-block">
        <img class="img-fluid" src="../assets/login.jpg"/>
    </div>
    <div class="col-sm-4">
        <div class="login">
        <h3>Welcome</h3>
        <h6>Login Portal</h6>
        <form @submit.prevent="Login">
            <div class="row">
                <input class="email" type="email" placeholder="Email" v-model="email" required>
                <input class="password" type="password" placeholder="Password" v-model="password" required>
                <input class="button btn btn-success" type="submit" value="LOGIN">
                <p class="regSec">Need an Account ? <router-link to="/register">Register</router-link></p>
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </form>
        </div>
    </div>
  </div>
</div>

</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase';

export default {
    setup () {
        const email = ref("");
        const password = ref("");

        const Login = () => {
            firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then( data => console.log(data))
            .catch( err => alert(err.message))

        }

        return {
            Login,
            email,
            password,
        }
    }

}
</script>

<style>
.login{
    margin-top: 280px;
    padding: 20px;

}

.email{
    border-radius: 10px;
    border-width: 1px;
    padding: 10px;
    margin-top: 20px;
 
}

.password{
    border-width: 1px;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;

}

.button{
    border-radius: 10px;
    margin-top: 30px;
 
}

.regSec{
    margin-top: 20px
}

</style>