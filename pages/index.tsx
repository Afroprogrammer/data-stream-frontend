import React, {useRef} from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {AnnotationIcon, MailIcon} from '@heroicons/react/outline'
import Footer from "./components/Footer";
import Head from "next/head";
import Link from "next/link";
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'


import {
    ChatAlt2Icon,
    InboxIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {useSession, signIn, signOut} from "next-auth/react";
import {useRouter} from "next/router";
import Image from "next/image";

const solutions = [
    {
        name: 'Convenience Simplified',
        description: 'Top Up From The Comfort Of Your Space. Carry out all your bill payments securely and fast from the comfort of your home, office, anywhere.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Safe, Secure, Fast',
        description: 'Get ahead by settling all your bills using our safe, fast and secure platform. Stay in the hearts of those you love by sending them tokens of love using our ‘Gift Me’ feature. You\'re done in seconds.',
        href: '#',
        icon: AnnotationIcon,
    },
    { name: 'Live Chat', description: "Your customers' data will be safe and secure.", href: '#', icon: ChatAlt2Icon },
    {
        name: '24 X 7 Customer Support',
        description: "Our mission is to do what has always been done with a touch of difference. Follow us on our social" +
            " media to get updates on our latest additions and hit us up via email or our live chat.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]

function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
}

// const navigation = [
//     { name: 'Product', href: '#' },
//     { name: 'Features', href: '#' },
//     { name: 'Marketplace', href: '#' },
//     { name: 'Company', href: '#' },
// ]
const communicationFeatures = [
    {
        id: 1,
        name: 'Convenience Simplified',
        description:
            'Top Up From The Comfort Of Your Space. Carry out all your bill payments securely and fast from the comfort of your home, office, anywhere.',
        icon: AnnotationIcon,
    },
    {
        id: 2,
        name: 'Safe, Secure, Fast',
        description:
            'Get ahead by settling all your bills using our safe, fast and secure platform. Stay in the hearts of those' +
            ' you love by sending them tokens of love using our ‘Gift Me’ feature. You\'re done in seconds.',
        icon: MailIcon,
    },
]

const Home = () => {
    const {data: session } = useSession()
    const{push, asPath} = useRouter()
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    const handleSignOut = async() => {
        const data = await signOut({redirect: false, callbackUrl: '/index'})
    }
    const handleSignIn = () => push(`/signin?callbackUrl=${asPath}`)

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white">
                <header>
                    <Popover className="relative bg-white">
                        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="#">
                                    <span className="sr-only">Workflow</span>
                                    <Image
                                        className="h-10 w-auto sm:h-10"
                                        // src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        src = "/crushBigCrop.png"
                                        // src = "/crushImage.png"
                                        width = "95"
                                        height= '25'
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900' : 'text-gray-500',
                                                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                )}
                                            >
                                                <span>Solutions</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-600' : 'text-gray-400',
                                                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                    )}
                                                    aria-hidden="true"
                                                />
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
                                                <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                            {solutions.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                >
                                                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12">
                                                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                                                    </div>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                {/*{navigation.map((item) => (*/}
                                {/*    <a key={item.name} href={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">*/}
                                {/*        {item.name}*/}
                                {/*    </a>*/}
                                {/*))}*/}
                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <Link href="/signin">
                                    <a  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                         Sign in
                                    </a>
                                </Link>
                             <Link href= "/signup">
                                 <a
                                     className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                 >
                                     Sign up
                                 </a>
                             </Link>

                            </div>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                    <div className="pt-5 pb-6 px-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid grid-cols-1 gap-7">
                                                {solutions.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                    >
                                                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                                        </div>
                                                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="py-6 px-5">
                                        {/*<div className="grid grid-cols-2 gap-4">*/}
                                        {/*    {navigation.map((item) => (*/}
                                        {/*        <a*/}
                                        {/*            key={item.name}*/}
                                        {/*            href={item.href}*/}
                                        {/*            className="text-base font-medium text-gray-900 hover:text-gray-700"*/}
                                        {/*        >*/}
                                        {/*            {item.name}*/}
                                        {/*        </a>*/}
                                        {/*    ))}*/}
                                        {/*</div>*/}
                                        <div className="mt-6">
                                            <Link href= "/signup">
                                            <a
                                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                            >
                                                Sign up
                                            </a>
                                            </Link>
                                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                Existing customer? {' '}
                                                <Link href= "/signin">
                                                <a  className="text-gray-900">
                                                    Sign in
                                                </a>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </header>

                <main>
                    <div>
                        {/* Hero card */}
                        <div className="relative">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                    <div className="absolute inset-0">
                                        <Image
                                            width='6000'
                                            height='4000'
                                            className="h-full w-full object-cover"
                                            src="/mobile-bank-application.jpg"
                                            alt="Man using Laptop"
                                        />
                                        <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                                    </div>
                                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                            <span className="block text-white">
                                                        Digital payment for all your</span>
                                            <span className="block text-indigo-200">lifestyle payments</span>
                                        </h1>
                                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                            CushPay is your digital wallet for all your lifestyle needs: top up your
                                            mobile lines with airtime and data; renew your cable TV and electricity;
                                            transfer funds; pay for your car insurance; or make payments with virtual
                                            naira or dollar debit cards.
                                        </p>
                                        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                                                <Link href="/signup">
                                                    <a
                                                        href="#"
                                                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                                    >
                                                        Get started
                                                    </a>
                                                </Link>

                                                {/*<a*/}
                                                {/*    href="#"*/}
                                                {/*    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"*/}
                                                {/*>*/}
                                                {/*    Live demo*/}
                                                {/*</a>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logo cloud */}
                        <div className="bg-gray-100">
                            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                                <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                    Trusted by over 5 very average small businesses
                                </p>
                                <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                        <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                                    </div>
                                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                        <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                                    </div>
                                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                        <img
                                            className="h-12"
                                            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                            alt="StaticKit"
                                        />
                                    </div>
                                    <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                                        <img
                                            className="h-12"
                                            src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                            alt="Transistor"
                                        />
                                    </div>
                                    <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                        <img
                                            className="h-12"
                                            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                            alt="Workcation"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* More main page content here... */}
                </main>
            </div>
            <div className="py-5 bg-gray-50 overflow-hidden lg:py-10">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <svg
                        className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                    </svg>
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"> Our Commitment To You </h3>
                                <p className="mt-3 text-lg text-gray-500">
                                    Our commitment to you is to serve you the best of services. We also know that
                                    sometimes, things may go south. Our promise is to keep you at the center of it all, knowing that no matter what, we have your convenience as our number one priority..
                                </p>

                                <dl className="mt-10 space-y-10">
                                    {communicationFeatures.map((item) => (
                                        <div key={item.id} className="relative">
                                            <dt>
                                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                                </div>
                                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                                            </dt>
                                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <lottie-player
                                ref={ref}
                                autoplay
                                loop
                                src="https://assets5.lottiefiles.com/private_files/lf30_mg5bq9pg.json"
                                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden">
                            </lottie-player>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default Home;




















