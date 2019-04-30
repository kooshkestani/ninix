<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        ninix
      </h1>
      <h2 class="subtitle">
        ninix sample project
      </h2>
      <div class="links">
        <a
          href="/auth"
          target="_blank"
          class="button--green"
        >auth</a>

      </div>
    </div>

  </section>
</template>


<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    },
    name: "AdminAuthPage",
    layout: "admin",
    data() {
      return {
        mobile_number: "",
      };
    },
    methods: {
      onSubmit() {
        this.$axios.get('http://dyonical.ir:8000/api/v1/generate-passcode/', {
          params: {
            mobile_number: this.mobile_number
          }
        }).then(result => {
          console.log(result)
        })
          .catch(e => console.log(e))

      }
    }
  };
</script>


<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
