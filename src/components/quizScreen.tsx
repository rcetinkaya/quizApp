"use client"
import React, { useState, useEffect, useCallback } from "react";
import { quizData } from "@/lib/quizData";
import { useRouter } from "next/navigation";


type QuizQuestion = {
  postId: number;
  title: string;
  content: string;
  options: string[];
  correctAnswers: number[];
  wrongAnswers: number[];
};

export default function Quiz() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(30);
  const [canAnswer, setCanAnswer] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Array<{ questionId: number; answer: string; timeSpent: number }>>([]);
  const [questionPool, setQuestionPool] = useState<QuizQuestion[]>([]);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    const storedState = localStorage.getItem("quizState");
    if (storedState) {
      const { index, time, savedAnswers, pool, started } = JSON.parse(storedState) as {
        index: number;
        time: number;
        savedAnswers: { questionId: number; answer: string; timeSpent: number }[];
        pool: QuizQuestion[];
        started: boolean;
      };
      setCurrentQuestionIndex(index);
      setTimer(time);
      setAnswers(savedAnswers);
      setQuestionPool(pool);
      setHasStarted(started);
      setCanAnswer(time <= 20);
    } else {
      initializeQuiz();
    }
  }, []);

  const handleAnswerClick = (answer: string) => {
    if (!canAnswer) return;
  
    const updatedAnswers = answers.map((item) =>
      item.questionId === questionPool[currentQuestionIndex]?.postId
        ? { ...item, answer, timeSpent: 30 - timer }
        : item
    );
  
    if (!updatedAnswers.find((item) => item.questionId === questionPool[currentQuestionIndex]?.postId )) {
      updatedAnswers.push({
        questionId: Number(questionPool[currentQuestionIndex]?.postId),
        answer,
        timeSpent: 30 - timer,
      });
    }
  
    setAnswers(updatedAnswers);
    localStorage.setItem("quizState", JSON.stringify({ index: currentQuestionIndex, time: timer, savedAnswers: updatedAnswers, pool: questionPool, started: hasStarted }));
    setSelectedAnswer(answer);
  };
  
  const handleNextQuestion = useCallback(() => {
    const updatedAnswers = answers.map((item) =>
      item.questionId === questionPool[currentQuestionIndex]?.postId
        ? { ...item, answer: selectedAnswer ?? '', timeSpent: 30 - timer }
        : item
    );
  
    if (!updatedAnswers.find((item) => item.questionId === questionPool[currentQuestionIndex]?.postId)) {
      updatedAnswers.push({
        questionId: Number(questionPool[currentQuestionIndex]?.postId),
        answer: selectedAnswer ?? '',
        timeSpent: 30 - timer,
      });
    }
  
    setAnswers(updatedAnswers);
    localStorage.setItem("quizState", JSON.stringify({ index: currentQuestionIndex, time: timer, savedAnswers: updatedAnswers, pool: questionPool, started: hasStarted }));
  
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questionPool.length) {
      setCurrentQuestionIndex(nextIndex);
      setTimer(30);
      setCanAnswer(false);
      setSelectedAnswer(null);
      localStorage.setItem("quizState", JSON.stringify({ index: nextIndex, time: 30, savedAnswers: updatedAnswers, pool: questionPool, started: hasStarted }));
    } else {
      router.push("/results");
    }
  }, [answers, currentQuestionIndex, hasStarted, questionPool, router, selectedAnswer, timer]);


  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prev) => {
          const newTime = prev - 1;
          localStorage.setItem(
            "quizState",
            JSON.stringify({ index: currentQuestionIndex, time: newTime, savedAnswers: answers, pool: questionPool, started: hasStarted })
          );
          return newTime;
        });
      }, 1000);

      if (timer === 20) {
        setCanAnswer(true);
      }

      return () => clearInterval(intervalId);
    } else {
      handleNextQuestion();
    }
  }, [timer, currentQuestionIndex, answers, questionPool, hasStarted, handleNextQuestion]);

  const initializeQuiz = () => {
    const shuffledQuestions = [...quizData]
      .map((data) => ({
        ...data,
        postId: data.postId  
      }))
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
      
    setQuestionPool(shuffledQuestions);
    setHasStarted(true);
    localStorage.setItem("quizState", JSON.stringify({ index: 0, time: 30, savedAnswers: [], pool: shuffledQuestions, started: true }));
  };

  
  const generateChoices = (question: QuizQuestion) => {
    return question.options.map((option, idx) => ({
      label: String.fromCharCode(65 + idx), // A, B, C, D
      value: option
    }));
  };

  const currentQuestion = questionPool[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="p-6 max-w-md min-w-[300px] min-h-[400px] mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl mb-4">{currentQuestionIndex+1 + "-) "}{currentQuestion.title}</h1>
      <div className="space-y-4">
        {generateChoices(currentQuestion).map((choice) => (
          <button
            key={choice.label}
            className={`block w-full py-2 px-4 rounded text-white ${canAnswer ? 'bg-blue-500' : 'bg-gray-500 cursor-not-allowed'} ${
              selectedAnswer === choice.value ? 'bg-green-500' : ''
            }`}
            onClick={() => handleAnswerClick(choice.value)}
            disabled={!canAnswer}
          >
            {choice.label}: {choice.value}
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center min-h-[40px]">
        <p>Kalan Süre: {timer} saniye</p>
        {selectedAnswer && (
          <button
            onClick={handleNextQuestion}
            className="py-2 px-4 bg-purple-500 text-white rounded"
          >
            {currentQuestionIndex < questionPool.length - 1 ? 'İleri' : 'Sonuçları Gör'}
          </button>
        )}
      </div>
    </div>
  );
}
