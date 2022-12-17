<template>
    <div>
        <Form />
    </div>
</template>

<script>
import Form from '@/components/Form.vue';
export default {
    name: 'ContactView',
    components: {
        Form
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
}
</style>