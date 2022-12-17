<template>
    <div class="MyHobby" name="MyHobby" id="MyHobby">
        <h2 align="center" class="text">Моё Хобби ❔</h2>
        <div class="nav-secondary">
            <div v-for="hobby in hobbies" :key="hobby.id" class="hobby">
                <router-link :to="{ name: 'HobbyDetails', params: { id: hobby.id } }">
                    <h3> {{ hobby.title }} </h3>
                </router-link>
            </div>
        </div>
        <p> По большей части я увлекаюсь прослушиванием музыки да чтением всяких интересных статеек. Это то, что
            осталось со мной до сих пор, ибо так уж вышло, что с раннего детства у меня тянется проблема увлечения: за
            что бы я не взялся, велик шанс,
            что со временем мне наскучит, и я просто-напросто не вернусь к начатому делу снова.То есть, мне сложно
            доводить дела до конца.</p>
        <div class="image-container">
            <img class="image" src="../../assets/Skala.gif">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hobby',
    data() {
        return {
            hobbies: [
                {
                    title: "Любимые фильмы", id: 1,
                },
                {
                    title: "Любимая музыка", id: 2,
                },
                {
                    title: "Любимые книги", id: 3,
                },
            ]
        }
    }
}
</script>

<style scoped>
.text {
    font-size: 2em;
    color: aliceblue;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    width: 300px;
    height: 200px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 10px 5px 5px black;
}

.MyHobby {
    display: grid;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

p {
    padding: 50px;
    text-align: center;
    font-size: 1.2em;
    font-weight: 700;
    color: aliceblue;
}

.nav-secondary {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
}

.hobby {
    padding: 10px;
    cursor: pointer;
    background-color: #040012;
    border: none;
    border-radius: 5px;
    margin-right: 5px;
    margin-left: 5px;
    transition: 0.3s ease;
}

.hobby a {
    text-decoration: none;
}

.hobby h3 {
    color: #fff;
}

.hobby h3:hover {
    opacity: 0.7;
}
</style>