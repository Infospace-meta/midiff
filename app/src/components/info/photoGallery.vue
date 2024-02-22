<template>
  <div>
    <ul class="gallery">
      <li v-for="n in 57" :key="n">
        <img
          @click="highlight"
          :src="require('../../assets/graduation23/' + n + '.jpg')"
        />
      </li>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.gallery {
  display: flex;
  justify-content: space-around;
}
img {
  width: 20%;
}
#theater {
  width: 40%;
}
</style>
