<template>
    <form @submit.prevent="Submit" @reset="handleReset">
        <div class="contact-box">
            <div class="left"></div>
            <div class="right">
                <h2>Ваш контакт</h2>
                <input placeholder="Имя" class="field" type="text" v-model="formData.name" />
                <input class="field" placeholder="Фамилия" type="text" v-model="formData.surname" />
                <input type="number" id="age" class="field" v-model.number="formData.age" placeholder="Возраст" />
                <div class="wrapper">
                    <input type="radio" v-model="formData.sex" :value="sexOptions.M" id="option-1" />
                    <input type="radio" v-model="formData.sex" :value="sexOptions.F" id="option-2" />
                    <label for="option-1" class="option option-1">
                        <div class="dot"></div>
                        <span>Мужчина</span>
                    </label>
                    <label for="option-2" class="option option-2">
                        <div class="dot"></div>
                        <span>Женщина</span>
                    </label>
                </div>
                <div class="wrapper">
                    <div v-for="option in frameWorksOptions" :key="option">
                        <input v-model="formData.frameworks" :value="option" type="checkbox" :id="option">
                        <label class="form-check-label" :for="option">
                            {{ option }}
                        </label>
                    </div>
                </div>
                <div v-if="showValidateState && errors.length > 0">
                    <div class="alert-danger">
                        <h4>Ошибка валидации</h4>
                        <p id="errorFio" v-for="error in errors" :key="error.message">{{ error.message }}</p>
                    </div>
                </div>
                <div v-if="isSaveCompete">
                    <div class="alert-success">
                        <h4>Сохранение</h4>
                        <p id="errorFio">Данные успешно сохранены</p>
                    </div>
                </div>
                <input class="button" type="submit" id="submit" value="Отправить">
                <input class="button" type="reset" value="Очистить форму" id="resett">
            </div>
        </div>
    </form>
</template>

<script>
import {mapMutations} from "vuex"
const defaultFormData = {
    name: "",
     surname: "",
    age: null,
    sex: "",
    frameworks: [],
}

export default {
    name: 'Form',
    data: () => ({
        showValidateState: false,
        isSaveCompete: false,
        sexOptions: Object.freeze({
            M: "M",
            F: "F",
        }),
        frameWorksOptions: Object.freeze({
            VUE: "Vue",
            ANGULAR: "ANGULAR",
            SVELTE: "SVELTE",
            REACT: "REACT",
        }),
        formData: {...defaultFormData}
    }),

    computed: {
        errors() {
            const errors = [];
            if (!this.formData.name) {
                errors.push({ field: "name", message: "Введите имя!" });
            }
            else {
                errors.filter((error) => error.field !== "name");
            }
            if (!this.formData.surname) {
                errors.push({ field: "surname", message: "Введите Фамилию!" });
            }
            else {
                errors.filter((error) => error.field !== "surname");
            }
            if (!this.formData.age && typeof this.formData.age !== "number" || this.formData.age <= 0) {
                errors.push({ field: "age", message: "Укажите возраст!" });
            }
            else {
                errors.filter((error) => error.field !== "age");
            }
            if (!this.formData.sex) {
                errors.push({ field: "sex", message: "Укажите пол!" });
            }
            else {
                errors.filter((error) => error.field !== "sex");
            }
            return errors;
        },
    },

    methods: {
        ...mapMutations(['addUser']),
        Submit() {
            this.$data.showValidateState = true
            if (this.errors.length === 0) {
                this.addUser(this.$data.formData)

                this.$data.formData = {...defaultFormData}
                this.$data.showValidateState = false
                this.$data.isSaveCompete = true
            }
        },

        handleReset() {
            this.$data.showValidateState = false
            this.$data.isSaveCompete = false
            this.$data.formData = {...defaultFormData}
        }
    },
}
</script>

<style scoped>
.contact-box {
    max-width: 800px;
    max-height: 600px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
}

.left {
    height: 100%;
    background: url("../assets/bg2.jpg") no-repeat center;
    background-size: cover;
}

.right {
    position: relative;
    padding: 25px 40px;
}

h2 {
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

h2:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #300061;
}

.field {
    width: 100%;
    padding: 0.5rem 1rem;
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0);
    background-color: rgba(230, 230, 230, 0.6);
    font-size: 1.1rem;
    margin-bottom: 10px;
    transition: 0.3s;
}

.field:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.field:focus {
    background-color: #fff;
    border: 2px solid rgba(30, 85, 250, 0.47);
}

.button {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    background-color: #300061;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    transition: 0.3s;
    margin-top: 10px;
}

.button:hover {
    background-color: #040012;
}

.button:disabled {
    color: darkgrey;
    opacity: 0.5;
}

.wrapper {
    display: inline-flex;
    height: 25px;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    padding: 20px 15px;
}

.wrapper .option {
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    padding: 5 10px;
    border: 2px solid lightgrey;
    transition: all 0.3s ease;
}

.wrapper .option .dot {
    height: 20px;
    width: 20px;
    background: #d9d9d9;
    border-radius: 50%;
    position: relative;
}

.wrapper .option .dot:before {
    position: absolute;
    content: "";
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    background: #300061;
    border-radius: 50%;
    opacity: 0;
    transform: scale(1);
    transition: all 0.3s ease;
}

input[type=radio] {
    display: none;
}

#option-1:checked:checked~.option-1,
#option-2:checked:checked~.option-2 {
    border-color: #300061;
    background: #300061;
}

#option-1:checked:checked~.option-1 .dot,
#option-2:checked:checked~.option-2 .dot {
    background: #fff;
}

#option-1:checked:checked~.option-1 .dot::before,
#option-2:checked:checked~.option-2 .dot::before {
    opacity: 1;
    transform: scale(1);
}

.wrapper .option span {
    font-size: 18px;
    color: #808080;
}

#option-1:checked:checked~.option-1 span,
#option-2:checked:checked~.option-2 span {
    color: #fff;
}

h4 {
   color: #fff;
}

#errorFio {
    margin-top: 2px;
    color: #fff;
    font-size: 0.7em;
    font-weight: 600;
}

.alert-danger {
    position: absolute;
    top: 83%;
    left: -41%;
    padding: 5px;
    background-color: red;
    border-radius: 10px;
}

.alert-success {
    position: absolute;
    top: 92%;
    left: -42%;
    padding: 5px;
    background-color: green;
    border-radius: 10px;
}
</style>