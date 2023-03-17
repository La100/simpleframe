import Image from 'next/image'

import Container from './container'
import backgroundImage from './images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Jaki jest koszt produkcji filmowej lub reklamy?',
      answer:
        'Koszt produkcji zależy od wielu czynników, takich jak rodzaj projektu, skala produkcji, lokalizacja, czas produkcji itp. Zachęcamy do skontaktowania się z nami, aby omówić szczegóły i otrzymać wycenę.',
    },
    {
      question: 'Czy oferujecie usługi postprodukcji filmowej?',
      answer: 'Tak, oferujemy pełen zakres usług postprodukcji, w tym edycję, korekcję kolorów, efekty specjalne, montaż dźwięku i więcej.',
    },
    {
      question: 'Czy zajmujecie się produkcją filmów animowanych?',
      answer:
        'Tak, oferujemy również usługi produkcji filmów animowanych, w tym 2D, 3D, motion graphics i wiele więcej.',
    },
  ],
  [
    {
      question: 'Jak długo trwa proces produkcji filmowej lub reklamy?',
      answer:
        'Czas produkcji zależy od skali projektu i wielu innych czynników. Możemy omówić szczegóły projektu i oszacować czas produkcji na podstawie jego wymagań.',
    },
    {
      question:
        'Czy oferujecie usługi wideofilmowania i fotografowania?',
      answer:
        'Tak, oferujemy usługi wideofilmowania i fotografowania, zarówno w studio, jak i na zewnątrz, w zależności od potrzeb projektu.',
    },
    {
      question:
        'Czy oferujecie usługi nagrywania dźwięku?',
      answer:
        'Tak, oferujemy usługi nagrywania dźwięku i miksowania dźwięku, zarówno w studio, jak i na miejscu.',
    },
  ],
  [
    {
      question: 'Jakie formaty wideo i dźwięku obsługujecie?',
      answer:
        'Obsługujemy wiele formatów wideo i dźwięku, w tym MP4, MOV, AVI, WAV, MP3 i wiele innych..',
    },
    {
      question: 'Czy oferujecie usługi tworzenia treści wideo na potrzeby mediów społecznościowych?',
      answer: ' Tak, oferujemy usługi tworzenia treści wideo na potrzeby różnych platform mediów społecznościowych, takich jak Facebook, Instagram, YouTube itp.',
    },
    {
      question: 'Czy oferujecie usługi tłumaczenia i napisów?',
      answer:
        'Tak, oferujemy usługi tłumaczenia i napisów dla różnych języków, w celu dostosowania produkcji do międzynarodowych rynków i widowni.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <h2 id="faq-title" className="sr-only">
        Często zadawane pytania
      </h2>
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        
      </div>
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          Często zadawane pytania
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Jeśli nie możesz znaleźć tego, czego szukasz, wyślij e-mail do naszego zespołu wsparcia. <br/><span className="font-bold">Z przyjemnością odpowiemy.</span>
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-semibold text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
