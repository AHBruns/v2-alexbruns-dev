import Title from "../components/Title";
import PageBorder from "../components/PageBorder";
import Link from "next/link";

function Books({}) {
  return (
    <PageBorder>
      <Title>Books</Title>
      <ul className="pl-6 list-disc">
        <Link href="/books/harry-potter-and-the-sorcerers-stone">
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
    </PageBorder>
  );
}

export default Books;
