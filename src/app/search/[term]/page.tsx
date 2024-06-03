import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termTouse = decodeURI(term);

  // API call to get the Searched Movie
  // API call to get the Popular movie

  return <div>welcome to search page: {termTouse} </div>;
}

export default SearchPage;
