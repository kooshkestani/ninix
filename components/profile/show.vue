<template>
  <div>
    <form @submit.prevent="show" class="d-flex flex-column">
      <h6>first_name</h6><input type="text" v-model="first_name" class="p-2 m-2"/>
      <h6>last_name</h6><input type="text" v-model="last_name" class="p-2 m-2"/>
      <h6>birth_year</h6><input type="text" v-model="birth_year" class="p-2 m-2"/>
      <el-button type="submit" class="p-2 m-2" @click="show">نمایش</el-button>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        first_name: this.$store.state.loginModule.first_name,
        last_name: this.$store.state.loginModule.first_name,
        birth_year: this.$store.state.loginModule.first_name,
        relationship_type: 0
      };
    },
    methods: {
      show() {
        this.$axios.get('http://dyonical.ir:8000/api/v1/member/', {headers: {"Authorization": "JWT "+this.$store.state.loginModule.token}}
        ).then(result => {
          this.first_name = result.data.first_name;
          this.last_name = result.data.last_name;
          this.birth_year = result.data.birth_year;
          console.log(result);
        })
          .catch(e => console.log(e))

      },

    },


  }
</script>
