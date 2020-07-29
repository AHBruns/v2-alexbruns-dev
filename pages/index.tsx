import React from "react";

function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-4xl font-semibold tracking-widest text-gray-700">
        Welcome
      </h1>
      <p className="max-w-lg font-light tracking-widest text-justify text-gray-800">
        I'm Alex Bruns. This is my website. My old website was mostly work
        focused. You can find it{" "}
        <a
          href="https://v1.alexbruns.dev"
          target="_blank"
          className="font-semibold hover:underline"
        >
          here
        </a>
        . This new website is more focused on my personal interests. You'll find
        info about books I have read or am reading, as well as much more (when I
        get around to it).
      </p>
    </div>
  );
}

export default Index;
