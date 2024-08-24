"use client";
import { useEffect, useState } from "react";
import { quizData } from "@/lib/quizData";

interface SavedAnswer {
  questionId: number;
  selectedChoice: string;
}

export default function Results() {
  const [answers, setAnswers] = useState<SavedAnswer[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const storedState = localStorage.getItem("quizState");
    if (storedState) {
      const { savedAnswers } = JSON.parse(storedState);
      setAnswers(
        savedAnswers.map((answer: any, idx: number) => ({
          questionId: idx + 1, 
          selectedChoice: answer.answer
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (quizData && quizData.length > 0) {
      setQuestions(quizData);
    }
  }, []);

  const getChoices = (postId: number) => {
    const question = questions.find((q) => q.postId === postId);
    if (question) {
      return {
        A: question.options[0],
        B: question.options[1],
        C: question.options[2],
        D: question.options[3],
        correctChoice: question.options[question.correctAnswers[0]], 
        correctChoiceLetter: ["A", "B", "C", "D"][question.correctAnswers[0]] 
      };
    }
    return null;
  };

  const handleClearResults = () => {
    localStorage.removeItem("quizState");
    setAnswers([]);
    alert("Sonuçlar başarıyla silindi.");
  };

  if (answers.length<1) {
    return <div className="w-full min-h-screen flex items-center justify-center bg-gray-300 text-red-700 font-bold">Sonuç Bulunamadı...</div>; 
  }
  return (
    <div className="p-6 max-w-full mx-auto px-[5%] bg-gray-300 rounded-xl shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Sonuçlar</h1>
      <div className="w-full flex justify-end">
      <button 
        onClick={handleClearResults} 
        className="mb-4 p-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Sonuçları Sil
      </button>
      </div>
     
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-200 border-b border-gray-300">
          <tr>
            <th className="p-3 text-left">Soru</th>
            <th className="p-3 text-left">Şıklar</th>
            <th className="p-3 text-left">Verilen Cevap</th>
            <th className="p-3 text-left">Doğru Cevap</th>
            <th className="p-3 text-left">Sonuç</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((answer, index) => {
            const choices = getChoices(answer.questionId);
            if (!choices) return null;

            const isCorrect = answer.selectedChoice === choices.correctChoice;
            const selectedChoiceLetter = ["A", "B", "C", "D"].find(
              (letter) => choices[letter as keyof typeof choices] === answer.selectedChoice
            ) || "";

            return (
              <tr key={index} className="border-b border-gray-300">
                <td className="p-3 min-w-[100px]">{`Soru ${answer.questionId}`}</td>
                <td className="p-3 flex flex-col gap-y-4">
                  <div>A: {choices.A}</div>
                  <div>B: {choices.B}</div>
                  <div>C: {choices.C}</div>
                  <div>D: {choices.D}</div>
                </td>
                <td className={`p-3 font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {`${answer.selectedChoice || "Cevaplanmamış Soru"}`}
                </td>
                <td className="p-3">{`${choices.correctChoiceLetter}: ${choices.correctChoice}`}</td>
                <td className={`p-3 font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {isCorrect ? "Doğru" : "Yanlış"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
