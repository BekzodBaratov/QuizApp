<template>
  <div class="flex justify-center items-center mt-20">
    <div v-if="!store.isDisabled">
      <p>Your correct answer {{ store.resultcount }}/10 nice:)</p>
      <button
        type="button"
        @click="() => beginQuizz()"
        :disabled="store.isDisabled"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Begin Quizz Test
      </button>
    </div>

    <div v-if="store.isDisabled" class="w-[40rem] p-2">
      <p class="Question font-semibold text-center text-2xl text-white">
        {{ store.randomQuiz[store.currentQuiz].question }}
      </p>

      <form v-if="store.randomQuiz[store.currentQuiz].questionType === 'single'">
        <p class="text-sm text-gray-400 text-center capitalize my-2">single answer</p>
        <div
          class="options grid grid-cols-1 md:grid-cols-2 gap-3 my-8 [&>input]:hidden [&>label]:bg-slate-500 [&>label]:py-2 [&>label]:px-3 [&>label]:text-white [&>label]:rounded-xl [&>label]:border-2 [&>label]:border-gray-100 [&>label]:cursor-pointer [&>label]:checked:bg-slate-900"
        >
          <input
            type="radio"
            v-model="store.singleRadioForm"
            :value="store.randomQuiz[store.currentQuiz].variant[0]"
            name="radioBtn"
            id="answerRadio1"
          />
          <label for="answerRadio1">{{ store.randomQuiz[store.currentQuiz].variant[0] }}</label>
          <input
            type="radio"
            v-model="store.singleRadioForm"
            :value="store.randomQuiz[store.currentQuiz].variant[1]"
            name="radioBtn"
            id="answerRadio2"
          />
          <label for="answerRadio2">{{ store.randomQuiz[store.currentQuiz].variant[1] }}</label>
          <input
            type="radio"
            v-model="store.singleRadioForm"
            :value="store.randomQuiz[store.currentQuiz].variant[2]"
            name="radioBtn"
            id="answerRadio3"
          />
          <label for="answerRadio3">{{ store.randomQuiz[store.currentQuiz].variant[2] }}</label>
          <input
            type="radio"
            v-model="store.singleRadioForm"
            :value="store.randomQuiz[store.currentQuiz].variant[3]"
            name="radioBtn"
            id="answerRadio4"
          />
          <label for="answerRadio4">{{ store.randomQuiz[store.currentQuiz].variant[3] }}</label>
        </div>
      </form>

      <form v-else-if="store.randomQuiz[store.currentQuiz].questionType === 'multiple'">
        <p class="text-sm text-gray-400 text-center capitalize my-2">multiple answer</p>
        <div
          class="options grid grid-cols-1 md:grid-cols-2 gap-3 my-8 [&>input]:hidden [&>label]:bg-slate-500 [&>label]:py-2 [&>label]:px-3 [&>label]:text-white [&>label]:rounded-xl [&>label]:border-2 [&>label]:border-gray-100 [&>label]:cursor-pointer [&>label]:checked:bg-slate-900"
        >
          <input
            type="checkbox"
            v-model="store.multipleCheckboxForm"
            :value="store.randomQuiz[store.currentQuiz].variant[0]"
            id="answer1"
          />
          <label for="answer1">{{ store.randomQuiz[store.currentQuiz].variant[0] }}</label>
          <input
            type="checkbox"
            v-model="store.multipleCheckboxForm"
            :value="store.randomQuiz[store.currentQuiz].variant[1]"
            id="answer2"
          />
          <label for="answer2">{{ store.randomQuiz[store.currentQuiz].variant[1] }}</label>
          <input
            type="checkbox"
            v-model="store.multipleCheckboxForm"
            :value="store.randomQuiz[store.currentQuiz].variant[2]"
            id="answer3"
          />
          <label for="answer3">{{ store.randomQuiz[store.currentQuiz].variant[2] }}</label>
          <input
            type="checkbox"
            v-model="store.multipleCheckboxForm"
            :value="store.randomQuiz[store.currentQuiz].variant[3]"
            id="answer4"
          />
          <label for="answer4">{{ store.randomQuiz[store.currentQuiz].variant[3] }}</label>
        </div>
      </form>

      <form v-else-if="store.randomQuiz[store.currentQuiz].questionType === 'custom'">
        <p class="text-sm text-gray-400 text-center capitalize my-2">written answer</p>
        <textarea
          class="w-full bg-slate-500 border-2 text-lg my-8 border-gray-100 rounded-sm text-white outline-offset-2 outline-white p-2"
          name="writtenAnswer"
          v-model="store.customInpForm"
          id="writtenAnswer"
          rows="5"
        ></textarea>
      </form>

      <QuestionArrowsVue />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useCounterStore } from "../store/index";
import QuestionArrowsVue from "./QuestionArrows.vue";
const store = useCounterStore();

let pubData = reactive(...Array(store.quizTest));
// pubData.single[0].question = "sssddd";
// console.log(store.quizTest.single);
console.log(pubData);

function randomise(obj) {
  return Math.floor(Math.random() * obj);
}
function pushObjFunc10(val) {
  for (let i = 0; i < 4; i++) {
    store.randomQuiz.push(val.single[randomise(val.single.length)]);
  }
  for (let j = 0; j < 4; j++) {
    store.randomQuiz.push(val.multiple[randomise(val.multiple.length)]);
  }
  for (let k = 0; k < 2; k++) {
    store.randomQuiz.push(val.customer[randomise(val.customer.length)]);
  }
}
const beginQuizz = () => {
  store.isDisabled = true;
  store.userResult = [false, false, false, false, false, false, false, false, false, false];
  pushObjFunc10(pubData);
};
</script>

<style scoped>
.options input[type="checkbox"]:checked + label {
  background: #8a99af;
}
.options input[type="radio"]:checked + label {
  background: #8a99af;
}
</style>
