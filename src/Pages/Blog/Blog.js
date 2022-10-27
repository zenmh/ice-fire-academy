import React from "react";

const Blog = () => {
  return (
    <div className="lg:mx-12 mx-2">
      <h2 className="md:text-3xl text-lg font-bold text-center my-8">
        There have some Questions - ans that should you know as Developer.
      </h2>
      <div className="border-2 border-slate-500 rounded-sm p-4 my-4">
        <h3 className="font-bold">What is cors ?</h3>
        <hr className="my-2" />
        <p>
          <strong>Ans : </strong>Cross-origin resource sharing (CORS) is a
          browser mechanism which enables controlled access to resources located
          outside of a given domain. It extends and adds flexibility to the
          same-origin policy (SOP). However, it also provides potential for
          cross-domain attacks, if a website's CORS policy is poorly configured
          and implemented. CORS is not a protection against cross-origin attacks
          such as cross-site request forgery.
        </p>
      </div>
      <div className="border-2 border-slate-500 rounded-sm p-4 my-4">
        <h3 className="font-bold">
          Why are you using firebase ? What other options do you have to
          implement authentication ?
        </h3>
        <hr className="my-2" />
        <p>
          <strong>Ans : </strong>Firebase Authentication provides backend
          services, easy-to-use SDKs, and ready-made UI libraries to
          authenticate users to your app. It supports authentication using
          passwords, phone numbers, popular federated identity providers like
          Google, Facebook and Twitter, and more.
        </p>
      </div>
      <div className="border-2 border-slate-500 rounded-sm p-4 my-4">
        <h3 className="font-bold">How does the private route work ?</h3>
        <hr className="my-2" />
        <p>
          <strong>Ans : </strong>The private route component is similar to the
          public route, the only change is that redirect URL and authenticate
          condition. If the user is not authenticated he will be redirected to
          the login page and the user can only access the authenticated routes
          If he is authenticated (Logged in).
        </p>
      </div>
      <div className="border-2 border-slate-500 rounded-sm p-4 my-4">
        <h3 className="font-bold">What is Node? How does Node work ?</h3>
        <hr className="my-2" />
        <p>
          <strong>Ans : </strong>Node. js is a JavaScript runtime environment
          that achieves low latency and high throughput by taking a
          “non-blocking” approach to serving requests. In other words, Node. js
          wastes no time or resources on waiting for I/O requests to return.
        </p>
      </div>
    </div>
  );
};

export default Blog;
