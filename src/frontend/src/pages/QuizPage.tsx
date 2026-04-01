import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuizQuestions, useSaveQuizResult } from "@/hooks/useQueries";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function QuizPage() {
  const navigate = useNavigate();
  const { data: questions, isLoading } = useQuizQuestions();
  const saveResult = useSaveQuizResult();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    tierId?: bigint;
    roadmapPhase?: string;
    score: number;
  } | null>(null);

  const activeQuestions = questions?.filter((q) => q.isActive) || [];
  const totalQuestions = activeQuestions.length;
  const progress =
    totalQuestions > 0 ? ((currentQuestion + 1) / totalQuestions) * 100 : 0;

  const handleAnswer = (answerIndex: number) => {
    setAnswers({ ...answers, [currentQuestion]: answerIndex });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = async () => {
    let score = 0;
    let recommendedTierId: bigint | undefined;
    let roadmapPhase: string | undefined;

    activeQuestions.forEach((question, index) => {
      const userAnswer = answers[index];
      if (
        userAnswer !== undefined &&
        userAnswer === Number(question.correctAnswerIndex)
      ) {
        score++;
      }

      if (question.recommendedTierId) {
        recommendedTierId = question.recommendedTierId;
      }
      if (question.roadmapSuggestion) {
        roadmapPhase = question.roadmapSuggestion;
      }
    });

    const result = {
      tierId: recommendedTierId,
      roadmapPhase,
      score,
    };

    setRecommendation(result);
    setShowResults(true);

    try {
      await saveResult.mutateAsync({
        id: BigInt(Date.now()),
        score: BigInt(score),
        tierRecommendation: recommendedTierId || null,
        roadmapPhaseRecommendation: null,
      });
    } catch (error) {
      console.error("Failed to save quiz result:", error);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setRecommendation(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="container max-w-3xl">
          <Skeleton className="h-12 w-3/4 mx-auto mb-8" />
          <Card className="shadow-soft-lg">
            <CardHeader>
              <Skeleton className="h-8 w-full mb-4" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!activeQuestions || activeQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="container max-w-3xl text-center">
          <Brain className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Quiz Not Available</h2>
          <p className="text-muted-foreground mb-6">
            The marketing strategy quiz is currently being prepared. Check back
            soon!
          </p>
          <Button
            onClick={() => navigate({ to: "/" })}
            className="bg-brand-blue hover:bg-brand-blue-dark text-white"
          >
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  if (showResults && recommendation) {
    return (
      <div className="min-h-screen bg-background">
        <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-background to-brand-blue-light/5">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <CheckCircle2 className="h-16 w-16 text-brand-blue mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
              <p className="text-lg text-muted-foreground">
                Here are your personalized recommendations based on your
                answers.
              </p>
            </div>

            <Card className="shadow-soft-lg mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Your Score</CardTitle>
                <div className="text-5xl font-bold text-brand-blue mt-4">
                  {recommendation.score} / {totalQuestions}
                </div>
              </CardHeader>
            </Card>

            {recommendation.roadmapPhase && (
              <Card className="shadow-soft-lg mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand-blue" />
                    Recommended Learning Path
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Based on your responses, we recommend starting with:
                  </p>
                  <div className="bg-brand-blue/10 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-brand-blue text-lg">
                      {recommendation.roadmapPhase}
                    </p>
                  </div>
                  <Button
                    onClick={() => navigate({ to: "/roadmap" })}
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white"
                  >
                    View Roadmap
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card className="shadow-soft-lg mb-8">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Ready to take your marketing to the next level? Here's what we
                  recommend:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Explore our educational content and learning roadmap
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Review our pricing packages to find the right fit
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Schedule a consultation to discuss your specific needs
                    </span>
                  </li>
                </ul>
                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={() => navigate({ to: "/pricing" })}
                    className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-white"
                  >
                    View Pricing
                  </Button>
                  <Button
                    onClick={() => navigate({ to: "/contact" })}
                    variant="outline"
                    className="flex-1 border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                onClick={resetQuiz}
                variant="ghost"
                className="text-brand-blue"
              >
                Retake Quiz
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const currentQ = activeQuestions[currentQuestion];
  const hasAnswer = answers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-background to-brand-blue-light/5">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              Marketing Strategy Quiz
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Find Your Perfect Strategy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Answer a few questions to get personalized recommendations for
              your marketing journey.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              <span className="text-sm font-medium text-brand-blue">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="shadow-soft-lg">
            <CardHeader>
              <CardTitle className="text-2xl leading-relaxed">
                {currentQ.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup
                value={answers[currentQuestion]?.toString()}
                onValueChange={(value) => handleAnswer(Number.parseInt(value))}
              >
                {currentQ.answers.map((answer, index) => (
                  <button
                    type="button"
                    // biome-ignore lint/suspicious/noArrayIndexKey: static list without stable id
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer w-full text-left ${
                      answers[currentQuestion] === index
                        ? "border-brand-blue bg-brand-blue/5"
                        : "border-border hover:border-brand-blue/50 hover:bg-accent"
                    }`}
                    onClick={() => handleAnswer(index)}
                  >
                    <RadioGroupItem
                      value={index.toString()}
                      id={`answer-${index}`}
                    />
                    <Label
                      htmlFor={`answer-${index}`}
                      className="flex-1 cursor-pointer"
                    >
                      {answer}
                    </Label>
                  </button>
                ))}
              </RadioGroup>

              <div className="flex gap-4 pt-6">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="flex-1"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!hasAnswer}
                  className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-white"
                >
                  {currentQuestion === totalQuestions - 1
                    ? "See Results"
                    : "Next"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
