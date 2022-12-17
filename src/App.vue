<template>
  <div class="bg"></div>
  <div class="container">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link :to="{ name: 'About' }">Обо мне</router-link> |
      <router-link :to="{ name: 'Hobby' }">Хобби</router-link> |
      <router-link :to="{ name: 'Photoalbum' }">Фотоальбом</router-link> |
      <router-link :to="{ name: 'Contact' }">Контакт</router-link> |
      <router-link to="/users">Пользователи</router-link>
      <button @click="redirect">Redirect</button>
      <button @click="back">Go back</button>
      <button @click="forward">Go forward</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
 export default {
  methods: {
    redirect() {
      this.$router.push({name: 'Main'})
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  }
 }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

nav {
  padding: 30px;
}

nav a {
  font-size: 1.1em;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  padding: 0.4em;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #040012;
}

nav button {
  margin: 0 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  color: #fff;
  font-size: 1rem;
  background-color: #000;
  font-weight: 500;
}

nav button:hover {
  border-radius: 0;
}

.container {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("assets/bg.jpg") repeat-y center;
  background-size: cover;
  z-index: -1;
  filter: blur(50px);
}

</style>
