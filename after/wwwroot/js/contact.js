// contact.js
var theView = new Vue({
  el: "#theForm",
  data: {
    title: "Contact Form",
    busy: false,
    msg: {
      name: "",
      email: "",
      subject: "",
      body: ""
    }
  },
  methods: {
    onSubmit: function () {
      //this.title = "This is a new title";
      //alert(JSON.stringify(this.msg));
      this.busy = true;
      // Wait 2 seconds so we can see the flag
      setTimeout(() => this.busy = false, 2000);
    }
  }
});
