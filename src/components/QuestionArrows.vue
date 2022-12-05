<template>
  <div class="questionsArrow—> flex justify-between text-white [&>div]:space-x-1 [&>div]:cursor-pointer">
    <div @click="() => prevQues()" :class="!store.currentQuiz ? 'opacity-70' : 'group'">
      <i class="fa-solid fa-arrow-left-long duration-300 pointer-events-none group-hover:-translate-x-1"></i>
      <span class="pointer-events-none">Prevent Question</span>
    </div>
    <div class="text-base pointer-events-none">{{ store.currentQuiz + 1 }}/10</div>
    <div v-if="store.currentQuiz === 9" @click="() => finishQues()" class="group">
      <span class="text-blue-500 font-semibold">Finish Question</span>
      <i class="fa-solid fa-arrow-right-long text-blue-500 duration-300 group-hover:translate-x-1"></i>
    </div>
    <div v-else @click="() => nextQues()" class="group">
      <span class="pointer-events-none">Next Question</span>
      <i class="fa-solid fa-arrow-right-long duration-300 group-hover:translate-x-1"></i>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../store/index";
const store = useCounterStore();

const resultCountFunc = () => {
  for (let i in store.userResult) {
    if (store.userResult[i] === true) {
      store.resultcount++;
    }
  }
};

const prevQues = () => {
  if (store.currentQuiz > 0) {
    store.currentQuiz--;
  }
};
const nextQues = () => {
  if (store.currentQuiz < 4) {
    store.userResult[store.currentQuiz] = store.randomQuiz[store.currentQuiz].answer === store.singleRadioForm;
  } else if (store.currentQuiz < 8) {
    if (store.randomQuiz[store.currentQuiz].answer.length === store.multipleCheckboxForm.length) {
      store.userResult[store.currentQuiz] = store.randomQuiz[store.currentQuiz].answer.every((val) =>
        store.multipleCheckboxForm.includes(val)
      );
    }
  } else {
    store.userResult[store.currentQuiz] = store.randomQuiz[store.currentQuiz].answer === store.customInpForm;
    console.log(store.randomQuiz[store.currentQuiz].answer === store.customInpForm);
    store.customInpForm = "";
  }

  if (store.currentQuiz < 9) {
    store.currentQuiz++;
    console.log(store.userResult);
  }
};

const finishQues = () => {
  resultCountFunc();
  store.currentQuiz = 0;
  store.isDisabled = false;
  store.randomQuiz = [];
};
</script>
