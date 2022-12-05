import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      isAuthenticated: false,
      user: { name: "Bekzod", email: "bek@gmail.com", password: "bekzod8888" }, // default user: {}
      userList: [
        { name: "Bekzod", email: "bek@gmail.com", password: "bekzod8888" },
        { name: "Valisher", email: "valisher@gmail.com", password: "valisher8888" },
        { name: "Eldor", email: "eldor@gmail.com", password: "eldor8888" },
        { name: "Aziz", email: "aziz@gmail.com", password: "aziz8888" },
      ],
      studentsTable: [
        { name: "Bekzod", number: "944455537", course: "web development" },
        { name: "Eldor", number: "887471447", course: "Tourism" },
        { name: "Siroj", number: "933456543", course: "Tecnikal Enginering" },
        { name: "Aziz", number: "900090669", course: "Avia serce" },
      ],
      quizTest: {
        single: [
          { question: "lorem1", answer: "ans1", variant: ["ans1", "ans2", "ans3", "ans4"], questionType: "single" },
          { question: "lorem2", answer: "ans2", variant: ["ans1", "ans2", "ans3", "ans4"], questionType: "single" },
          { question: "lorem3", answer: "ans3", variant: ["ans1", "ans2", "ans3", "ans4"], questionType: "single" },
          { question: "lorem4", answer: "ans4", variant: ["ans1", "ans2", "ans3", "ans4"], questionType: "single" },
        ],
        multiple: [
          {
            question: "loremMulti12",
            answer: ["answer1", "answer2"],
            variant: ["answer1", "answer2", "answer3", "answer4"],
            questionType: "multiple",
          },
          {
            question: "loremMulti23",
            answer: ["answer2", "answer3"],
            variant: ["answer1", "answer2", "answer3", "answer4"],
            questionType: "multiple",
          },
          {
            question: "loremMulti34",
            answer: ["answer3", "answer4"],
            variant: ["answer1", "answer2", "answer3", "answer4"],
            questionType: "multiple",
          },
          {
            question: "loremMulti14",
            answer: ["answer1", "answer4"],
            variant: ["answer1", "answer2", "answer3", "answer4"],
            questionType: "multiple",
          },
          {
            question: "loremMulti24",
            answer: ["answer2", "answer4"],
            variant: ["answer1", "answer2", "answer3", "answer4"],
            questionType: "multiple",
          },
        ],
        customer: [
          { question: "loremWritten1", answer: "written1", variant: [], questionType: "custom" },
          { question: "loremWritten2", answer: "written2", variant: [], questionType: "custom" },
          { question: "loremWritten3", answer: "written3", variant: [], questionType: "custom" },
          { question: "loremWritten4", answer: "written4", variant: [], questionType: "custom" },
          { question: "loremWritten5", answer: "written5", variant: [], questionType: "custom" },
        ],
      },
      randomQuiz: [
        { question: "lorem1", answer: "ans1", variant: ["ans1", "ans2", "ans3", "ans4"], questionType: "single" },
        { question: "lorem2", answer: "ans2", variant: ["ans1", "ans2", "ans3", "ans4"], questionType: "single" },
        { question: "lorem3", answer: "ans3", variant: ["ans1", "ans2", "ans3", "ans4"], questionType: "single" },
        { question: "lorem4", answer: "ans4", variant: ["ans1", "ans2", "ans3", "ans4"], questionType: "single" },
        {
          question: "loremMulti12",
          answer: ["answer1", "answer2"],
          variant: ["answer1", "answer2", "answer3", "answer4"],
          questionType: "multiple",
        },
        {
          question: "loremMulti23",
          answer: ["answer2", "answer3"],
          variant: ["answer1", "answer2", "answer3", "answer4"],
          questionType: "multiple",
        },
        {
          question: "loremMulti34",
          answer: ["answer3", "answer4"],
          variant: ["answer1", "answer2", "answer3", "answer4"],
          questionType: "multiple",
        },
        {
          question: "loremMulti14",
          answer: ["answer1", "answer4"],
          variant: ["answer1", "answer2", "answer3", "answer4"],
          questionType: "multiple",
        },
        { question: "loremWritten1", answer: "written1", variant: [], questionType: "custom" },
        { question: "loremWritten2", answer: "written2", variant: [], questionType: "custom" },
      ], // default randomQuiz: []
      currentQuiz: 0,
      isDisabled: true, // default is false

      isActiveModal: false,
      modalData: { title: "", data: {} },
      delBoolean: false,

      singleRadioForm: "",
      multipleCheckboxForm: [],
      customInpForm: "",
      userResult: [false, false, false, false, false, false, false, false, false, false],
      resultcount: 0,
    };
  },
  persist: true,
});
