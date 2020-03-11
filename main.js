function load() {
  window.app = new Vue({
    el: '#app',
    data() {
      return {
        shownAssign: -1,
      };
    },
    computed: {
      currentAssign() {
        return this.assignments.find(x => x.num == this.shownAssign);
      },
      assignments() {
        return data.assignments;
      }
    },
    methods: {
      setActive(num) {
        this.shownAssign = num;
      }
    }
  });
}