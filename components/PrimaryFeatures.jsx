import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import Container from './container'
import screenshotExpenses from './images/screenshots/film_03.jpg'
import screenshotPayroll from './images/screenshots/plan4.png'
import screenshotReporting from './images/screenshots/Postprodukcja_01.jpg'
import screenshotVatReturns from './images/screenshots/rolex_01_BW.png'

const features = [
  {
  title: 'Produkcja filmowa',
  description:
  "Twórz filmy fabularne, dokumentalne, reklamowe i inne. Zarządzaj produkcją, dobieraj obsadę, planuj zdjęcia i wiele więcej.",
  image: screenshotExpenses,
  },
  {
  title: 'Film reklamowy',
  description:
  "Stwórz film reklamowy, który przyciągnie uwagę Twoich potencjalnych klientów. Zarządzaj całym procesem produkcji, od koncepcji po finalny montaż.",
  image: screenshotPayroll,
  },
  {
  title: 'Postprodukcja',
  description:
  "Opracuj film, dodaj efekty specjalne, montuj dźwięk i obrazy. Skorzystaj z naszych narzędzi, aby stworzyć profesjonalny film.",
  image: screenshotReporting,
  },
  {
  title: 'Animacja',
  description:
  'Stwórz animację 2D lub 3D, korzystając z naszego oprogramowania. Twórz postacie, modele i efekty wizualne i ciesz się profesjonalnym efektem końcowym.',
  image: screenshotVatReturns,
  },
  ]
export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-black pt-20 pb-28 sm:py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%] ">
      
      </div>
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2
            id="features-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Wszystko, czego potrzebujesz do produkcji <span className="text-babyblue">wysokiej jakości filmów.</span>
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            No cóż, wszystko, czego potrzebujesz, jeśli nie jesteś zbyt wybredny w kwestii drobnych szczegółów, takich jak ultra-realne efekty CGI lub budżety na poziomie Hollywood.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        {
                          'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10':
                            selectedIndex === featureIndex,
                          'hover:bg-white/10 lg:hover:bg-white/5':
                            selectedIndex !== featureIndex,
                        }
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-semibold text-lg focus:outline-none',
                            {
                              'text-babyblue lg:text-babyblue':
                                selectedIndex === featureIndex,
                              'text-blue-100 hover:text-babyblue lg:text-s':
                                selectedIndex !== featureIndex,
                            }
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xls" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx('mt-2 hidden text-sm lg:block', {
                          'text-white': selectedIndex === featureIndex,
                          'text-white group-hover:text-white':
                            selectedIndex !== featureIndex,
                        })}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        src={feature.image}
                        alt=""
                       
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
