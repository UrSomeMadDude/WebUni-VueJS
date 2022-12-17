<template>
    <h1>Зарегистрировано пользователей: {{usersCount}}</h1>
    <div v-for="user in allUsers" :key="user.name" class="table">
      <div class="header">
        {{ user.name }}
        {{ user.surname }}
      </div>
      <p>Возраст - {{user.age}} лет</p>
      <p>Пол - {{user.sex}}</p>
      <p>Фреймворки - {{user.frameworks.join(', ')}}</p>
    </div>
    <div>
      <button class="btn" :disabled="allUsers.length === 0" @click="handleClearUsers">Очистить список</button>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
export default {
    name: "Users",
    computed: mapGetters(['allUsers', 'usersCount']),
    methods: {
        ...mapMutations(['clear']),
        handleClearUsers() {
            this.clear()
        }   
    }
}
</script>

<style scoped>
* {
    color: #fff;
}

.btn {
   border: none;
   border-radius: 5px;
   padding: 10px;
   background-color: black;
   font-size: 1rem;
   margin: 20px;
   cursor: pointer;
}

.table {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #fff;
    background-color: slategrey;
}

.table p {
    font-size: 1.2rem;
    padding: 5px;
}

.header {
    background-color: #fff;
    color: #000;
    padding: 10px;
    font-size: 1.5rem;
    font-weight: 700;
}
</style>