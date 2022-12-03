import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blog = () => {

    //dynamic title
    useTitle('Blog')

    return (
        <div>
            <div >
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">November 23, 2022</span>
                        <a rel="noopener noreferrer" href="/" className="px-2 py-1 bg-red-600 text-white font-bold rounded ">State</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="/" className="text-2xl font-bold hover:underline">What are the different ways to manage a state in a React application?</a>
                        <p className="mt-2">React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">

                        <div>
                            <a rel="noopener noreferrer" href="/" className="flex items-center">
                                <span className="hover:underline "><span className='text-gray-600 font-bold' >Author:</span> Salim Al Sazu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">November 24, 2022</span>
                        <a rel="noopener noreferrer" href="/" className="px-2 py-1 bg-red-600 text-white font-bold rounded ">Prototypical</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="/" className="text-2xl font-bold hover:underline">How does prototypical inheritance work?</a>
                        <p className="mt-2">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">

                        <div>
                            <a rel="noopener noreferrer" href="/" className="flex items-center">
                                <span className="hover:underline "><span className='text-gray-600 font-bold' >Author:</span> Salim Al Sazu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">November 25, 2022</span>
                        <a rel="noopener noreferrer" href="/" className="px-2 py-1 bg-red-600 text-white font-bold rounded ">Unit test</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="/" className="text-2xl font-bold hover:underline">What is a unit test? Why should we write unit tests?</a>
                        <p className="mt-2">Unit Testing is a type of software testing where individual units or components of a software are tested.</p>

                        <p className="mt-2">They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>

                    </div>
                    <div className="flex items-center justify-between mt-4">

                        <div>
                            <a rel="noopener noreferrer" href="/" className="flex items-center">
                                <span className="hover:underline "><span className='text-gray-600 font-bold' >Author:</span> Salim Al Sazu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">November 26, 2022</span>
                        <a rel="noopener noreferrer" href="/" className="px-2 py-1 bg-red-600 text-white font-bold rounded ">React vs. Angular vs. Vue?</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="/" className="text-2xl font-bold hover:underline">React vs. Angular vs. Vue?</a>
                        <p className="mt-2">React doesn’t propose a specific structure to be followed, and with only a few lines of code you can have a simple React application. <span className='tex-black font-extrabold' >UI component:</span> React UI tools  </p>

                        <p className="mt-2">Angular is built entirely in Typescript and every project on Angular is structured in modules, components and services. At least, each module must have a root module and a root component.<span className='tex-black font-extrabold' >UI component:</span> In-built material tech stack </p>

                        <p className="mt-2">The structure in Vue.js is pretty simple. All pieces are meant to be self-contained, reusable components. <span className='tex-black font-extrabold' >UI component:</span> Component Libraries</p>

                    </div>
                    <div className="flex items-center justify-between mt-4">

                        <div>
                            <a rel="noopener noreferrer" href="/" className="flex items-center">
                                <span className="hover:underline "><span className='text-gray-600 font-bold' >Author:</span> Salim Al Sazu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;