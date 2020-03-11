Vue.component('assignment-button', {
  props: {
    num: Number,
  },
  methods: {
    setActive() {
      this.$emit('active');
    }
  },
  template: `
  <div>
    <h2> Web Assign {{num}} </h2>
    <button @click="setActive"> Select </button>
  </div>
  `,
});