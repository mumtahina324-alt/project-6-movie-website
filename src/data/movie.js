const data = [
  {
    id: crypto.randomUUID(),
    image: "1.webp",
    title: "Once Upon a Time",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    image: "2.webp",
    title: "Marriage Story",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy/Drama",
    rating: 3,
    price: 90,
  },
  {
    id: crypto.randomUUID(),
    image: "3.webp",
    title: "Pain & Gain",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime/Drama",
    rating: 4,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    image: "4.webp",
    title: "Parasite",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy/Drama/Thriller",
    rating: 4,
    price: 250,
  },
  {
    id: crypto.randomUUID(),
    image: "5.webp",
    title: "Iron Man",
    description:
      "After being held captive, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    genre: "Action/Adventure/Sci-Fi",
    rating: 5,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    image: "6.webp",
    title: "Joker",
    description:
      "A mentally troubled comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    genre: "Crime/Drama/Thriller",
    rating: 5,
    price: 180,
  },
];

function getAllMovies() {
  return data;
}
export { getAllMovies };
