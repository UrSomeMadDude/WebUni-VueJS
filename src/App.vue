<template>
  <div class="container">
    <nav>
      <router-link to="/">Главная</router-link> | 
      <router-link :to="{name: 'About'}">Обо мне</router-link> |
      <router-link to="/hobby">Хобби</router-link> |
      <router-link to="/study">Учёба</router-link> |
      <router-link to="/photoalbum">Фотоальбом</router-link> |
      <router-link to="/contacts">Контакты</router-link> |
      <router-link to="/test">Тест</router-link> |
      <router-link to="/history">История</router-link>
    </nav>
    <router-view/>
  </div>
</template>

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

.container {
  width: 100%;
  height: 100%;
}
.container:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("assets/bg.jpg") no-repeat center;
  background-size: cover;
  z-index: -1;
  filter: blur(50px);
}

</style>
