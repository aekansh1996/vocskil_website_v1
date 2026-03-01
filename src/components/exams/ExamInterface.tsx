"use client";

import { useState, useEffect } from "react";
import ProctoringComponent from "@/components/exams/ProctoringComponent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, AlertTriangle } from "lucide-react";

interface Question {
    id: string;
    text: string;
    type: string;
    options: string[]; // Already parsed in real use case
}

interface Exam {
    id: string;
    title: string;
    duration?: number; // Minutes
    questions: Question[];
}

export default function ExamInterface({ exam }: { exam: Exam }) {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [finished, setFinished] = useState(false);
    const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null);
    const [timeLeft, setTimeLeft] = useState<number | null>(exam.duration ? exam.duration * 60 : null);
    const [studentInfo, setStudentInfo] = useState<any>(null);

    useEffect(() => {
        const info = localStorage.getItem(`exam_intake_${exam.id}`);
        if (info) setStudentInfo(JSON.parse(info));
    }, [exam.id]);

    useEffect(() => {
        if (timeLeft === null || finished) return;
        if (timeLeft === 0) {
            handleSubmit();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev !== null ? prev - 1 : null));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, finished]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const currentQuestion = exam.questions[currentQuestionIndex];

    const handleOptionSelect = (option: string) => {
        setAnswers((prev) => ({
            ...prev,
            [currentQuestion.id]: option,
        }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch(`/api/exams/${exam.id}/submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    answers,
                    studentInfo,
                    proctoringData: {
                        autoSubmitted: timeLeft === 0
                    }
                }),
            });
            const data = await response.json();
            setResult(data);
            setFinished(true);
        } catch (error) {
            console.error("Submission failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (finished && result) {
        return (
            <div className="max-w-2xl mx-auto py-12 px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Exam Completed!</h2>
                <div className={`p-6 rounded-xl border ${result.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <p className="text-xl mb-2">Your Score: <span className="font-bold">{result.score}%</span></p>
                    <p className={`text-2xl font-bold ${result.passed ? 'text-green-600' : 'text-red-600'}`}>
                        {result.passed ? "CONGRATULATIONS! You Passed." : "Better luck next time."}
                    </p>
                    {result.passed && (
                        <p className="mt-4 text-gray-600 text-sm">A certificate has been sent to your email.</p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
            <ProctoringComponent />

            <div className="max-w-3xl mx-auto">
                <div className="mb-8 flex justify-between items-end">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            {exam.duration && (
                                <div className={`px-3 py-1 rounded-full text-xs font-black flex items-center gap-2 border shadow-sm ${timeLeft !== null && timeLeft < 60 ? "bg-red-50 text-red-600 border-red-200 animate-pulse" : "bg-indigo-50 text-indigo-600 border-indigo-200"
                                    }`}>
                                    <Clock className="h-3 w-3" />
                                    {timeLeft !== null ? formatTime(timeLeft) : "NO LIMIT"}
                                </div>
                            )}
                            {studentInfo && (
                                <div className="px-3 py-1 bg-slate-100 text-slate-500 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                    ID: {Object.values(studentInfo)[0] as string}
                                </div>
                            )}
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{exam.title}</h1>
                        <p className="mt-2 text-gray-500 text-sm font-medium">Question {currentQuestionIndex + 1} of {exam.questions.length}</p>
                    </div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-600 transition-all duration-300"
                            style={{ width: `${((currentQuestionIndex + 1) / exam.questions.length) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
                            {currentQuestion.text}
                        </h2>

                        <div className="space-y-6">
                            {currentQuestion.type !== "SHORT_ANSWER" ? (
                                <div className="space-y-3">
                                    {currentQuestion.options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionSelect(option)}
                                            className={`w-full p-4 text-left rounded-xl transition-all duration-200 border-2 ${answers[currentQuestion.id] === option
                                                ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm"
                                                : "bg-white border-gray-100 hover:border-gray-300 text-gray-700"
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${answers[currentQuestion.id] === option ? "border-blue-500 bg-blue-500" : "border-gray-300"
                                                    }`}>
                                                    {answers[currentQuestion.id] === option && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                                                </div>
                                                <span className="font-medium">{option}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Your Answer</label>
                                    <textarea
                                        value={answers[currentQuestion.id] || ""}
                                        onChange={(e) => handleOptionSelect(e.target.value)}
                                        className="w-full p-5 rounded-2xl border-2 border-slate-100 focus:border-blue-500 focus:ring-0 outline-none min-h-[120px] font-medium text-slate-700 shadow-inner bg-slate-50/30"
                                        placeholder="Type your answer here..."
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 flex justify-between items-center border-t border-gray-200">
                        <button
                            onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                            disabled={currentQuestionIndex === 0}
                            className="px-6 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-200 disabled:opacity-50 transition-colors"
                        >
                            Previous
                        </button>

                        {currentQuestionIndex === exam.questions.length - 1 ? (
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting || !answers[currentQuestion.id]}
                                className="px-8 py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 transition-all shadow-md active:scale-95"
                            >
                                {isSubmitting ? "Submitting..." : "Finish Exam"}
                            </button>
                        ) : (
                            <button
                                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                                disabled={!answers[currentQuestion.id]}
                                className="px-8 py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 transition-all shadow-md active:scale-95"
                            >
                                Next Question
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
