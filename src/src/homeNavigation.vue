<template>
  <div class="wrap-page">
    <Layout>
      <Header>
        <Menu mode="horizontal" :active-name="activeName">
          <div class="layout-logo"></div>
          <div class="layout-home-nav">
            <MenuItem
              v-for="(item, index) in navigation"
              :key="'item' + index"
              :to="item.path"
              :name="index"
              class="title"
            >
              {{ item.name }}
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Content>
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'HomeNavigation',
  components: {},
  data() {
    return {
      navigation: [
        {
          name: '首页',
          path: '/home',
        },
        {
          name: '产品',
          path: '/product',
        },
        {
          name: '咨询',
          path: '/question',
        },
        {
          name: '公告',
          path: '/public',
        },
      ],
      activeName: 0,
    };
  },
  methods: {
    refreshMenu(pathList, currentpath) {
      for (const [index, item] of pathList.entries()) {
        if (item.path === currentpath) {
          this.activeName = index;
          return;
        }
      }
    },
  },
  watch: {
    $route() {
      this.refreshMenu(this.navigation, this.$route.path);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap-page {
  margin: 0px;
  padding: 0px;
  .layout-home-nav {
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    user-select: none;
  }
}
</style>
