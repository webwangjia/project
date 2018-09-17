<!--  -->
<template>
  <div class="layout">
      <header></header>
      <div class="content">
         <router-view></router-view>
      </div>
      <footer></footer>
  </div>
</template>

<script>

import header from '@/layout/header'
import footer from '@/layout/footer'


export default {
  data () {
    return {
    };
  },

  created(){},

  computed: {},

  methods: {},

  components: {
      header,
      footer
  },
}

</script>
<style lang='less' scoped>
.layout{
  .content{
     width:100%;
     background: #F7F7F7;
  }
}

</style>