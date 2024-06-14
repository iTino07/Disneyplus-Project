import { Genres } from "../../typings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import next from "next";
import { headers } from "next/headers";
import Link from "next/link";

/* 
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex justify-center items-center">
          Genere <ChevronDown className="ml-1" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Seleziona il genere</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {data.genres.map((genre) => (
            <DropdownMenuItem className="cursor-pointer" key={genre.id}>
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                {genre.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
} */

async function GenreDropDown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=it";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.KEY_TMDB_API}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as Genres;

  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genere <ChevronDown className="ml-1" />
        <DropdownMenuContent>
          <DropdownMenuLabel>Seleziona il genere</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {data.genres.map((item) => (
            <DropdownMenuItem className="cursor-pointer" key={item.id}>
              <Link href={`/genre/${item.id}?genre=${item.name}`}>
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}

export default GenreDropDown;
