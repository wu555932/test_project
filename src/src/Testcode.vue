<template>
  <div id="top" class="container">
    <div>
      <!-- <h1>TestCode</h1>
      <div class="pic"></div>
      <button @click="down">下载</button>-->
      <div
        :style="'background:url('+ url +') no-repeat;background-position:top;background-size:100%'"
        id="share"
        class="share"
      >
        <!-- <img :src="url" style="width:375px;" alt> -->
      </div>
      <div ref="box" id="img" class="img">
        <!-- <img src="../assets/poster.png" alt> -->
      </div>
    </div>
  </div>
</template>

<script>
// import QRCode from "qycodejs2";
import html2canvas from 'html2canvas';
import domtoimage from '../../domtoimage/domtoimage';
// import html2canvas from "./plug/html2canvas/html2canvas";
// import { parse } from "qs";
export default {
  name: 'TestCode',
  data() {
    return {
      url: '',
      flag: true,
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
    GenerateImg() {
      const boxImg = this.$refs.box;
      // const node = document.getElementById("img");

      html2canvas(boxImg, {}).then((dataurl) => {
        this.url = dataurl.toDataURL('image/png');
      });
    },
    shotpic() {
      // const that = this;
      const node = document.getElementById('img');
      // const share = document.getElementById("share");

      domtoimage.toPng(node, { scale: 2 }).then((dataurl) => {
        this.url = dataurl;
        // console.log("url", dataurl);
        // var image = new Image();
        // image.src = dataurl.toDataURL("image/png");
        // image.style.width = 365 + "px";
        // image.style.height = 667 + "px";
        // const a = document.createElement("a");
        // const event = new MouseEvent("click");
        // a.download = "ceshi";
        // a.href = dataurl;
        // a.dispatchEvent(event);
        // share.appendChild(image);
      });
    },
    down() {
      const $this = this;
      html2canvas(document.getElementById('top'), {
        scale: 1,
        width: 440,
      }).then((canvas) => {
        const imageurl = canvas.toDataURL('image/png');
        const imagename = '测试';
        $this.fileDownload(imageurl, imagename);
      });
    },
    fileDownload(downloadUrl, downloadName) {
      const aLink = document.createElement('a');
      aLink.style.display = 'none';
      aLink.href = downloadUrl;
      aLink.download = `${downloadName}.jpg`;
      // 触发点击-然后移除
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    },
    DPR() {
      if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        return window.devicePixelRatio;
      }
      return 1;
    },
    drawCanvas() {
      // 要转换的DOM节点
      const dom = document.querySelector('#img');
      const box = window.getComputedStyle(dom);
      // DOM节点计算后宽高
      const width = parseInt(box.width, 10);
      const height = parseInt(box.height, 10);
      // 获取像素比
      const scaleBy = this.DPR();
      // const scaleBy = 1;

      // 创建自定义的canvas 元素
      const canvas = document.createElement('canvas');
      // 设定canvas元素属性宽高为DOM节点宽高*像素比
      canvas.width = width * scaleBy;
      canvas.height = height * scaleBy;
      // 设定canvas css宽高为DOM节点宽高
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // 获取画笔
      const context = canvas.getContext('2d');
      // 将所有绘制内容放大像素比倍
      // context.scale(scaleBy, scaleBy);
      context.scale(0.5, 0.5);
      html2canvas(dom, { canvas, background: '#fff' }).then((dataUrl) => {
        this.url = dataUrl.toDataURL('image/png');
        this.flag = false;
      });
    },
  },
  mounted() {
    // this.GenerateQRcode();
    // setTimeout(() => {
    //   this.shotpic();
    // }, 1000);
    setTimeout(() => {
      // this.GenerateImg();
      this.drawCanvas();
    }, 0);
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 100%;
  .pic {
    width: 350px;
    height: 100px;
    background-image: url(../assets/one.png);
    background-size: cover;
  }
  .share {
    height: 667px;
    width: 375px;
  }
  .img {
    width: 100%;
    height: 667px;
    background-image: url(../assets/poster.png);
    background-size: contain;
    background-repeat: no-repeat;
    // height: 667px;
    img {
      // width: 375px;
      // height: 667px;
    }
  }
}
</style>
