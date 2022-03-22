<template>
  <div class="container">
    <!-- <div>
      <h1>Test Slid</h1>
    </div>-->
    <div class="test">
      <div class="left">leftleftleftleftleft</div>
      <div class="box">
        <!-- <div class="left">leftleftleftleftleft</div> -->
        <div class="right">
          <div v-for="(item,index) in itemList" :key="'item'+index" class="item">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slid",
  data() {
    return {
      itemList: [1, 2, 3, 4, 5, 6, 7]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.container {
  display: inline;
  overflow: hidden;
  .test {
    ::-webkit-scrollbar {
      /*隐藏滚轮*/
      display: none;
    }
    .left {
      position: fixed;
      width: 100px;
      height: 50px;
      border: 1px solid red;
      line-height: 50px;
      // overflow: hidden;
    }
    .box {
      display: flex;
      overflow: scroll;
      // position: fixed;
      margin-left: 105px;
      .right {
        display: flex;
        // flex-wrap: nowrap;

        .item {
          display: inline-block;
          width: 100px;
          height: 50px;
          border: 1px solid #333;
          line-height: 50px;
        }
      }
    }
  }
}
</style>

