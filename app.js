new Vue({
  el: "#app",

  data() {
    return {
      form: {
        name: null,
        age: null
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted.", this.form);
    }
  }
});
