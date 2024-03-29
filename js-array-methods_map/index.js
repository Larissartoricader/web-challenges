console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((question) => {
  return question.answer.toLowerCase();
});

console.log(lowerCaseAnswers);

// ['as often as you like.', ...]

const questionsAndAnswersTogether = cards.map((questionAnswer) => {
  const questionsAndAnswersTogether = `question: "${questionAnswer.question}", answer: " ${questionAnswer.answer}"`;
  return questionsAndAnswersTogether;
});

console.log(questionsAndAnswersTogether);

// ["How often can I use <header>? - As often as you like.", ...]

// export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };

// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
