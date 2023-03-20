<template>
  <div class="div">
    <h1 class="text-rose-900 text-4xl font-semibold">QUẢN LÝ SINH VIÊN</h1>
    <div class="div1">
      <h1 class="text-2xl font-medium mr-7"> <router-link to ='/'>Danh sách sinh viên</router-link> </h1>
      <h1 class="text-2xl font-medium"> <router-link to = '/student'>Sinh viên</router-link> </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderHome",
};
</script>

<style scoped>
.div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.div1 {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
</style>
