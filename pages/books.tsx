import { GetStaticProps } from "next";
import { useState } from "react";
import Notion from "notion-api-js";

const FEATURE_SEARCH_BAR = true;

type Genre =
  | "Fantasy"
  | "Young Adult"
  | "Nonfiction"
  | "History"
  | "Business"
  | "Science Fiction"
  | "Classic";

function Books({
  lastUpdated,
  books,
}: {
  lastUpdated: string;
  books: {
    title: string;
    author: string;
    series?: string;
    startDate: string;
    endDate?: string;
    genres: Genre[];
  }[];
}) {
  const [filters, setFilters] = useState({
    series: undefined,
    author: undefined,
    title: undefined,
    genre: undefined,
    universal: undefined,
  } as any);
  const [query, setQuery] = useState("");

  function handleQuerySubmission() {
    const cleanedQuery = query.toLowerCase().replace(/\s+/g, " ").split(" ");
    switch (cleanedQuery[0]) {
      case ":help":
        alert(
          'Type ":help" to get this dialogue again.\n\nPreface a search with ":series" to search by series.\n\nPreface a search with ":author" to search by author.\n\nPreface a search with ":title" to search by title.\n\nPreface a search with ":genre" to search by genre. Genres must be exact matches.\n\nPreface a search with ":universal" to search all filter fields at once. By default, any unprefaced search is considered to be a universal search.\n\nTo clear a filter field use the ":clear" prefix followed by the filter field you\'d like to clear. EX: ":clear :title". Additionally, typing ":clear" alone will clear all filter fields.'
        );
        break;
      case ":clear":
        switch (cleanedQuery[1]) {
          case undefined:
            setFilters({});
            break;
          case ":series":
            setFilters((prev) => ({ ...prev, series: undefined }));
            break;
          case ":author":
            setFilters((prev) => ({ ...prev, author: undefined }));
            break;
          case ":title":
            setFilters((prev) => ({ ...prev, title: undefined }));
            break;
          case ":genre":
            setFilters((prev) => ({ ...prev, genre: undefined }));
            break;
          case ":universal":
            setFilters((prev) => ({ ...prev, universal: undefined }));
            break;
          default:
            alert(
              "Looks like you tried to clear a filter param that doesn't exist. Your options are: :series, :author, :title, :genre, or :universal."
            );
        }
        break;
      case ":series":
        setFilters((prev) => ({
          ...prev,
          series: cleanedQuery.slice(1).join(" "),
        }));
        break;
      case ":author":
        setFilters((prev) => ({
          ...prev,
          author: cleanedQuery.slice(1).join(" "),
        }));
        break;
      case ":title":
        setFilters((prev) => ({
          ...prev,
          title: cleanedQuery.slice(1).join(" "),
        }));
        break;
      case ":genre":
        setFilters((prev) => ({
          ...prev,
          genre: cleanedQuery.slice(1).join(" "),
        }));
        break;
      case ":universal":
      default:
        setFilters((prev) => ({
          ...prev,
          universal: cleanedQuery.join(" "),
        }));
    }
    setQuery("");
  }

  return (
    <>
      {FEATURE_SEARCH_BAR && (
        <div className="sticky top-0 z-20 pt-2 mx-2 space-y-2 bg-white">
          <div className="flex flex-wrap items-center p-1 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
            <input
              placeholder="type `:help` to get started"
              value={query}
              onKeyUp={(e) => {
                if (e.which === 13) handleQuerySubmission();
              }}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-3 py-2 m-1 text-sm text-white bg-gray-800 border border-gray-600 rounded-md shadow-inner hover:bg-gray-900 focus:bg-gray-900 focus:shadow-outline-blue focus:outline-none"
            />
            {/* <button
              onClick={handleQuerySubmission}
              className="px-2 py-1 m-1 font-bold tracking-wider text-gray-700 hover:text-gray-800 focus:text-gray-800 focus:outline-none"
            >
              Search
            </button> */}
          </div>
          {(filters.title ||
            filters.author ||
            filters.series ||
            filters.universal ||
            filters.genre) && (
            <ul className="flex flex-col p-4 space-y-2 text-sm tracking-wider text-gray-800 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
              {filters.title && (
                <li>
                  • Restricting results to books with titles containing{" "}
                  <span className="px-2 py-1 text-xs text-white bg-gray-700 rounded-md">
                    {filters.title}
                  </span>
                  .
                </li>
              )}
              {filters.author && (
                <li>
                  • Restricting results to books with author names containing{" "}
                  <span className="px-2 py-1 text-xs text-white bg-gray-700 rounded-md">
                    {filters.author}
                  </span>
                  .
                </li>
              )}
              {filters.series && (
                <li>
                  • Restricting results to books with series names containing{" "}
                  <span className="px-2 py-1 text-xs text-white bg-gray-700 rounded-md">
                    {filters.series}
                  </span>
                  .
                </li>
              )}
              {filters.genre && (
                <li>
                  • Restricting results to books tagged with a genre matching{" "}
                  <span className="px-2 py-1 text-xs text-white bg-gray-700 rounded-md">
                    {filters.genre}
                  </span>
                  .
                </li>
              )}
              {filters.universal && (
                <li>
                  • Restricting results to books with <strong>any</strong>{" "}
                  metadata containing{" "}
                  <span className="px-2 py-1 text-xs text-white bg-gray-700 rounded-md">
                    {filters.universal}
                  </span>
                  .
                </li>
              )}
            </ul>
          )}
        </div>
      )}
      <div className="flex flex-col p-4 space-y-4">
        {books
          .filter((book) => {
            return (
              filters.series === undefined ||
              book.series?.toLowerCase().includes(filters.series)
            );
          })
          .filter((book) => {
            return (
              filters.author === undefined ||
              book.author.toLowerCase().includes(filters.author)
            );
          })
          .filter((book) => {
            return (
              filters.title === undefined ||
              book.title.toLowerCase().includes(filters.title)
            );
          })
          .filter((book) => {
            return (
              filters.genre === undefined ||
              book.genres.map((_) => _.toLowerCase()).includes(filters.genre)
            );
          })
          .filter((book) => {
            return (
              filters.universal === undefined ||
              `${book.series} ${book.title} ${book.author} ${book.genres.join(
                " | "
              )}`
                .toLowerCase()
                .includes(filters.universal)
            );
          })
          .reduce(
            (acc, book) => {
              if (acc[acc.length - 1].length === 0)
                acc[acc.length - 1].push(book);
              else if (
                acc[acc.length - 1][0].series === undefined ||
                acc[acc.length - 1][0].series !== book.series
              )
                acc.push([book]);
              else acc[acc.length - 1].push(book);

              return acc;
            },
            [[]]
          )
          .map((series, i) => {
            const bookComps = series.map((book, j) => (
              <div
                key={i.toString() + "-" + j.toString()}
                className="z-10 flex-none p-2 overflow-hidden tracking-wider text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-md "
              >
                <p className="text-xs text-gray-500">
                  {new Date(book.startDate).toDateString()}
                  {" - "}
                  {book.endDate
                    ? new Date(book.endDate).toDateString()
                    : "In Progress"}
                </p>
                <p className="space-x-2">
                  {book.genres.map((genre, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs text-white bg-gray-700 rounded-md shadow-sm cursor-pointer hover:bg-gray-800"
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          genre: genre.toLowerCase(),
                        }))
                      }
                    >
                      {genre}
                    </span>
                  ))}
                </p>
                <p
                  className="text-lg cursor-pointer hover:text-gray-800"
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      title: book.title.toLowerCase(),
                    }))
                  }
                >
                  {book.title}
                </p>
                <p
                  className="text-sm text-gray-500 cursor-pointer hover:text-gray-600"
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      author: book.author.toLowerCase(),
                    }))
                  }
                >
                  by {book.author}
                </p>
              </div>
            ));
            return series?.[0]?.series === null ||
              series?.[0]?.series === undefined ? (
              bookComps
            ) : (
              <div
                key={i}
                className="p-3 space-y-3 bg-gray-100 border border-gray-300 rounded-md shadow-md"
              >
                <p
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      series: series[0].series.toLowerCase(),
                    }))
                  }
                  className="z-0 p-2 mr-auto tracking-wider text-gray-100 bg-gray-700 border border-gray-900 rounded-md shadow-md cursor-pointer hover:bg-gray-800 magic-hover"
                >
                  {series[0].series}
                </p>
                {bookComps}
              </div>
            );
          })}
        <p className="text-xs text-center text-gray-500">
          Last updated: {new Date(lastUpdated).toDateString()}
        </p>
        <div className="self-center w-full max-w-md border-b border-gray-100 " />
        <p className="max-w-md mx-auto text-xs text-center text-gray-500">
          If you want to give me a book recommendation or want to read one of
          these books but can't find it anywhere, shoot me an email at&nbsp;
          <strong>alex@alexbruns.dev</strong>.
        </p>
        <div className="self-center w-full max-w-md border-b border-gray-100 " />
      </div>
      <div className="sticky bottom-0 z-20 h-0">
        <div className="absolute bottom-2 inset-x-2">
          {(filters.series ||
            filters.title ||
            filters.author ||
            filters.genre ||
            filters.universal) && (
            <button
              className="fixed z-20 px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:outline-none focus:shadow-outline left-2 bottom-2"
              onClick={() => setFilters({})}
            >
              Stop Filtering
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    recordMap: { collection, collection_view },
  } = await (
    await fetch("https://www.notion.so/api/v3/loadPageChunk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pageId: "4526e059-e57b-4665-b15e-0798ef1b6ceb",
        limit: 50,
        cursor: {
          stack: [
            [
              {
                table: "block",
                id: "4526e059-e57b-4665-b15e-0798ef1b6ceb",
                index: 0,
              },
            ],
          ],
        },
        chunkNumber: 0,
        verticalColumns: false,
      }),
    })
  ).json();
  const [collectionId] = Object.keys(collection);
  const [collectionViewId] = Object.keys(collection_view);
  const books = Object.entries(
    ((await (
      await fetch("https://www.notion.so/api/v3/queryCollection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collectionId,
          collectionViewId,
          query: {
            sort: [{ property: "D}R(", direction: "descending" }],
            aggregations: [{ property: "title", aggregator: "count" }],
          },
          loader: {
            type: "table",
            limit: 1000,
            searchQuery: "",
            userTimeZone: "America/Los_Angeles",
            userLocale: "en",
            loadContentCover: false,
          },
        }),
      })
    ).json()) as any).recordMap.block
  )
    .filter(([k, _]) => k != "4526e059-e57b-4665-b15e-0798ef1b6ceb")
    .map(([_, v]) => v)
    .map((v) => (v as any).value.properties)
    .map((properties) => ({
      author: properties[",O|&"][0][0],
      genres: properties[";|F`"][0][0].split(","),
      startDate: properties["D}R("][0][1][0][1].start_date,
      endDate: properties["D}R("][0][1][0][1].end_date || null,
      series: properties["N*\\="]?.[0]?.[0] || null,
      title: properties["title"][0][0],
    }));

  return {
    props: {
      lastUpdated: new Date(Date.now()).toString(),
      books,
    },
    unstable_revalidate: 15,
  };
};

