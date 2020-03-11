Vue.component('assignment', {
  props: {
    assign: Object,
  },
  template: `
    <div>
      <question
      v-for="question in assign.questions"
      :key="question.num"
      :question="question"
      />
    </div>
  `
});