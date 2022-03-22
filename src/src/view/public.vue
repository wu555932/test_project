<template>
  <div>
    <Layout>
        <Sider>
              <Menu mode="vertical" :active-name="activeName">
                   <MenuItem
                      v-for="(item, index) in menulist"
                      :key="'item' + index"
                      :to="item.path"
                      :name="index"
                      class="title"
                    >
                      {{ item.name }}
                    </MenuItem>
              </Menu>
        </Sider>
        <Content>
          <router-view></router-view>
        </Content>
    </Layout>

  </div>
</template>

<script>
export default {
  name: 'Public',
  data() {
    return {
      menulist: [
        {
          name: '节点一',
          path: '/public/one',
        },
        {
          name: '节点二',
          path: '/public/two',
        },
        {
          name: '节点三',
          path: '/public/three',
        },
      ],
      activeName: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
