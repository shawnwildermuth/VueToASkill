// wait-cursor.js
Vue.component("wait-cursor", {
  props: {
    message: String,
    shown: Boolean
  },
  template: `<div class='alert alert-info' 
                  v-show='shown'>
  {{ message }}
</div>`
});