export default Books;

// const books: {
//   title: string;
//   author: string;
//   series?: string;
//   startDate: string;
//   endDate?: string;
//   genres: Genre[];
// }[] = [
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: "J.K. Rowling",
//     series: "Harry Potter",
//     startDate: "17 June 2020",
//     endDate: "24 Jun 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
//   {
//     title: "Harry Potter and the Chamber of Secrets",
//     author: "J.K. Rowling",
//     series: "Harry Potter",
//     startDate: "24 Jun 2020",
//     endDate: "28 Jun 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
//   {
//     title: "Harry Potter and the Prisoner of Azkaban",
//     author: "J.K. Rowling",
//     series: "Harry Potter",
//     startDate: "28 Jun 2020",
//     endDate: "1 Jul 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
//   {
//     title: "Harry Potter and the Goblet of Fire",
//     author: "J.K. Rowling",
//     series: "Harry Potter",
//     startDate: "1 Jul 2020",
//     endDate: "7 Jul 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
//   {
//     title: "Harry Potter and the Order of the Phoenix",
//     author: "J.K. Rowling",
//     series: "Harry Potter",
//     startDate: "7 Jul 2020",
//     endDate: "11 Jul 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
//   {
//     title: "Harry Potter and the Half-Blood Prince",
//     author: "J.K. Rowling",
//     series: "Harry Potter",
//     startDate: "11 Jul 2020",
//     endDate: "13 Jul 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
//   {
//     title: "Harry Potter and the Deathly Hallows",
//     author: "J.K. Rowling",
//     series: "Harry Potter",
//     startDate: "13 Jul 2020",
//     endDate: "17 Jul 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
//   {
//     title:
//       "Dealers of Lightning: Xerox PARC and the Dawn of the Computer Age",
//     author: "Michael A. Hiltzik",
//     startDate: "17 Jul 2020",
//     endDate: "25 Jul 2020",
//     genres: ["Nonfiction", "History"],
//   },
//   {
//     title:
//       "Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs",
//     author: "John Doerr",
//     startDate: "25 Jul 2020",
//     endDate: "27 Jul 2020",
//     genres: ["Nonfiction", "Business"],
//   },
//   {
//     title: "The Lightning Thief",
//     series: "Percy Jackson & the Olympians",
//     author: "Rick Riordan",
//     startDate: "27 Jul 2020",
//     endDate: "29 Jul 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
//   {
//     title: "The Sea of Monsters",
//     series: "Percy Jackson & the Olympians",
//     author: "Rick Riordan",
//     startDate: "29 Jul 2020",
//     endDate: "30 Jul 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
//   {
//     title: "The Time Machine",
//     author: "H.G. Wells",
//     startDate: "31 Jul 2020",
//     endDate: "31 Jul 2020",
//     genres: ["Science Fiction", "Classic"],
//   },
//   {
//     title: "The Titan's Curse",
//     series: "Percy Jackson & the Olympians",
//     author: "Rick Riordan",
//     startDate: "31 Jul 2020",
//     endDate: "2 Aug 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
//   {
//     title: "The Battle of the Labyrinth",
//     series: "Percy Jackson & the Olympians",
//     author: "Rick Riordan",
//     startDate: "2 Aug 2020",
//     genres: ["Fantasy", "Young Adult"],
//   },
// ];
// books.reverse();
