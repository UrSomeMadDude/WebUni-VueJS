<template>
    <div class="img_popup" @click.self="$emit('close')">
        <button type="button" class="to_left" @click="previous">&#8249;</button>
         <div class="content">
            <img :src="photos[id].photo" :alt="photos.alt">
            <div class="text">
                <h2>{{photos[id].title}}</h2>
                <p>{{photos[id].comment}}</p>
            </div>
        </div>
        <button type="button" class="to_right" @click="next">&#8250;</button>
    </div>
</template>

<script>
export default {
    name: 'ImgPopup',
    props: ["photos", "index"],
    emits: ["close"],
    data() {
        return {
            id: this.$props.index,
        };
    },

    methods: {
    previous: function () {
      if (!this.id) {
        this.id = this.$props.photos.length - 1;
      } else {
        this.id--;
      }
    },
    next: function () {
      if (this.id === this.$props.photos.length - 1) {
        this.id = 0;
      } else {
        this.id++;
      }
    },
  },
}
</script>

<style scoped>
.text {
  font-size: 24px;
  color: #000;
}

.img_popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  cursor: pointer;
}

.img_popup .content {
  margin: auto;
  width: 85%;
  height: max-content;
  max-width: 1200px;
  display: flex;
  cursor: default;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.img_popup .content img {
  width: 70%;
}

.img_popup .content .text {
  position: absolute;
  right: 0;
  width: 30%;
  height: 100%;
  padding: 10px;
  background-color: white;
  overflow-y: auto;
}

button {
  padding: 10px;
  background: transparent;
  border: none;
  font-size: 100px;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>