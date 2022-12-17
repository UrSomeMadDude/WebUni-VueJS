<template>
    <div class="square">
        <AlbumItem v-for="(photo,i) in photos" :key="i" :package="photo" @click="index = i" />
    </div>
    <ImgPopup v-if="index !== -1" :photos="photos" :index="index" @close="index=-1" />
</template>

<script>
import ImgPopup from "../components/ImgPopup.vue";
import AlbumItem from "../components/AlbumItem.vue";
export default {
    name: 'PhotoalbumView',
    components: {
        ImgPopup,
        AlbumItem,
    },
    data() {
        /* const photos_array = [
        "asus.jpg",
        "based.jpg",
        "butcher.jpg",
        "capusta.jpg",
        "cat.jpg",
        "cat2.jpg",
        "cat3.jpg",
        "cat4.jpg",
        "cat5.jpg",
        "club.jpg",
        "doge.jpg",
        "funeral.jpg",
        "nuts.jpg",
        "penguin.jpg",
        "rich.jpg",
        ];

        const titles_array = [
        "MEME #1",
        "MEME #2",
        "MEME #3",
        "MEME #4",
        "MEME #5",
        "MEME #6",
        "MEME #7",
        "MEME #8",
        "MEME #9",
        "MEME #10",
        "MEME #11",
        "MEME #12",
        "MEME #13",
        "MEME #14",
        "MEME #15",
        ]; */

        return {
            index: -1,
            photos: [{
                    title: "Фотография с космонавтом",
                    photo: "https://images.wallpaperscraft.ru/image/single/astronavt_skafandr_otrazhenie_144426_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с пирамидами",
                    photo: "https://images.wallpaperscraft.ru/image/single/piramidy_zvezdnoe_nebo_noch_161840_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с озером в горах",
                    photo: "https://images.wallpaperscraft.ru/image/single/minimalizm_nebo_oblaka_solntse_gory_ozero_pejzazh_95458_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с небоскребами",
                    photo: "https://images.wallpaperscraft.ru/image/single/gorod_vektor_panorama_119914_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с закатом",
                    photo: "https://images.wallpaperscraft.ru/image/single/gory_luna_pejzazh_vektor_119869_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с векторной графикой",
                    photo: "https://images.wallpaperscraft.ru/image/single/grafika_nizkopoligonalnyj_digital_art_minimalizm_102027_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с рекой",
                    photo: "https://images.wallpaperscraft.ru/image/single/gory_reka_solntse_143529_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с зелеными холмами",
                    photo: "https://images.wallpaperscraft.ru/image/single/holmy_peyzazhi_minimalizm_vecher_nebo_krasota_74526_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с закатом над лесом",
                    photo: "https://images.wallpaperscraft.ru/image/single/gory_zakat_pejzazh_147439_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с тигром",
                    photo: "https://images.wallpaperscraft.ru/image/single/poligon_tigr_art_125948_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с медведем",
                    photo: "https://images.wallpaperscraft.ru/image/single/medved_grafika_tsvet_abstraktsiya_95603_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с неоновым городом",
                    photo: "https://images.wallpaperscraft.ru/image/single/gorod_art_retrowave_143233_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с маяком",
                    photo: "https://images.wallpaperscraft.ru/image/single/maiak_noch_pejzazh_143019_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с городом на острове",
                    photo: "https://images.wallpaperscraft.ru/image/single/gorod_vektor_art_142453_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                },
                {
                    title: "Фотография с закатом в каньоне",
                    photo: "https://images.wallpaperscraft.ru/image/single/pustynia_kaktusy_solntse_127193_1920x1080.jpg",
                    alt: "Альтернативный текст",
                    comment: "Коментарий к фотографии"
                }
            ]
        };
    }
}
</script>

<style scoped>
.square {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

</style>