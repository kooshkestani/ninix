<template>
  <div>
    <form @submit.prevent="generatePasscode" class="d-flex flex-column">
      <!--<input type="text" v-model="mobile_number" class="p-2 m-2"/>-->
      <vue-tel-input
        class="p-2 m-2"
        v-model="mobile_number"
        @onInput="onInput"
        placeholder="شماره همراه خود را وارد کنید"
        :maxLen="14"
        :disabledFormatting="true">
      </vue-tel-input>
      <el-button v-show="activeButtonSendCode" class="p-2 m-2 position-absolute" type="primary" round style="bottom: 10px;left: 25%"
                 @click="generatePasscode">دریافت کد فعالسازی
      </el-button>
    </form>
  </div>
</template>
<script>
  import VueTelInput from 'vue-tel-input';
  import 'vue-tel-input/dist/vue-tel-input.css';
  export default {
    components: {
      VueTelInput
    },
    data() {
      return {
        mobile_number: "",
        activeButtonSendCode:false
      };
    },
    methods: {
      onInput({number, isValid, country}) {
        console.log(number, isValid, country);
        console.log(number);
        if (isValid==true){
          this.activeButtonSendCode=!this.activeButtonSendCode;
        }
      },
      generatePasscode() {
        this.$store.state.loginModule.state='check';
        // this.$parent.$data.activeGenerateComponent = !this.$parent.$data.activeGenerateComponent;
        // this.$parent.$data.activeCheckComponent = !this.$parent.$data.activeCheckComponent;
        this.$axios.get('http://dyonical.ir:8000/api/v1/generate-passcode/', {
          params: {
            mobile_number: this.mobile_number
          }
        }).then(result => {
          console.log(result);
          this.$store.state.loginModule.mobile_number = this.mobile_number;
          this.$store.state.loginModule.is_registered = result.data.is_registered;

        })
          .catch(e => console.log(e))

      }
    }
  };
</script>
