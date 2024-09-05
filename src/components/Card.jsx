import React, { useState } from "react";

const data = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Wordsworth",
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    id: 4,
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Rhinoceros"],
    correctAnswer: "Blue Whale",
  },
  {
    id: 5,
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1915", "1920"],
    correctAnswer: "1912",
  },
];

const Card = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  console.log(selectedOption);

  
  console.log(score);
  
  return (
    <div>
      {currentQuestion < data.length && (
        <div className="p-4 flex gap-4 flex-col">
          <h2 className="text-start">{data[currentQuestion].question}</h2>
          <ul className="text-start">
            {data[currentQuestion].options.map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  onChange={(e) => {
                    setSelectedOption(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                {option}
              </li>
            ))}
          </ul>
          <button
            className="px-4 py-1  bg-green-400 hover:bg-green-500 text-white "
            disabled={selectedOption === ""}
            onClick={() => {
              if (currentQuestion < data.length) {
                if (selectedOption === data[currentQuestion].correctAnswer) {
                  setScore((prev) => prev + 1);
                }
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption("")
              } else {
                alert("Congratulations! You've completed the quiz.");
                setCurrentQuestion(0);
              }
            }}
          >
            {
              currentQuestion < data.length? "Next Question" : "Submit"
            }
          </button>
        </div>
      )}
      {
        currentQuestion === data.length && (
          <h2>Your final score is {score}/{data.length}</h2>
        )
      }
    </div>
  );
};

export default Card;
