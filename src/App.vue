<template>
  <div id="app">
    <HeaderPanel v-if="isUserAuthenticated"/>
    <NavigationPanel v-if="isUserAuthenticated"/>
    <router-view></router-view>
  </div>

</template>

<script>
import NavigationPanel from "./components/NavigationPanel.vue"
import HeaderPanel from "./components/HeaderPanel.vue"


export default {
  computed: {
    isUserAuthenticated(){
      return this.$store.getters.isUserAuthenticated
    }
  },
  name: 'app',
  data: function(){
    return { current_element: "dashboard",
    }
  },
  components: {
    HeaderPanel,
    NavigationPanel,
  },
  methods: {
    active: function (data) {
      this.current_element = data;
    },

  }
}
</script>

<style>
  .unselectable {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           /* Non-prefixed version, currently
                                  not supported by any browser */
  }
</style>
