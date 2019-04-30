<template>
  <div>
    <!--<div><img src="../assets/banner.jpg" width="500" height="300"/></div>-->
    <div>

      <vue-tel-input
        v-model="phone"
        @onInput="onInput"
        :maxLen="14">
      </vue-tel-input>
      <el-button @click="open">ورود</el-button>
      <checkpass v-show="activeCheckPass"></checkpass>
      <user v-show="activeuser"></user>

    </div>

  </div>
</template>
<script>
  import VueTelInput from 'vue-tel-input';
  import 'vue-tel-input/dist/vue-tel-input.css';
  import checkpass from '~/components/login/checkpass.vue'
  import user from '~/components/login/user.vue'

  export default {
    components: {
      VueTelInput,
      checkpass,
      user
    },
    data() {
      return {
        phone: '',
        activeCheckPass: false,
        activeuser: false,
      };
    },
    methods: {
      open() {
        this.activeCheckPass=!this.activeCheckPass;
        this.activeuser=!this.activeuser;
      },

      onInput({number, isValid, country}) {
        console.log(number, isValid, country);
        console.log(number)

        this.$store.dispatch('checkPhoneNumber', +989126401697)
      },

    },

  }
</script>
