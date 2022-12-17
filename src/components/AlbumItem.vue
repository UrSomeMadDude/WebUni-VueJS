<template>
    <div class="boxItem" @click="$emit('click')">
        <img class="image" :src="package.photo" :alt="package.alt">
    </div>
</template>

<script>
export default {
    name: 'AlbumItem',
    props: ["package"],
    emits: ["click"],
    data() {
        return {
            isOpened: false,
        };
    }
}
</script>

<style scoped>
.boxItem {
  align-items: center;
  max-height: 300px;
  max-width: 300px;
  margin: 50px;
}

.image {
  max-width: 300px;
  max-height: 300px;
  border-radius: 5px;
  cursor: pointer;
}
</style>