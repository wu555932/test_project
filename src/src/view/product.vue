<template>
  <div>
    <ul>
      <li v-for="(item, index) in productList" :key="'item' + index">
        {{ item }}
      </li>
    </ul>
    <div style="width: 375px">tssssss</div>
  </div>
</template>
<script>
export default {
  name: "Production",
  components: {},
  data() {
    return {
      productList: [
        "Porsche----保时捷",
        "Mercedes-Benz----梅赛德-奔驰",
        "Automobili Lamborghini S.p.A.----兰博基尼",
      ],
    };
  },
};
</script>
<style lang="sass" scoped></style>
