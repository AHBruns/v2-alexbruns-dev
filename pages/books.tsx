import { GetStaticProps } from "next";

type Genre = "Fantasy" | "Young Adult" | "Nonfiction" | "History" | "Business";

function Books({
  lastUpdated,
  books,
}: {
  lastUpdated: string;
  books: {
    title: string;
    author: string;
    startDate: string;
    endDate?: string;
    genres: Genre[];
  }[];
}) {
  return (
    <>
      <ul className="py-4 space-y-4">
        {books.map((book, i) => {
          return (
            <li
              key={i}
              className="p-2 tracking-wider text-gray-700 bg-gray-100 border border-gray-300 rounded-lg"
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
            </li>
          );
        })}
        <p className="text-xs text-center text-gray-500">
          Last updated: {new Date(lastUpdated).toDateString()}
        </p>
      </ul>
      <div className="max-w-md mx-auto border-b border-gray-100" />
      <p className="max-w-md py-4 mx-auto text-xs text-center text-gray-500">
        If you want to give me a book recommendation or want to read one of
        these books but can't find it anywhere, shoot me an email at&nbsp;
        <strong>alex@alexbruns.dev</strong>.
      </p>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const books: {
    title: string;
    author: string;
    startDate: string;
    endDate?: string;
    genres: Genre[];
  }[] = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      startDate: "17 June 2020",
      endDate: "24 Jun 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      startDate: "24 Jun 2020",
      endDate: "28 Jun 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J.K. Rowling",
      startDate: "28 Jun 2020",
      endDate: "1 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      author: "J.K. Rowling",
      startDate: "1 Jul 2020",
      endDate: "7 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      author: "J.K. Rowling",
      startDate: "7 Jul 2020",
      endDate: "11 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      author: "J.K. Rowling",
      startDate: "11 Jul 2020",
      endDate: "13 Jul 2020",
      genres: ["Fantasy", "Young Adult"],
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      author: "J.K. Rowling",
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
      author: "Rick Riordan",
      startDate: "27 Jul 2020",
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
