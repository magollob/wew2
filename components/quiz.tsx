"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuizProps {
  onComplete: () => void
}

const questions = [
  {
    id: 1,
    question: "Fabiana",
    options: [],
    isIntroduction: true,
  },
  {
    id: 2,
    question: "Promocional",
    options: [],
    isPromotional: true,
  },
  {
    id: 3,
    question: "Carrossel de Doces",
    options: [],
    isCarousel: true,
  },
]

export default function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const sweetImages = [
    {
      src: "/images/doces/doce1.jpg",
      alt: "Copinhos de sobremesa em camadas com chocolate e creme",
    },
    {
      src: "/images/doces/doce2.jpg",
      alt: "Cake pops rosa com laços dourados",
    },
    {
      src: "/images/doces/doce3.jpg",
      alt: "Doces vermelhos em formato de coração com recheio",
    },
    {
      src: "/images/doces/doce4.jpg",
      alt: "Doces amarelos brilhantes em formato de morango",
    },
    {
      src: "/images/doces/doce5.jpg",
      alt: "Bolo elegante com Kit Kat e trufas",
    },
    {
      src: "/images/doces/doce6.jpg",
      alt: "Bolos em camadas gourmet com diferentes coberturas",
    },
  ]

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % sweetImages.length)
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + sweetImages.length) % sweetImages.length)
    }
  }

  useEffect(() => {
    if (questions[currentQuestion]?.isCarousel) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sweetImages.length)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [currentQuestion, sweetImages.length])

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleIntroductionComplete = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const handlePromotionalComplete = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleCarouselComplete = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onComplete()
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const currentQ = questions[currentQuestion]

  if (currentQ.isCarousel) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#F5F1E8" }}>
        {/* Logo no topo */}
        <div className="pt-8 pb-2 text-center">
          <div className="flex flex-col items-center">
            <img
              src="/images/design-mode/Logopng.jpg.jpeg"
              alt="Confeitaria da Fabi"
              className="w-16 h-16 rounded-full mb-2"
            />
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="px-6 mb-8 mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: "#fd7ab1" }}
            />
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="px-6 flex-1">
          <div className="max-w-sm mx-auto">
            {/* Headline */}
            <h2 className="text-xl font-bold text-center mb-8 text-gray-800 leading-tight">
              Meu segredo é fazer doces que só de olhar dá vontade de comprar ❤️
            </h2>

            <div className="mb-8">
              <div
                className="overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {sweetImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex justify-center">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className={`rounded-lg shadow-lg max-w-full h-auto transition-transform duration-1000 ease-in-out ${
                          index === currentSlide ? "scale-100 rotate-0" : "scale-95 rotate-1"
                        }`}
                        style={{
                          transform:
                            index === currentSlide
                              ? "scale(1) rotate(0deg)"
                              : `scale(0.95) rotate(${index % 2 === 0 ? "2deg" : "-2deg"})`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Indicadores de slide */}
              <div className="flex justify-center mt-4 space-x-2">
                {sweetImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-gray-300" : "bg-gray-300"
                    }`}
                    style={index === currentSlide ? { backgroundColor: "#fd7ab1" } : {}}
                  />
                ))}
              </div>
            </div>

            <div className="mb-8 text-gray-800 leading-relaxed">
              <p className="mb-3 font-semibold">Você vai ver em pouco tempo ⏳</p>
              <p className="mb-3">
                Quando aprender a fazer esses{" "}
                <span style={{ color: "#fd7ab1" }} className="font-semibold">
                  Doces Gourmet
                </span>{" "}
                e postar nos Grupos de Facebook e no Whatsapp <span className="font-bold">VAI CHOVER ENCOMENDAS!</span>
              </p>
              <p className="mb-4 font-medium">Parece até mágica...</p>

              <div className="space-y-2 mb-4">
                <p className="flex items-center">
                  <span className="mr-2">⭐️</span>
                  <span className="font-medium bg-rose-200">Encomendas para Casamentos</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">⭐️</span>
                  <span className="font-medium bg-rose-200">Encomendas para Aniversários</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">⭐️</span>
                  <span className="font-medium bg-rose-200">Encomendas para Batismos</span>
                </p>
              </div>

              <p className="flex items-start">
                <span className="mr-2 mt-1">🥰</span>
                <span>E ainda tem as vendas de pessoas que só querem comer um doce gostoso pelo delivery.</span>
              </p>
            </div>

            {/* Botão para continuar */}
            <Button
              onClick={handleCarouselComplete}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full text-lg shadow-sm transition-all duration-200 h-16"
            >
              Quero aprender o método
            </Button>

            {/* Botão voltar */}
            <div className="mt-8 text-center">
              <Button variant="ghost" onClick={handleBack} className="text-gray-600 hover:text-gray-800 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Voltar
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentQ.isPromotional) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#F5F1E8" }}>
        {/* Logo no topo */}
        <div className="pt-8 pb-2 text-center">
          <div className="flex flex-col items-center">
            <img
              src="/images/design-mode/Logopng.jpg.jpeg"
              alt="Confeitaria da Fabi"
              className="w-16 h-16 rounded-full mb-2"
            />
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="px-6 mb-8 mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: "#fd7ab1" }}
            />
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="px-6 flex-1">
          <div className="max-w-sm mx-auto text-center">
            {/* Imagem promocional */}
            <div className="mb-8">
              <img
                src="/images/design-mode/lucrativa1.jpg.jpeg"
                alt="Ex-faxineira viraliza e transforma a vida de milhares de mulheres com Confeitaria Lucrativa"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Botão */}
            <Button
              onClick={handlePromotionalComplete}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full text-lg shadow-sm transition-all duration-200 h-16"
            >
              Quero Aprender o Método
            </Button>

            {/* Botão voltar */}
            <div className="mt-8 text-center">
              <Button variant="ghost" onClick={handleBack} className="text-gray-600 hover:text-gray-800 font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Voltar
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentQ.isIntroduction) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header com barra de progresso */}
        <div className="bg-white shadow-sm border-b p-4">
          <div className="max-w-md mx-auto">
            {/* Barra de progresso azul como no exemplo */}
            <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
              <div
                className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Logo pequena centralizada */}
            <div className="text-center mb-4">
              <img
                src="/images/design-mode/Logopng.jpg.jpeg"
                alt="Confeitaria da Fabi"
                className="w-16 h-16 mx-auto rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-md mx-auto p-4">
          {/* Título */}
          <h1 className="text-xl font-bold text-center mb-6 text-gray-800">Prazer, meu nome é Fabiana Reis</h1>

          {/* Foto principal com faixa rosa */}
          <div className="relative mb-6">
            <img
              src="/images/design-mode/Fabiana-Reis.jpg.jpeg"
              alt="Fabiana Reis"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Primeiro bloco de texto */}
          <div className="mb-6 text-gray-800 leading-relaxed">
            <p className="mb-3">Prazer, meu nome é Fabiana Reis 🙏🏻</p>
            <p className="mb-3">
              Em 2022, eu estava desempregada e{" "}
              <span className="text-red-600 font-semibold">sem saber como ia pagar as contas do mês.</span>
            </p>
            <p className="mb-3">Assim como você, eu também não sabia por onde começar.</p>
            <p className="mb-3">Foi então que tive uma ideia simples:</p>
            <p className="font-medium">
              Transformar doces em verdadeiras <span style={{ color: "#fd7ab1" }}>sobremesas gourmet</span>,{" "}
              <span className="text-orange-500">lindas</span>, <span className="text-orange-600">irresistíveis</span> e{" "}
              <span className="text-yellow-600">viciantes</span>
            </p>
          </div>

          {/* Colagem de fotos como no exemplo */}
          <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/design-mode/fabiana-reis-2.jpg.jpeg"
              alt="Colagem Fabiana Reis - Chef, chocolate derretendo, copinhos de doce e dinheiro"
              className="w-full"
            />
          </div>

          {/* Segundo bloco de texto com resultados */}
          <div className="mb-6 text-gray-800 leading-relaxed">
            <p className="mb-3">
              Na minha <span className="font-bold">primeira semana</span> lucrei{" "}
              <span className="font-bold underline">R$1.052</span>, vendendo só no grupo da cidade.
            </p>
            <p className="mb-3 bg-pink-100">
              Hoje, faço mais de <span className="font-bold">R$12.750 por mês</span>, trabalhando da cozinha da minha{" "}
              <span className="font-bold">casa!</span>
            </p>
            <p className="mb-3">
              E agora, eu quero te mostrar exatamente como você pode fazer o mesmo. Esse pode ser o seu ponto de virada.
            </p>
            <p className="mb-3 font-semibold">Não é só sobre doces...</p>
            <p>
              É sobre liberdade.{" "}
              <span style={{ color: "#fd7ab1" }} className="font-semibold">
                Sobre cuidar da sua família
              </span>
              , realizar sonhos e nunca mais depender de ninguém.
            </p>
          </div>

          {/* Botão verde */}
          <Button
            onClick={handleIntroductionComplete}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg mb-6 h-16"
          >
            Quero aprender o método
          </Button>
        </div>
      </div>
    )
  }

  return null
}
