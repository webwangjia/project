<!--  -->
<template>
  <div class="layout">
      <Header></Header>
      <div class="content">
         <router-view></router-view>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>

import {Header,Footer} from '@/components/layout'

export default {
  data () {
    return {
    };
  },

  created(){},

  computed: {},

  methods: {},

  components: {
      Header,
      Footer
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