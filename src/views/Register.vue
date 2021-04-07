<template>
<div class="container">
    <div class="row">
        <div class="col-sm-8  d-none d-lg-block">
            <img class="img-fluid imgLogin" src="../assets/reg.jpg"/>
        </div>
        <div class="col-sm-4">
            <div class="register">
                <h3>SignUp here</h3>
                <h6>Registration</h6>
                <form @submit.prevent="Register">
                    <div class="row">
                        <input class="email" type="text" placeholder="Email" v-model="email">
                        <input class="password" type="password" placeholder="Password" v-model="password">
                        <input class="button btn btn-success" type="submit" value="REGISTER">
                        <p class="regSec">Already have an Account ? <router-link to="/login">Login</router-link></p>
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

        const Register = () => {
            firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then( user => alert(user))
            .catch( err => alert(err.message))

        }

        return {
            Register,
            email,
            password,
        }


    }

}
</script>

<style>
.register{
    margin-top: 280px;
    padding: 20px;

}
.imgLogin{
    margin-top: 180px;
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