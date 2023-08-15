<template>
  <app-nav-bar />
</template>

<script>
import navBar from "@/components/Navbar.vue";

export default {
  name: "HelloWorld",
  components: {
    "app-nav-bar": navBar,
  },
  props: {
    msg: String,
  },
};
</script>
