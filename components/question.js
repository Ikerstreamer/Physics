Vue.component('question', {
  props: {
    question: Object,
  },
  data() {
    return {
      rawInputs: [],
      parsedInfo: [],
    };
  },
  computed: {
    inputs() {
      return this.rawInputs.map(x => parseFloat(x));
    },
  },
  created() {
    let arr = this.question.text.split("");
    let output = [];
    while (arr.indexOf("*") >= 0) {
      output.push(arr.slice(0, arr.indexOf("*")).join(""));
      let num = arr.slice(arr.indexOf("*") + 1, arr.indexOf("*", arr.indexOf("*") + 1)).join("");
      this.rawInputs.push(num);
      output.push(this.inputs.length - 1);
      arr = arr.slice(arr.indexOf("*", arr.indexOf("*") + 1) + 1);
    }
    output.push(arr.join(""));
    this.parsedInfo = output;
  },
  methods: {
    isInput(line) {
      return typeof line == "number";
    },
    formatOut(num) {
      if (num > 1000 || num < 0.001) {
        return Math.round(num / Math.pow(10, Math.floor(Math.log10(num))) * 1000) / 1000 + "E" + Math.floor(Math.log10(num));
      }
      return Math.round(num * 1000) / 1000;
    }
  },
  template: `
  <div>
  <h3> Question {{question.num}} </h3>
    <span v-for="line in parsedInfo">
      <input v-if="isInput(line)" v-model.number="rawInputs[line]" type="number"> </input>
      <span v-else v-html="line"></span>
    </span>
    <div v-for="ans in question.answers" v-html="ans.text + '<br>' + formatOut(ans.value(inputs)) + ' ' + ans.unit"></div>
  </div>
  `
});