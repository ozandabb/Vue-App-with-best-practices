<template>

<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">MyManager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="/todos">ToDos</a>
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

<!-- ========================================================================================================= -->
<!-- ======================================Section start here================================================= -->
<!-- ========================================================================================================= -->
<div class="container">
    <div class="row">
        <div class="col-sm-7">
            <div class="card">
                <h5>Add ToDo</h5>
                <h6>Add Todos using this form</h6>
                <form @submit.prevent="AddTodo">
                    <input type="text" class="form-control" v-model="title" placeholder="Title">
                    <input type="text" class="form-control textfeildDes" v-model="description" placeholder="Description">
                    <button type="submit" class="btn btn-success addBtn">Add ToDo</button>
                </form>
            </div>
        </div>
        <div class="col-sm-5">
            <h5>ToDo List</h5>
        </div>
  </div>
</div>


</div>
</template>

<script>
import {ref} from 'vue';
// import firestore from 'firestore'

export default {
     setup () {
        const title = ref("");
        const description = ref("");

        const AddTodo = () => {
            alert(title.value + description.value);
            // firestore.collection('todos').add(title.value, description.value).then(() => {
            //     alert("User successfully created!");
            //     this.user.title = ''
            //     this.user.description = ''
            // }).catch((error) => {
            //     alert(error);
            //     console.log(error);
            // });

        }

        return {
            AddTodo,
            title,
            description,
        }
    }
}
</script>

<style>
.col-sm-7{
    margin-top: 30px;
    text-align: left;
}
.card{
    padding: 20px;
}
.h5{
    font-weight: bold;
}
.textfeild{
    padding: 10px;
    border-radius: 10px;
    border-width: 1px;
}
.textfeildDes{
    margin-top: 10px;
}
.addBtn{
    margin-top: 10px;
}
.col-sm-5{
    border-left: 1px solid #000000;
}
</style>