import React from "react";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import Code from "../../Components/Code/Code";

const Blog = () => {
  return (
    <>
      <PagesHeader pageTitle="Blog" />

      <div className="my-8">
        <div className="">
          <h3 className="text-4xl font-bold">
            When should you use context API?
          </h3>
          <p className="p-2 my-4 border border-blue-600 rounded">
            Context is primarily used when some data needs to be accessible by
            many components at different nesting levels. Apply it sparingly
            because it makes component reuse more difficult. If you only want to
            avoid passing some props through many levels, component composition
            is often a simpler solution than context.
          </p>
          <h3 className="text-4xl font-bold">What is a custom hook?</h3>
          <p className="p-2 my-4 border border-blue-600 rounded">
            A custom hook is a special JavaScript function whose name starts
            with 'use' and can be used to call other hooks. Let's take a look at
            some major differences between a custom React JS hook and React JS
            components: A custom hook does not require a specific signature.
          </p>
          <h3 className="text-4xl font-bold">What is useRef?</h3>
          <p className="p-2 my-4 border border-blue-600 rounded">
            useRef(initialValue) is a built-in React hook that accepts one
            argument as the initial value and returns a reference (aka ref). A
            reference is an object having a special property current
          </p>
          <p className="p-2 my-4 border border-blue-600 rounded">
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
          <h3 className="text-4xl font-bold">What is useRef?</h3>
          <p className="p-2 my-4 border border-blue-600 rounded">
            useMemo() is a function that returns a memoized value of a passed in
            resource-intensive function. It is very useful in optimizing the
            performance of a React component by eliminating repeating heavy
            computations.Memoization is an optimization technique for accelerating computer programs by caching the results of heavy function calls and returning them when similar inputs are encountered repeatedly
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Blog;
