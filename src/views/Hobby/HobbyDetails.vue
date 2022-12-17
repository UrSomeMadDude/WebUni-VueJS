<template>
    <h1>Hobby Details</h1>
    <p>The id is {{id}}</p>
    <p id="list"> {{list("o", "Бойцовский клуб")}} </p>    
</template>

<script>
export default {
    props: ['id'],
}
</script>

<style scoped>

</style>