import { GetStaticProps } from "next";
import { useState } from "react";

const FEATURE_SEARCH_BAR = false;

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
  const [filters, setFilters] = useState({ series: undefined } as any);
  return (
    <>
      {FEATURE_SEARCH_BAR && (
        <div className="sticky top-0 z-20 pt-2 mx-2 bg-white">
          <div className="flex flex-wrap items-center p-1 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
            <input
              placeholder="type `:help` to get started"
              className="flex-1 px-3 py-2 m-1 text-sm text-white bg-gray-800 border border-gray-600 rounded-md shadow-inner hover:bg-gray-900 focus:bg-gray-900 focus:shadow-outline-blue focus:outline-none"
            />
            <button className="px-2 py-1 m-1 font-bold tracking-wider text-gray-700 hover:text-gray-800 focus:text-gray-800 focus:outline-none">
              Search
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col p-4 space-y-4">
        {books
          .filter((book) => {
            return (
              filters.series === undefined || book.series === filters.series
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
                className="relative z-10 p-2 overflow-hidden tracking-wider text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-md"
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
                      className="px-2 py-1 text-xs text-white bg-gray-700 rounded-md shadow-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </p>
                <p className="text-lg">{book.title}</p>
                <p className="text-sm text-gray-500">by {book.author}</p>
              </div>
            ));
            return series[0].series === undefined ? (
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
                      series: series[0].series,
                    }))
                  }
                  className="z-0 p-2 mr-auto tracking-wider text-gray-100 bg-gray-700 border border-gray-900 rounded-md shadow-md cursor-pointer magic-hover"
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
      <div className="sticky bottom-0 h-0">
        <div className="absolute bottom-2 inset-x-2">
          {filters.series && (
            <button
              className="fixed z-20 px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:outline-none focus:shadow-outline left-4 bottom-4"
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
  const books: {
    title: string;
    author: string;
    series?: string;
    startDate: string;
    endDate?: string;
    genres: Genre[];
  }[] = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      series: "Harry Potter",
      startDate: "17 June 2020",
      endDate: "24 Jun 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      series: "Harry Potter",
      startDate: "24 Jun 2020",
      endDate: "28 Jun 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J.K. Rowling",
      series: "Harry Potter",
      startDate: "28 Jun 2020",
      endDate: "1 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      author: "J.K. Rowling",
      series: "Harry Potter",
      startDate: "1 Jul 2020",
      endDate: "7 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      author: "J.K. Rowling",
      series: "Harry Potter",
      startDate: "7 Jul 2020",
      endDate: "11 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      author: "J.K. Rowling",
      series: "Harry Potter",
      startDate: "11 Jul 2020",
      endDate: "13 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      author: "J.K. Rowling",
      series: "Harry Potter",
      startDate: "13 Jul 2020",
      endDate: "17 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title:
        "Dealers of Lightning: Xerox PARC and the Dawn of the Computer Age",
      author: "Michael A. Hiltzik",
      startDate: "17 Jul 2020",
      endDate: "25 Jul 2020",
      genres: ["Nonfiction", "History"],
    },
    {
      title:
        "Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs",
      author: "John Doerr",
      startDate: "25 Jul 2020",
      endDate: "27 Jul 2020",
      genres: ["Nonfiction", "Business"],
    },
    {
      title: "The Lightning Thief",
      series: "Percy Jackson & the Olympians",
      author: "Rick Riordan",
      startDate: "27 Jul 2020",
      endDate: "29 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "The Sea of Monsters",
      series: "Percy Jackson & the Olympians",
      author: "Rick Riordan",
      startDate: "29 Jul 2020",
      endDate: "30 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "The Time Machine",
      author: "H.G. Wells",
      startDate: "31 Jul 2020",
      endDate: "31 Jul 2020",
      genres: ["Science Fiction", "Classic"],
    },
    {
      title: "The Titan's Curse",
      series: "Percy Jackson & the Olympians",
      author: "Rick Riordan",
      startDate: "31 Jul 2020",
      endDate: "2 Aug 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "The Battle of the Labyrinth",
      series: "Percy Jackson & the Olympians",
      author: "Rick Riordan",
      startDate: "2 Aug 2020",
      genres: ["Fantasy", "Young Adult"],
    },
  ];
  books.reverse();
  return {
    props: {
      lastUpdated: new Date(Date.now()).toString(),
      books,
    },
  };
};

export default Books;
