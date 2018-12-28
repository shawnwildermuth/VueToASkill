// contact.js
Vue.use(VeeValidate);

var theView = new Vue({
  el: "#theForm",
  data: {
    title: "Contact Us",
    msg: {}
  },
  methods: {
    onSave: function () {
      this.$validator.validateAll().then(function (success) {
        if (success) {
          alert("Trying to save: " + this.name);
        }
      }.bind(this));
    }
  }
});