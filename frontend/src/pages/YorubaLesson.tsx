import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { Navbar } from "../sections/landing/Navbar";
import { Footer } from "../sections/landing/Footer";

const questions = [
  {
    id: 1,
    yoruba: "Ẹ káàrọ̀",
    prompt: "What does this greeting mean?",
    options: ["Good evening", "Good morning", "Thank you"],
    correctAnswer: "Good morning",
    explanation: "Ẹ káàrọ̀ is used to greet someone in the morning.",
  },
  {
    id: 2,
    yoruba: "Ẹ káàsán",
    prompt: "What does this greeting mean?",
    options: ["Good afternoon", "Good night", "Welcome"],
    correctAnswer: "Good afternoon",
    explanation: "Ẹ káàsán is a greeting used in the afternoon.",
  },
  {
    id: 3,
    yoruba: "Ẹ kú alẹ́",
    prompt: "What does this greeting mean?",
    options: ["Good morning", "Good evening", "Goodbye"],
    correctAnswer: "Good evening",
    explanation: "Ẹ kú alẹ́ is used as an evening greeting.",
  },
];

const YorubaLesson = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [lessonStage, setLessonStage] = useState<"learning" | "quiz">(
    "learning",
  );

  const question = questions[currentIndex];
  const isCorrect = selectedAnswer === question.correctAnswer;

  const checkAnswer = () => {
    if (selectedAnswer === null || showFeedback) return;

    if (isCorrect) {
      setScore((previousScore) => previousScore + 1);
    }

    setShowFeedback(true);
  };

  const nextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      setCompleted(true);
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const restartLesson = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCompleted(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-voka-cream text-voka-ink">
      <Navbar />

      <main className="px-4 pb-24 pt-32 sm:px-6 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/learn/yoruba"
            className="inline-flex items-center gap-2 text-sm font-medium text-voka-muted hover:text-voka-green"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Yoruba
          </Link>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-voka-orange">
              Yoruba · Lesson 01
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Everyday Greetings
            </h1>

            <p className="mt-4 text-voka-muted">
              Learn common Yoruba greetings and test your understanding.
            </p>
          </div>

          {lessonStage === "learning" ? (
            <section className="mt-12 rounded-3xl border border-voka-border bg-white p-8 text-center">
              <h2 className="text-4xl font-bold text-voka-green">Ẹ káàrọ̀</h2>

              <p className="mt-4 text-xl font-semibold">Good morning</p>

              <p className="mt-3 text-voka-muted">
                A Yoruba greeting used in the morning.
              </p>

              <button
                type="button"
                onClick={() => setLessonStage("quiz")}
                className="mt-8 rounded-full bg-voka-green px-6 py-3 font-semibold text-white"
              >
                Start Quiz
              </button>
            </section>
          ) : completed ? (
            <section className="mt-12 rounded-3xl border border-voka-border bg-white p-8 text-center sm:p-12">
              <CheckCircle2 className="mx-auto h-14 w-14 text-voka-green" />

              <h2 className="mt-6 text-3xl font-bold">Lesson completed!</h2>

              <p className="mt-4 text-lg text-voka-muted">
                You answered {score} out of {questions.length} questions
                correctly.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={restartLesson}
                  className="rounded-full border border-voka-border px-6 py-3 font-semibold hover:bg-voka-green-light"
                >
                  Try again
                </button>

                <Link
                  to="/learn/yoruba"
                  className="rounded-full bg-voka-green px-6 py-3 font-semibold text-white hover:bg-voka-green-dark"
                >
                  Back to course
                </Link>
              </div>
            </section>
          ) : (
            <section className="mt-12 rounded-3xl border border-voka-border bg-white p-6 sm:p-10">
              <div className="flex items-center justify-between text-sm text-voka-muted">
                <span>
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span>
                  {Math.round((currentIndex / questions.length) * 100)}%
                  complete
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-voka-green-light">
                <div
                  className="h-full rounded-full bg-voka-green transition-all duration-300"
                  style={{
                    width: `${(currentIndex / questions.length) * 100}%`,
                  }}
                />
              </div>

              <div className="mt-10 rounded-2xl bg-voka-green-light p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-voka-green">
                  Yoruba greeting
                </p>

                <h2 className="mt-4 text-4xl font-bold text-voka-green">
                  {question.yoruba}
                </h2>
              </div>

              <h3 className="mt-10 text-xl font-bold">{question.prompt}</h3>

              <div className="mt-6 grid gap-3">
                {question.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    disabled={showFeedback}
                    onClick={() => setSelectedAnswer(option)}
                    className={`rounded-xl border p-4 text-left font-medium transition-colors ${
                      selectedAnswer === option
                        ? "border-voka-green bg-voka-green-light"
                        : "border-voka-border bg-white hover:border-voka-green"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showFeedback && (
                <div
                  role="status"
                  className="mt-6 rounded-xl bg-voka-green-light p-5"
                >
                  <p className="font-bold text-voka-green">
                    {isCorrect ? "Correct!" : "Not quite!"}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-voka-ink">
                    {question.explanation}
                  </p>

                  {!isCorrect && (
                    <p className="mt-2 text-sm font-semibold text-voka-ink">
                      Correct answer: {question.correctAnswer}
                    </p>
                  )}
                </div>
              )}

              <div className="mt-8 flex justify-end">
                {showFeedback ? (
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="inline-flex items-center gap-2 rounded-full bg-voka-green px-6 py-3 font-semibold text-white hover:bg-voka-green-dark"
                  >
                    {currentIndex === questions.length - 1
                      ? "Finish lesson"
                      : "Next question"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={selectedAnswer === null}
                    onClick={checkAnswer}
                    className="rounded-full bg-voka-green px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Check answer
                  </button>
                )}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default YorubaLesson;
