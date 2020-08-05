import React from "react";
import prettier from "prettier/standalone";
import parser from "prettier/parser-typescript";
import Prism from "prismjs";

function Snippets({ snippets }) {
  return (
    <div className="grid grid-flow-row grid-cols-12 gap-4 p-4">
      {snippets.map(({ title, language, snippet }, i) => (
        <div
          key={i}
          className="col-span-12 p-4 space-y-4 bg-gray-100 border border-gray-300 rounded-md shadow-md sm:col-span-6 lg:col-span-4"
        >
          <div>
            <h1 className="text-2xl font-semibold leading-tight tracking-wider text-gray-900">
              {title}
            </h1>
            <h2 className="text-sm leading-tight tracking-wider text-gray-700">
              {language}
            </h2>
          </div>
          <pre
            id={`copy-${i}`}
            className="p-4 overflow-x-auto leading-normal tracking-wider bg-gray-100 border border-gray-300 rounded-md shadow-md"
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                snippet,
                Prism.languages.javascript,
                language.toLowerCase()
              ),
            }}
            onClick={() => {
              //   var copyText = document.querySelector(`#copy-${i}`);
              //   window.elem = copyText;
              //   console.log(copyText);
              //   //   document.execCommand("copy");
              navigator.clipboard.writeText(snippet).then();
            }}
          ></pre>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      snippets: [
        {
          title: "Array Separators",
          language: "Javascript",
          snippet: prettier.format(
            `
                function addSeparators(arr, sep) {
                    const newArr = arr.flatMap((x) => {
                        return [x, sep];
                    });
                    newArr.pop();
                    return newArr;
                }
            `,
            {
              parser: "typescript",
              plugins: [parser],
            }
          ),
        },
      ],
    },
  };
}

export default Snippets;
