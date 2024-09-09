"use client"
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { quizData } from "@/lib/quizData";
import { useRouter } from "next/navigation";

interface SavedAnswer {
  questionId: number;
  selectedChoice: string;
  timeSpent: string
}

export default function Results() {
  const router = useRouter();
  const [answers, setAnswers] = useState<SavedAnswer[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const storedState = sessionStorage.getItem("quizState");
    if (storedState) {
      const { savedAnswers } = JSON.parse(storedState);
      setAnswers(savedAnswers.map((answer: any) => ({
        questionId: answer.questionId,
        selectedChoice: answer.answer,
        timeSpent: answer.timeSpent
      })));
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
        correctChoices: question.correctAnswers.map(
          (index: number) => ({ choice: ["A", "B", "C", "D"][index], option: question.options[index] })
        )
      };
    }
    return null;
  };

  const handleClearResults = () => {
    sessionStorage.removeItem("quizState");
    setAnswers([]);
    alert("Sonuçlar başarıyla silindi.");
  };

  if (answers.length < 1) {
    return <div className="w-full min-h-screen flex flex-col gap-y-2 items-center justify-center bg-gray-300 text-red-700 font-bold">
      <div>Sonuç Bulunamadı...</div>
      <button
        onClick={() => router.push("/")}
        className="py-2 px-4 bg-red-600 text-white rounded"
      >
        Home
      </button>
    </div>;
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
            <th className="p-3 text-left">Doğru Cevap(lar)</th>
            <th className="p-3 text-left">Sonuç</th>
            <th className="p-3 text-left">Geçirilen Süre</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((answer, index) => {
            const choices = getChoices(answer.questionId);
            if (!choices) return null;

            const isCorrect = choices.correctChoices.some((choice: { option: string; }) => choice.option === answer.selectedChoice);

            return (
              <tr key={index} className="border-b border-gray-300">
                <td className="p-3 min-w-[100px]">{`Soru ${index + 1}`}</td>
                <td className="p-3 flex flex-col gap-y-4">
                  <div>A: {choices.A}</div>
                  <div>B: {choices.B}</div>
                  <div>C: {choices.C}</div>
                  <div>D: {choices.D}</div>
                </td>
                <td className={`p-3 font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {`${answer.selectedChoice || "Cevaplanmamış Soru"}`}
                </td>
                <td className="p-3">
                  {choices.correctChoices.map(
                    (choice: { choice: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; option: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, i: Key | null | undefined) =>
                      <div key={i}>{choice.choice}: {choice.option}</div>
                  )}
                </td>
                <td className={`p-3 font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {isCorrect ? "Doğru" : "Yanlış"}
                </td>
                <td className="p-3 text-center">{answer.timeSpent}s</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
