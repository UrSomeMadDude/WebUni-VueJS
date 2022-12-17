<template>
    <h1 v-if="id == 1">Любимые фильмы</h1>
    <h1 v-if="id == 2">Любимая музыка</h1>
    <h1 v-if="id == 3">Любимые книги</h1>

    <div v-if="id == 1">
        <div class="list">
            <div class="list-element"> Бегущий по лезвию 2049 </div>
            <div class="list-element"> Рейд </div>
            <div class="list-element"> Бойцовский клуб </div>
        </div>

        <p> Не фанат фильмов, хоть и пересмотрел некотороое количество за свою жизнь. Но ещё есть, куда расти в
            плане просвещения.</p>
        <div class="image-container">
            <img class="image" src="../../assets/tenor.gif">
        </div>
    </div>
    <div v-if="id == 2">
        <div class="list">
            <div class="list-element"> Slipknot </div>
            <div class="list-element"> Korn </div>
            <div class="list-element"> Disturbed </div>
        </div>

        <p> Человек с довольно эксцентричными музыкальными вкусами, но фавориты всегда одни и те же.</p>
        <div class="image-container">
            <img class="image" src="../../assets/Kachnulo.gif">
        </div>
    </div>
    <div v-if="id == 3">
        <div class="list">
            <div class="list-element"> Солярис </div>
        </div>

        <p> Это всё, что я вспомнил</p>
        <div class="image-container">
            <img class="image" src="../../assets/Bruh.gif">
        </div>
    </div>

</template>

<script>
export default {
    /* props: ['id'] */
    data() {
        return {
            id: this.$route.params.id,
        }
    }
}
</script>

<style scoped>
.image {
    width: 20%;
    height: 20%;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 10px 5px 5px black;
}

p {
    text-align: center;
    font-size: 1.1em;
    font-weight: 700;
    color: #fff;
    padding: 10px;
}

.list {
    display: flex;
    justify-content: center;
    align-items: center;
}

.list-element {
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
    color: aliceblue;
    padding: 10px;
    border: 2px solid #fff;
    border-radius: 8px;
    background-color: #040012;
    width: 30%;
    margin: 3%;
}

h1 {
    color: #fff;
}
</style>