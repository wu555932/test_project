<template>
  <div class="container">
    <div>
      <h1>testssss</h1>
    </div>
    <div>
      <vue-qr
      :correctLevel="3"
      :autoColor="false"
      :bgSrc="bgSrc"
      :logoSrc="logoSrc"
      :text="codeUrl"
      ></vue-qr>
    </div>
  </div>
</template>

<script>
// import QRCode from "qycodejs2";
import VueQr from 'vue-qr';

export default {
  name: 'Code',
  components: {
    VueQr,
  },
  data() {
    return {
      logoSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650098387&t=cc02a8c03d59c0f98816c616301164f5',
      bgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0827%2Fc0c92bd51bb72e6d12d5b877dce338e8.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650098437&t=a9e3251ee44d990f790f172a324530b7',
      codeUrl: 'https://www.baidu.com',
    };
  },
  methods: {
    // GenerateQRcode() {
    //   new QRCode("qrcode", {
    //     // 此处的qrcode为上面div的id
    //     text: "www.runoob.com",
    //     width: 200,
    //     height: 200,
    //     colorDark: "#000000",
    //     colorLight: "#ffffff",
    //     correctLevel: QRCode.CorrectLevel.H
    //   });
    // }
  },
  mounted() {
    // this.GenerateQRcode();
  },
};
</script>

<style lang="scss" scoped>
</style>
