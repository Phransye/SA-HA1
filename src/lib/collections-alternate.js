import collectionAnime from "@/assets/images/collection-anime.jpg";
import collectionGaming from "@/assets/images/collection-gaming.jpg";
import collectionJapanese from "@/assets/images/collection-japanese.jpg";

export const collections = [
  {
    id: 1,
    title: "Anime",
    description:
      "Joyas inspiradas en tus series favoritas. Sailor Moon, Attack on Titan, My Hero Academia y más.",
    image: collectionAnime,
    link: "/coleccion/anime",
  },
  {
    id: 2,
    title: "Gaming",
    description:
      "Diseños épicos de tus videojuegos legendarios. Zelda, Pokemon, Kingdom Hearts y más.",
    image: collectionGaming,
    link: "/coleccion/gaming",
  },
  {
    id: 3,
    title: "Cultura Japonesa",
    description:
      "Elegancia tradicional japonesa. Cherry blossoms, origami, samurai y cultura nipona.",
    image: collectionJapanese,
    link: "/coleccion/japonesa",
  },
];