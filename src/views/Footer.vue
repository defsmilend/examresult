<template>
  <footer class="footer container">
    <div class="main">
      <h4>Выполнил: Аскерзаде Айхан Теймур оглы</h4>
      <h4>Группа: 181-362</h4>
      <h4>Дата: 17.06.2020</h4>
    </div>

    <div class="litra">
      <h4>Используемая литература:</h4>
      <p>
        <a href="https://tpverstak.ru/flex-cheatsheet/">Bootstrap</a>
      </p>
      <p>
        <a href="https://www.npmjs.com/package/json-server">База данных</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
}

p {
  color: black;
}

a {
  color: black;
}

.litra {
  diplsay: flex;
  flex-direction: column;
}
</style>




<script>
export default {
  name: "Footer"
};
</script>