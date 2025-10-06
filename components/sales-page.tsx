"use client"

import { Button } from "@/components/ui/button"
import { Check, ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SalesPage() {
  const testimonials1 = [
    "/images/depoimentos/depoimento1.webp",
    "/images/depoimentos/depoimento2.webp",
    "/images/depoimentos/depoimento3.webp",
  ]

  const testimonials2 = ["/images/depoimentos/depoimento4.webp", "/images/depoimentos/depoimento5.webp"]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-400 to-pink-600 text-white p-6 text-center">
        <img
          src="/images/design-mode/Logopng.jpg.jpeg"
          alt="Confeitaria da Fabi"
          className="w-20 h-20 mx-auto mb-4 rounded-full shadow-lg"
        />
        <h1 className="text-2xl font-bold mb-2 leading-tight">
          Ganhe de R$3 a R$5 mil por mês com doces de confeitaria
        </h1>
        <p className="text-lg text-white">
          Aprenda do zero a fazer doces caramelizados, e vários outros doces deliciosos gastando pouco e sem precisar de
          experiência.
        </p>
      </div>

      {/* First Testimonials Section */}
      <div className="p-6 bg-gray-50">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6 leading-tight">
          ESSAS ALUNAS JÁ ESTÃO LUCRANDO COM OS
          <br />
          MELHORES DOCES DE 2025!
        </h2>

        <div className="max-w-sm mx-auto space-y-4">
          {testimonials1.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial || "/placeholder.svg"}
              alt={`Depoimento ${index + 1}`}
              className="w-full rounded-lg border-2 border-pink-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          ))}
        </div>
      </div>

      {/* What You Will Receive Section */}
      <div className="p-6 bg-gradient-to-br from-pink-400 to-pink-600">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">O QUE VOCÊ VAI RECEBER:</h2>
          <ChevronDown className="w-6 h-6 text-white mx-auto" />
        </div>

        <div className="max-w-md mx-auto space-y-6">
          {/* Painel VIP Completo */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/design-mode/painelvip.PNG.png"
              alt="Painel VIP Completo"
              className="w-full h-48 object-cover border-b-4 border-blue-300 shadow-md"
            />
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-lg font-bold mb-3 text-center" style={{ color: "#fd7ab1" }}>
                PAINEL VIP COMPLETO
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                O painel VIP que tem dezenas de receitas passo a passo de doces e vídeos aulas explicativas.
              </p>
            </div>
          </div>

          {/* Receitas Exclusivas */}
          <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/design-mode/doce-caramelizado.jpg.jpeg"
              alt="Doces Caramelizados"
              className="w-full h-48 object-cover border-b-4 border-orange-300 shadow-md"
            />
            <div className="p-6 bg-gradient-to-br from-amber-50 to-white">
              <h3 className="text-lg font-bold mb-3 text-center" style={{ color: "#fd7ab1" }}>
                RECEITAS EXCLUSIVAS DE DOCES CARAMELIZADOS
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Receitas testadas e aprovadas pra você nunca errar no ponto.
              </p>
            </div>
          </div>

          {/* Recheios Sem Fogo */}
          <div className="bg-gradient-to-br from-pink-100 to-rose-200 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/design-mode/recheio%20sem%20fogo.jpg.jpeg"
              alt="Recheios Sem Fogo"
              className="w-full h-48 object-cover border-b-4 border-rose-300 shadow-md"
            />
            <div className="p-6 bg-gradient-to-br from-pink-50 to-white">
              <h3 className="text-lg font-bold mb-3 text-center" style={{ color: "#fd7ab1" }}>
                RECHEIOS SEM FOGO
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Transforme Recheios Sem Fogo em até R$3.735 por mês com doces irresistíveis!
              </p>
            </div>
          </div>

          {/* Como Cobrar Mais Caro */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/design-mode/cobremaiscaro.jpg.jpeg"
              alt="Como Cobrar Mais Caro"
              className="w-full h-48 object-cover border-b-4 border-emerald-300 shadow-md"
            />
            <div className="p-6 bg-gradient-to-br from-green-50 to-white">
              <h3 className="text-lg font-bold mb-3 text-center" style={{ color: "#fd7ab1" }}>
                COMO COBRAR MAIS CARO PELOS DOCES
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Descubra como cobrar mais caro pelos doces caramelizados sem perder clientes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Testimonials */}
      <div className="p-6 bg-gray-50">
        <div className="max-w-sm mx-auto space-y-4">
          {testimonials2.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial || "/placeholder.svg"}
              alt={`Depoimento ${index + 1}`}
              className="w-full rounded-lg border-2 border-pink-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          ))}
        </div>
      </div>

      {/* Purchase Section */}
      <div className="p-6 bg-gradient-to-br from-pink-400 to-pink-600">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl border-4 p-6 shadow-xl" style={{ borderColor: "#fd7ab1" }}>
            <h2 className="text-xl font-bold text-center mb-6" style={{ color: "#fd7ab1" }}>
              GARANTA O SEU ACESSO AGORA MESMO!
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">CURSO VIVER DE DOCES CARAMELIZADOS</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">CURSO RECHEIOS SEM FOGO</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">CURSO DE COMO COBRAR MAIS</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">CURSO DE CALCULAR MARGEM</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">+De 300 receitas de doces</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">ACESSO À ÁREA VIP</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">30 DIAS DE GARANTIA</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">TODAS AS ATUALIZAÇÕES</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">ACESSO VITALÍCIO</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-red-500 line-through text-lg font-bold">DE R$229,90</p>
              <p className="text-black text-lg font-bold">POR APENAS 6 VEZES DE</p>
              <p className="text-green-600 text-4xl font-bold">R$5,66</p>
              <p className="text-green-600 text-lg font-bold">OU R$ 29,90 À VISTA</p>
            </div>

            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg"
              size="lg"
              onClick={() => (window.location.href = "https://pay.kiwify.com.br/yj5rSSG")}
            >
              QUERO COMPRAR AGORA!
            </Button>
          </div>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="p-6 text-center">
        <img
          src="/images/design-mode/Garantia-30-dias.webp"
          alt="Garantia 30 dias"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h3 className="font-bold text-lg text-gray-800 mb-2">Garantia de 30 dias!</h3>
        <p className="text-gray-600 max-w-sm mx-auto">
          Aproveite todo o conteúdo e se não sentir que está no caminho certo é só pedir e devolveremos 100% do seu
          dinheiro.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="p-6 bg-gray-50">
        <h2 className="text-lg font-bold text-center text-gray-800 mb-6">DÚVIDAS DE OUTROS CLIENTES</h2>

        <div className="max-w-md mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border-0">
              <AccordionTrigger className="px-4 py-3 text-left font-bold text-gray-800 hover:no-underline">
                Preciso ter experiência?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-600 text-sm">
                Não! O curso é feito para iniciantes. Você aprende tudo do zero.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border-0">
              <AccordionTrigger className="px-4 py-3 text-left font-bold text-gray-800 hover:no-underline">
                Quanto tempo para ver resultados?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-600 text-sm">
                Muitas alunas começam a vender na primeira semana após o curso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border-0">
              <AccordionTrigger className="px-4 py-3 text-left font-bold text-gray-800 hover:no-underline">
                Preciso de equipamentos caros?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-600 text-sm">
                Não! Você pode começar com utensílios básicos que tem em casa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Final CTA */}
      <div className="p-6 bg-gradient-to-br from-pink-500 to-pink-600 text-white text-center">
        <h2 className="text-xl font-bold mb-4">NÃO PERCA ESSA OPORTUNIDADE!</h2>
        <Button
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 text-lg rounded-xl shadow-lg max-w-md mx-auto"
          size="lg"
          onClick={() => (window.location.href = "https://pay.kiwify.com.br/yj5rSSG")}
        >
          GARANTIR MINHA VAGA AGORA
        </Button>
      </div>

      <footer className="p-6 text-center text-white" style={{ backgroundColor: "#3e2011" }}>
        <div className="max-w-md mx-auto">
          {/* Security Seals */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            <img src="/images/design-mode/site%20seguro1.png" alt="Site Seguro SSL Certificado" className="h-12" />
            <img src="/images/design-mode/site%20blindado1.png" alt="Site Blindado" className="h-12" />
          </div>

          {/* Copyright */}
          <p className="text-sm opacity-90">© 2025 Confeitaria da Fabi - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
