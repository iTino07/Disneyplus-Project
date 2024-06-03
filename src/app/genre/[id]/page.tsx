type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <>
      <div>
        <h1>
          Welcome the genre page with ID: {id} and genre: {genre}
        </h1>
      </div>
    </>
  );
}

export default GenrePage;
