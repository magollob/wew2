"use client"

import { useState, useEffect } from "react"
import QuizCover from "@/components/quiz-cover"
import Quiz from "@/components/quiz"
import LoadingPage from "@/components/loading-page"
import SalesPage from "@/components/sales-page"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"cover" | "quiz" | "loading" | "sales">("cover")

  const handleCoverComplete = () => {
    setCurrentPage("quiz")
  }

  const handleQuizComplete = () => {
    setCurrentPage("loading")
  }

  const handleLoadingComplete = () => {
    setCurrentPage("sales")
  }

  useEffect(() => {
    if (currentPage === "sales") {
      const audio = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bell-ring-390294-I7JMlNYntECkwCWNNoiPIerdHpG9I8.mp3")
      audio.volume = 0.5
      audio.play().catch((error) => {
        console.log("Erro ao reproduzir áudio:", error)
      })
    }
  }, [currentPage])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      {currentPage === "cover" && <QuizCover onComplete={handleCoverComplete} />}
      {currentPage === "quiz" && <Quiz onComplete={handleQuizComplete} />}
      {currentPage === "loading" && <LoadingPage onComplete={handleLoadingComplete} />}
      {currentPage === "sales" && <SalesPage />}
    </div>
  )
}
