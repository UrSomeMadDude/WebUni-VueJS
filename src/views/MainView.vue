<template>
  <div class="content-box">
            <table>
                <thead>
                    <tr>
                        <th colspan="2" class="text-header">
                            <div class="bordered-header">
                                Лабораторная работа №1
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2" class="text-body">
                            <div class="bordered">
                                «Исследование возможностей языка разметки гипертекстов HTML и каскадных таблиц стилей CSS»
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img class="image" src="../assets/2.jpg" alt="text">
                        </td>
                        <td>
                            <img class="image" src="../assets/facebook-clipart-css-3.png" alt="text">
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="bordered-header">
                <p class="text-body"> Выполнил студент группы ИС/б-20-1-о</p>
            </div>
            <div class="bordered-header">
                <p class="text-body"> Лысенко Игорь</p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'MainView',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
  text-decoration: none;
}

.content-box {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text-header {
  font-size: 1.5em;
  color: aliceblue;
}

.text-body {
  font-size: 1.5em;
  color: aliceblue;
}

.bottom-table-text {
  font-size: 1.1em;
  color: aliceblue;
}

table {
  padding: 0;
  margin: 0;
}

.image {
  max-width: 500px;
  max-height: 500px;
  border-radius: 5px;
  cursor: pointer;
}

.bordered-header {
  max-width: 50%;
  margin-left: 25%;
  padding: 5px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #040012;
  margin-bottom: 20px;
}

.bordered {
  padding: 5px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #040012;
}

th, td {
  padding: 0;
  margin: 0;
}
</style>
