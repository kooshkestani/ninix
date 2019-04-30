<template>
  <div>

    <form @submit.prevent="signup" class="d-flex flex-column">
      <h1 class="text-center">مشخصات فردی</h1>
      <h6 class="text-center">نام</h6><input type="text" v-model="first_name" class="p-2 m-2"/>
      <h6 class="text-center">نام خانوادگی</h6><input type="text" v-model="last_name" class="p-2 m-2"/>
      <h6 class="text-center">سال تولد</h6><input type="number" min="1900" max="2099" maxlength="4" step="1"  v-model="birth_year" class="p-2 m-2"/>
      <el-button type="primary" class="p-2 m-2" @click="signup">ثبت نام</el-button>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        first_name:'',
        last_name:'',
        birth_year:'',
        relationship_type:0

      };
    },
    methods: {
      signup() {
        this.$axios.post('http://dyonical.ir:8000/api/v1/member/', {
            first_name: this.first_name,
            last_name: this.last_name,
            birth_year:this.birth_year,
            relationship_type:0
        },{headers: {"Authorization" : "JWT "+this.$store.state.loginModule.token}}
        ).then(result => {
          console.log(result);
          alert('OK');
          if (result.status == '200') {
            this.$router.push('/');
          }


        })
          .catch(e => console.log(e))

      }

    },

  }
</script>
