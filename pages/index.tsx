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
        info about <strong className="font-semibold">books</strong> I'm reading,{" "}
        <strong className="font-semibold">programming</strong> stuff I'm
        tinkering with, and possibly some{" "}
        <strong className="font-semibold">politics & philosophy</strong> (not
        sure about this one yet).
      </p>
    </div>
  );
}

export default Index;
