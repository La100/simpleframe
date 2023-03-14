import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition,} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const produkcje = [
  { name: 'Film Reklamowy', description:'Skuteczna reklama wideo dla Twojego biznesu', href: '#', icon: ChartPieIcon },
  { name: 'Film Korporacyjny', description: 'Profesjonalna prezentacja Twojej firmy', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Film Promocyjny', description: 'Zachęć swoich klientów do zakupów ', href: '#', icon: FingerPrintIcon },
  { name: 'Film Produktowy', description: 'Pokaż swoje produkty w najlepszym świetle', href: '#', icon: SquaresPlusIcon },
  { name: 'Film Wizerunkowy', description: 'Zwiększ rozpoznawalność swojej marki', href: '#', icon: ArrowPathIcon },
  { name: 'Film Szkoleniowy', description: 'Wspomóż rozwój swojego biznesu', href: '#', icon: SquaresPlusIcon },
  { name: 'Montaż filmów', description: 'Zaoszczędź czas i powierz montaż swojego filmu naszym profesjonalnym edytorom', href: '#', icon: ArrowPathIcon },
  { name: 'Dron', description: 'Osiągnij nowe perspektywy i zaskocz swoich odbiorców', href: '#', icon: ArrowPathIcon },
];

const animacje = [
  { name: 'Animacja 3D', description: 'Ożyw swoje pomysły w trójwymiarowej przestrzeni', href: '#', icon: ChartPieIcon },
  { name: 'Animacja 2D', description: 'Zaprojektuj animację dopasowaną do Twojej marki', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Animacja Techniczna', description: 'Wyjaśnij skomplikowane tematy w prosty sposób', href: '#', icon: FingerPrintIcon },
  { name: 'Produkcja Animacji', description: 'Stwórz wyjątkową animację od pomysłu po finalny efekt', href: '#', icon: SquaresPlusIcon },
  { name: 'Animacja Produktowa', description: 'Przedstaw swoje produkty w nowoczesny i innowacyjny sposób', href: '#', icon: ArrowPathIcon },
  { name: 'Motion Design', description: 'Nadaj dynamiki Twoim projektom z pomocą animacji motion design', href: '#', icon: SquaresPlusIcon },
  { name: 'Video Explainer', description: 'Przedstaw swoją ofertę w sposób prosty i przystępny', href: '#', icon: ArrowPathIcon },
];
const uslugi = [
  { name: 'Billboard Sponsorski', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Teledyski', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Fotografia', description: 'Your customers data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Streaming', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'PPT', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-black absolute w-full left-0">
    <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-14" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-auto w-auto" src="../logo.png" alt="" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none">
            Produkcja filmowa
            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5">
              <div className="p-4">
                {produkcje.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-black">
                      <item.icon className="h-6 w-6 text-white group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <a href="/postprodukcja" className="text-sm font-semibold leading-6 text-white">
          Postprodukcja
        </a>
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none">
            Animacja
            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5">
              <div className="p-4">
                {animacje.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-black">
                      <item.icon className="h-6 w-6 text-white group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            </Popover.Panel>
          </Transition>
        </Popover>
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none">
            Usługi
            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5">
              <div className="p-4">
                {uslugi.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-black">
                      <item.icon className="h-6 w-6 text-white group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
             
            </Popover.Panel>
          </Transition>
        </Popover>
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Blog
        </a>
      
      </Popover.Group>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-white pr-10">
          Kontakt <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-black-50">
                      Product
                      <ChevronDownIcon
                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                  </>
                )}
              </Disclosure>
              <a
                href="#"
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-black-50"
              >
                Features
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-black-50"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-black-50"
              >
                Company
              </a>
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-black-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  )
}
