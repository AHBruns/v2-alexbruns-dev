import React from "react";
import prettier from "prettier/standalone";
import parser from "prettier/parser-typescript";
import Prism from "prismjs";

function Snippets({ snippets }: { snippets: any[] }) {
  return (
    <div className="flex flex-wrap items-stretch p-2">
      <div className="w-full p-4 m-2 bg-gray-100 border border-gray-300 rounded-md shadow-md">
        <p className="text-xs text-center text-gray-700">
          Click on the code to copy it. All the snippets have been reasonably
          tested, but I make no guarantees. If you have a snippet you think
          should be on here, please email it to me at{" "}
          <strong>alex@alexbruns.dev</strong>.
        </p>
      </div>
      {snippets.map(({ title, language, snippet, source }, i) => (
        <div className="flex-auto min-w-min-content">
          <div className="h-full p-2 /max-w-full">
            <div
              key={i}
              className="flex flex-col h-full p-4 space-y-4 bg-gray-100 border border-gray-300 rounded-md shadow-md "
            >
              <div>
                <h2 className="text-sm leading-tight tracking-wider text-gray-700">
                  {language}
                </h2>
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-semibold leading-tight tracking-wider text-gray-700">
                    {title}
                  </h1>
                  <a
                    {...(source
                      ? {
                          href: source,
                        }
                      : {
                          onClick: () =>
                            alert(
                              "I made this one from scratch. So, I guess you'll just have to trust me."
                            ),
                        })}
                    target="_blank"
                    className="px-2 py-1 text-xs leading-tight tracking-wider text-white bg-gray-700 border border-gray-800 rounded-md shadow-md cursor-pointer hover:border-gray-900 hover:bg-gray-800"
                  >
                    Source
                  </a>
                </div>
              </div>

              <pre
                id={`copy-${i}`}
                className="flex-1 p-4 overflow-x-auto overflow-y-auto text-sm leading-normal tracking-wider text-gray-200 bg-gray-700 border border-gray-800 rounded-md shadow-md cursor-pointer max-h-56"
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(
                    snippet,
                    Prism.languages.javascript,
                    language.toLowerCase()
                  ),
                }}
                onClick={() => navigator.clipboard.writeText(snippet)}
              ></pre>
            </div>
          </div>
        </div>
      ))}
      <style jsx global>{`
        .token.keyword {
          color: rgb(210, 214, 220);
        }
        .token.function {
          color: white;
        }
        .token.operator {
          color: lightblue;
        }
        .token.string,
        .token.template-punctuation.string {
          color: #a9a9a9;
        }
        .token.interpolation-punctuation {
          color: #9bb9b1;
        }
        .token.regex {
          color: #9c865c;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      snippets: [
        {
          title: "Add Separators",
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
        {
          title: "Capitalize",
          language: "Javascript",
          source:
            "https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/capitalize.md",
          snippet: prettier.format(
            `
                function capitalize([first, ...rest]) {
                    return first.toUpperCase() + rest.join("")
                }
            `,
            {
              parser: "typescript",
              plugins: [parser],
            }
          ),
        },
        {
          title: "Capitalize Every Word",
          source:
            "https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/capitalizeEveryWord.md",
          language: "Javascript",
          snippet: prettier.format(
            `
                function capitalizeEveryWord(str) {
                    return str.replace(
                        /\\b[a-z]/g,
                        char => char.toUpperCase()
                    );
                }
            `,
            {
              parser: "typescript",
              plugins: [parser],
            }
          ),
        },
        {
          title: "Colorize",
          language: "Javascript",
          source:
            "https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/colorize.md",
          snippet: prettier.format(
            "\
                function colorize(...args) {\
                    return {\
                        black: `\\x1b[30m${args.join(' ')}`,\
                        red: `\\x1b[31m${args.join(' ')}`,\
                        green: `\\x1b[32m${args.join(' ')}`,\
                        yellow: `\\x1b[33m${args.join(' ')}`,\
                        blue: `\\x1b[34m${args.join(' ')}`,\
                        magenta: `\\x1b[35m${args.join(' ')}`,\
                        cyan: `\\x1b[36m${args.join(' ')}`,\
                        white: `\\x1b[37m${args.join(' ')}`,\
                        bgBlack: `\\x1b[40m${args.join(' ')}\\x1b[0m`,\
                        bgRed: `\\x1b[41m${args.join(' ')}\\x1b[0m`,\
                        bgGreen: `\\x1b[42m${args.join(' ')}\\x1b[0m`,\
                        bgYellow: `\\x1b[43m${args.join(' ')}\\x1b[0m`,\
                        bgBlue: `\\x1b[44m${args.join(' ')}\\x1b[0m`,\
                        bgMagenta: `\\x1b[45m${args.join(' ')}\\x1b[0m`,\
                        bgCyan: `\\x1b[46m${args.join(' ')}\\x1b[0m`,\
                        bgWhite: `\\x1b[47m${args.join(' ')}\\x1b[0m`\
                    };\
                }\
            ",
            {
              parser: "typescript",
              plugins: [parser],
            }
          ),
        },
        {
          title: "Copy To Clipboard",
          language: "Javascript",
          source:
            "https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/copyToClipboard.md",
          snippet: prettier.format(
            `
                function copyToClipboard(str) {
                    const el = document.createElement('textarea');
                    el.value = str;
                    el.setAttribute('readonly', '');
                    el.style.position = 'absolute';
                    el.style.left = '-9999px';
                    document.body.appendChild(el);
                    const selected =
                        document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                    if (selected) {
                        document.getSelection().removeAllRanges();
                        document.getSelection().addRange(selected);
                    }
                };
            `,
            {
              parser: "typescript",
              plugins: [parser],
            }
          ),
        },
        {
          title: "Deep Clone",
          language: "Javascript",
          source:
            "https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/deepClone.md",
          snippet: prettier.format(
            `
                function deepClone(obj) {
                    if (obj === null) return null;
                    let clone = Object.assign({}, obj);
                    Object.keys(clone).forEach(
                        key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
                    );
                    return Array.isArray(obj) && obj.length
                        ? (clone.length = obj.length) && Array.from(clone)
                        : Array.isArray(obj)
                        ? Array.from(obj)
                        : clone;
                };
            `,
            {
              parser: "typescript",
              plugins: [parser],
            }
          ),
        },
        {
          title: "ELO",
          language: "Javascript",
          source: "",
          snippet: prettier.format(
            `
                function elo([...ratings], kFactor = 32, selfRating) {
                    const [a, b] = ratings;
                    const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
                    const newRating = (rating, i) =>
                        (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
                    if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];

                    for (let i = 0, len = ratings.length; i < len; i++) {
                        let j = i;
                        while (j < len - 1) {
                        j++;
                        [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
                        }
                    }
                    return ratings;
                };
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
