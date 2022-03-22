<template>
  <div>
    <h2>我是子节点一</h2>
       <Layout>
      <Footer>Footer One</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'One',
  data() {
    return {};
  },
  created() {
    // debugger;
    console.log('test111111');
  },
};
</script>

<style lang="scss" scoped></style>
