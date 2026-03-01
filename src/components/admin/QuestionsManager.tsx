"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Trash2, CheckCircle2 } from "lucide-react";

export default function QuestionsManager({ examId }: { examId: string }) {
    const [questions, setQuestions] = useState<any[]>([]);
    const [newQuestion, setNewQuestion] = useState({
        text: "",
        type: "MCQ", // MCQ, TRUE_FALSE, SHORT_ANSWER
        options: ["", "", "", ""],
        correctAnswer: "",
        correctOptionIndex: -1 // Used for MCQ selection
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        const res = await fetch(`/api/admin/exams/${examId}/questions`, { cache: "no-store" });
        const data = await res.json();
        setQuestions(data);
        setIsLoading(false);
    };

    const handleAddQuestion = async (e: React.FormEvent) => {
        e.preventDefault();

        let finalCorrectAnswer = newQuestion.correctAnswer;
        if (newQuestion.type === "MCQ") {
            if (newQuestion.correctOptionIndex === -1) return alert("Please select a correct option!");
            finalCorrectAnswer = newQuestion.options[newQuestion.correctOptionIndex];
        }

        if (!finalCorrectAnswer) return alert("Please provide a correct answer!");

        const payload = {
            text: newQuestion.text,
            type: newQuestion.type,
            options: newQuestion.type === "SHORT_ANSWER" ? null : newQuestion.options,
            correctAnswer: finalCorrectAnswer
        };

        const res = await fetch(`/api/admin/exams/${examId}/questions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            fetchQuestions();
            setNewQuestion({
                text: "",
                type: "MCQ",
                options: ["", "", "", ""],
                correctAnswer: "",
                correctOptionIndex: -1
            });
            // Optional: toast or light feedback
        } else {
            const err = await res.json();
            alert(`Error adding question: ${err.error || "Unknown error"}`);
        }
    };

    const handleDelete = async (questionId: string) => {
        if (!confirm("Are you sure you want to delete this question?")) return;

        const res = await fetch(`/api/admin/exams/${examId}/questions?questionId=${questionId}`, {
            method: "DELETE",
        });

        if (res.ok) {
            fetchQuestions();
        } else {
            alert("Failed to delete question");
        }
    };

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <PlusCircle className="h-5 w-5 text-indigo-600" />
                        Add New Question
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAddQuestion} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Question Type</label>
                                <select
                                    value={newQuestion.type}
                                    onChange={(e) => {
                                        const type = e.target.value;
                                        let options = ["", "", "", ""];
                                        let correctAnswer = "";
                                        let correctOptionIndex = -1;
                                        if (type === "TRUE_FALSE") {
                                            options = ["True", "False"];
                                        } else if (type === "SHORT_ANSWER") {
                                            options = [];
                                        }
                                        setNewQuestion({ ...newQuestion, type, options, correctAnswer, correctOptionIndex });
                                    }}
                                    className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white font-medium text-sm"
                                >
                                    <option value="MCQ">Multiple Choice (4 Options)</option>
                                    <option value="TRUE_FALSE">True / False</option>
                                    <option value="SHORT_ANSWER">Short Answer / Fill in Blank</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Question Text</label>
                                <input
                                    type="text"
                                    value={newQuestion.text}
                                    onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
                                    className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                                    placeholder="Enter your question here..."
                                    required
                                />
                            </div>
                        </div>

                        {newQuestion.type === "MCQ" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {newQuestion.options.map((option, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <div className="flex justify-between items-center px-1">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Option {idx + 1}</label>
                                            <button
                                                type="button"
                                                onClick={() => setNewQuestion({ ...newQuestion, correctOptionIndex: idx })}
                                                className={`text-[10px] px-2 py-0.5 rounded font-bold transition-all ${newQuestion.correctOptionIndex === idx
                                                    ? "bg-green-500 text-white"
                                                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                                                    }`}
                                            >
                                                {newQuestion.correctOptionIndex === idx ? "CORRECT" : "SET CORRECT"}
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            value={option}
                                            onChange={(e) => {
                                                const newOptions = [...newQuestion.options];
                                                newOptions[idx] = e.target.value;
                                                setNewQuestion({ ...newQuestion, options: newOptions });
                                            }}
                                            className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                                            placeholder={`Option ${idx + 1}`}
                                            required
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {newQuestion.type === "TRUE_FALSE" && (
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                <label className="text-sm font-bold text-slate-700 block mb-4">Select Correct Answer</label>
                                <div className="flex gap-4">
                                    {["True", "False"].map((choice) => (
                                        <button
                                            key={choice}
                                            type="button"
                                            onClick={() => setNewQuestion({ ...newQuestion, correctAnswer: choice })}
                                            className={`flex-1 py-3 rounded-lg font-bold border-2 transition-all ${newQuestion.correctAnswer === choice
                                                ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                                                : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300"
                                                }`}
                                        >
                                            {choice}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {newQuestion.type === "SHORT_ANSWER" && (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Required Answer (Case-insensitive)</label>
                                <input
                                    type="text"
                                    value={newQuestion.correctAnswer}
                                    onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
                                    className="w-full p-4 rounded-lg border-2 border-dashed border-slate-300 focus:border-indigo-500 focus:ring-0 outline-none font-medium"
                                    placeholder="Enter the exact answer students must provide..."
                                    required
                                />
                                <p className="text-xs text-slate-500">Note: Grading will be based on an exact (but case-insensitive) match.</p>
                            </div>
                        )}

                        <Button type="submit" className="w-full py-4 font-bold bg-indigo-600 hover:bg-indigo-700 shadow-md">
                            Add Question to Exam
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 px-1">Questions List ({questions.length})</h3>
                {questions.map((q, idx) => (
                    <Card key={q.id} className="border-l-4 border-l-indigo-500 overflow-hidden">
                        <CardContent className="p-6">
                            <div className="flex justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 uppercase tracking-tighter">
                                            {q.type}
                                        </span>
                                    </div>
                                    <p className="font-bold text-slate-800 text-lg mb-4">{idx + 1}. {q.text}</p>

                                    {q.type !== "SHORT_ANSWER" ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {q.options.map((opt: string, i: number) => (
                                                <div key={i} className={`p-3 rounded-lg text-sm flex items-center gap-2 ${opt === q.correctAnswer
                                                    ? "bg-green-50 text-green-700 border border-green-200 font-semibold"
                                                    : "bg-slate-50 text-slate-600 border border-transparent"
                                                    }`}>
                                                    {opt === q.correctAnswer && <CheckCircle2 className="h-4 w-4" />}
                                                    {opt}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="p-3 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-sm font-medium">
                                            Correct Answer: <span className="font-bold underline">{q.correctAnswer}</span>
                                        </div>
                                    )}
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(q.id)}
                                    className="text-slate-400 hover:text-red-500 hover:bg-red-50"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
