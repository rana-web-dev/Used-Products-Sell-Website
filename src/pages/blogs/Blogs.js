import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-6xl mx-auto py-52 px-5">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">
          Q-1. What are the different ways to manage a state in a React
          application?
        </h2>
        <p className="text-xl">
          <span className="text-orange-500">Answer: </span>
          React state management is a process for managing the data that React
          components need in order to render themselves. This data is typically
          stored in the component's state object. When the state object changes,
          the component will re-render itself. React state management is
          basically half of a React app.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold">
          Q-2. How does prototypical inheritance work?
        </h2>
        <p className="text-xl">
          <span className="text-orange-500">Answer: </span>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold">
          Q-3. What is a unit test? Why should we write unit tests?
        </h2>
        <p className="text-xl">
          <span className="text-orange-500">Answer: </span>
          A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
          Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold">Q-4. React vs. Angular vs. Vue?</h2>
        <p className="text-xl">
          <span className="text-orange-500">Answer: </span>
          Which is more popular React Vue or Angular? Popularity. According to a
          survey by Stack Overflow 40.13% of the developers believe that React
          is the most commonly used JavaScript Framework. Angular and Vue follow
          it with 22.96% and 18.97%, respectively.<br></br>
          <span className="text-purple-500">React: </span><br></br>
          It's used for building interactive user interfaces and web
          applications quickly and efficiently with significantly less code than
          you would with vanilla JavaScript. In React, you develop your
          applications by creating reusable components that you can think of as
          independent Lego blocks.<br></br>
          <span className="text-purple-500">Angular: </span> <br></br>
          Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.
          <br></br>
          <span className="text-purple-500">Vue: </span> <br></br>
          Vue (pronounced /vjuː/, like view) is a JavaScript framework for
          building user interfaces. It builds on top of standard HTML, CSS, and
          JavaScript and provides a declarative and component-based programming
          model that helps you efficiently develop user interfaces, be they
          simple or complex.
          
        </p>
      </div>
    </div>
  );
};

export default Blogs;
