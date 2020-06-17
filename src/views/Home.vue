<template>
  <div class="container">
    <h1>Главная страница</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum laborum tempora aliquid atque officiis tenetur eligendi odit impedit! Inventore ex delectus maxime deleniti unde vero odio in cum, ipsam corporis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea ipsum nam quisquam qui molestias rerum neque quo, voluptatem ipsa consequuntur, iste dolorum, doloremque esse aspernatur. Quibusdam vitae ex quam.
    </p>
    <img
      src="https://cdn.fishki.net/upload/post/2018/01/26/2494216/tn/56f54d86132943dce7f8598753d8a8a0.jpg"
      alt
    />
  </div>
</template>

<style  scoped>
h1 {
  font-family: "Tangerine", serif;
}

.container {
  margin-top: 15px;
}

img {
  width: 40%;
  height: 40%;
}

img {
  -webkit-animation: pulsing 2s infinite;
  animation: pulsing 2s infinite;
}

@-webkit-keyframes pulsing {
  0% {
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
  }
  50% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  100% {
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
  }
}
</style>

