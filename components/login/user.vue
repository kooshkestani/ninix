<template>
  <div>
    <p>dddddd</p>
    {{test}}
  </div>
</template>
<script>

  export default {
    data() {
      return {
      };
    },
    methods: {



    },
    mounted(){
      // this.$store.dispatch('showuser', this.$store.state.loginModule.token)

    },
    computed:{
      test(){
        return this.$store.state.loginModule.user;
      }
    }

  }
</script>
