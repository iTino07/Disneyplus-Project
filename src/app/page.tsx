import MoviesCarousel from "@/components/MoviesCarousel";
import Image from "next/image";

export default await function Home() {

  // const upcomingMovies = await getUpcomingMovies();
  // const topRatedMovie = await getTopRatedMovie();
  // const popularMovies = await getpopularMovies();

  return (
    <main className="">
      <h1 className="">Build Disney</h1>

      {/* Carousel */}
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <div>
          <MoviesCarousel movies={[]} isVertical={false} />
        </div>
        {/* <div>  <MoviesCarousel  movies={...} title='' /> </div> */}
        {/* <div>  <MoviesCarousel  movies={...} title='' /> </div> */}
      </div>
    </main>
  );
};
