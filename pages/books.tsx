import Title from "../components/Title";
import PageBorder from "../components/PageBorder";
import Link from "next/link";

function Books({}) {
  return (
    <PageBorder>
      <Title>Books</Title>
      <ul className="pl-6 list-disc">
        <Link href="/books/harry-potter-and-the-sorcerer's-stone">
          <a>
            <li className="tracking-wider text-gray-700 text-lighter">
              {"Harry Potter and The Sorcerer's Stone"}{" "}
              <span className="text-xs text-gray-400">
                {new Date(1592204543000).toDateString()}
              </span>
            </li>
          </a>
        </Link>
      </ul>
      <p className="tracking-wider text-gray-700 text-lighter">
        Nothing here yet. Check back soon, I guess.
      </p>
    </PageBorder>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return {
//     props: {
//       books: [
//         {
//           timestamp: 1592204543000,
//           title: "Harry Potter and The Sorcerer's Stone",
//           url: "/books/" + "harry-potter-and-the-sorcerer's-stone",
//         },
//       ],
//     },
//   };
// }

export default Books;
