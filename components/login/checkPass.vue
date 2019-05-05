<template>
  <div>
    <input v-model="checkPassValid" placeholder="edit me">
    <el-button @click="open(checkPassValid)"></el-button>

  </div>
</template>
<script>

  export default {
    data() {
      return {
        checkPassValid: '',
      };
    },
    methods: {

      open(checkPassValid) {
        console.log(checkPassValid)
        this.$store.dispatch('checkValidPhoneNumber', checkPassValid)
      },

    },

  }
</script>
