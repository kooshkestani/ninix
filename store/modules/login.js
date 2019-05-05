import * as axios from 'axios'

export default {
  state: {
    state:'generate',
    phone: '',
    token: '',
    user: [],
    mobile_number: "",
    is_registered:false,
    relationship_type:0,
    birth_year:'',
    first_name:'',
    last_name:''
  },
  mutations: {

    update(state, response) {
      if (response.data.is_registered == true) {

      } else {
        state.phone = 0
      }
    },
    updatetoken(state, response) {
      axios.defaults.headers.common['Authorization'] = response.data.token
      state.token = response.data.token;
      this.$store.dispatch('showuser', state.token)
    },
    updateuser(state, response) {
      debugger
      state.user = response.data;
    }

  },
  actions: {
    // generatePasscode(vuexContext, authData) {
    //   let authUrl = "http://dyonical.ir:8000/api/v1/generate-passcode/"
    //   return this.$axios
    //     .$get(authUrl, params: {
    //     mobile_number: authData.phoneNumber
    //   })
    //     .then(result => {
    //       vuexContext.commit("setToken", result.idToken);
    //       localStorage.setItem("token", result.idToken);
    //       localStorage.setItem(
    //         "tokenExpiration",    //         new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
    //       );
    //       Cookie.set("jwt", result.idToken);
    //       Cookie.set(
    //         "expirationDate",
    //         new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
    //       );
    //     })
    //     .catch(e => console.log(e));
    // },


    checkPhoneNumber(context, phoneNumber) {
      this.state.phone = phoneNumber;
      return new Promise((resolve, reject) => {
        axios.get('http://dyonical.ir:8000/api/v1/generate-passcode/', {
            params: {
              mobile_number: phoneNumber
            }
          }
        ).then(function (response) {
          context.commit('update', response)
          resolve(response)
        }).catch(function (error) {
          context.commit('update', null)
          reject(error)
        })
      })

    },
    checkValidPhoneNumber(context, checkPassValid) {

      return new Promise((resolve, reject) => {
        axios.get('http://dyonical.ir:8000/api/v1/check-passcode/', {
            params: {
              mobile_number: this.state.phone,
              passcode: checkPassValid
            }
          }
        ).then(function (response) {
          context.commit('updatetoken', response)
          resolve(response)
        }).catch(function (error) {
          context.commit('updatetoken', null)
          reject(error)
        })
      })

    },
    showuser(context) {
      axios.post('http://dyonical.ir:8000/api/v1/member/').then(function (response) {
        context.commit('updateuser', response)
      }).catch(function (error) {
        context.commit('updateuser', null)
      })
    }


  },
  getters: {}
}
