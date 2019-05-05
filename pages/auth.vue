<template>
  <div class="container-fluid vh-100" style="background: linear-gradient(to right top,#2d2c72,#4ceeb5)">
    <div class="container vh-100">
      <div class="bg-light rounded m-auto position-relative" style="width: 300px;height: auto;min-height:250px;top: 25%">
        <div class="w-100 d-flex p-3">
          <img src="../assets/ninix.png" height="50" class="m-auto"/>
        </div>
        <component :is="$store.state.loginModule.state" />
      </div>
    </div>
  </div>
</template>

<script>
  import generate from '~/components/login/generate.vue'
  import check from '~/components/login/check.vue'
  import signUp from '~/components/profile/signUp.vue'
  import show from '~/components/profile/show.vue'

  export default {
    components: {
      generate,
      check,
      signUp,
      show
    },
    data() {
      return {
        mobile_number: "",
        passcode: "",
      };
    },
    methods: {}
  };
</script>


