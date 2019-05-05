<template>
  <div>
    <form @submit.prevent="checkPasscode" class="d-flex flex-column">
      <!--<input type="text" v-model="passcode" class="p-2 m-2"/>-->
      <input type="tel" maxlength="5" pattern="[0-9]{1}" style="letter-spacing:1.8rem;padding-left:4.1rem;outline: none;border: none;background: none"
             v-model="passcode">
      <hr style="
      margin: auto;
      height: 2px;
    width: 12em;
    padding-top: 0;
    background-image: linear-gradient(90deg, #212121, #212121 75%, transparent 75%, transparent 100%);
    background-size: 2.4em 1px;
    border: none;">
      <div class="d-flex mt-5">
        <el-button type="primary"  class="p-2 m-auto" @click="checkPasscode">ورود کد</el-button>

      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        passcode: "",
      };
    },
    methods: {
      checkPasscode() {
        this.$axios.get('http://dyonical.ir:8000/api/v1/check-passcode/', {
          params: {
            passcode: this.passcode,
            mobile_number: this.$store.state.loginModule.mobile_number,
          },
        }).then(result => {
          console.log(result);
          this.$store.state.loginModule.token = result.data.token;
          if (this.$store.state.loginModule.is_registered == true) {
            this.$store.state.loginModule.state='show';

            // this.$parent.$data.activeShowComponent = !this.$parent.$data.activeShowComponent;
            // this.$parent.$data.activeCheckComponent = !this.$parent.$data.activeCheckComponent;
          } else {
            // this.$parent.$data.activeEditComponent = !this.$parent.$data.activeEditComponent;
            // this.$parent.$data.activeCheckComponent = !this.$parent.$data.activeCheckComponent;
            this.$store.state.loginModule.state='signUp';

          }
        })
          .catch(e => console.log(e))

      }
    }
  }
</script>
