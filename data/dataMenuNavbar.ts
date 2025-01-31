import { BiCameraMovie } from "react-icons/bi";
import { TbDeviceTv } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import { HiTrendingUp } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineBorderAll, MdOutlineCalendarMonth } from "react-icons/md";

export const dataMenuNavbar = [
  {
    IconNav: BiCameraMovie,
    nameNav: "Movies",
    description:
      "Embark on a cinematic adventure with our vast collection of movies. From timeless classics to the latest blockbusters, find your next favorite film today.",
    IconDown: FaChevronDown,
    menuDropDown: [
      {
        nameDropDown: "Now Playing",
        typeLink: "movie",
        description:
          "Catch the latest movies now playing in theaters near you. Experience the magic of cinema with current hits.",
        Icon: IoPlayOutline,
      },
      {
        nameDropDown: "Top Rated",
        typeLink: "movie",
        description:
          "Explore the pinnacle of cinematic excellence with our collection of top-rated movies. These films have been recognized for their outstanding storytelling, direction, and performances.",
        Icon: CiStar,
      },
      {
        nameDropDown: "Popular",
        typeLink: "movie",
        description:
          "Dive into the world of popular movies that have captured the hearts of audiences worldwide. From blockbuster hits to critically acclaimed films, discover what's trending in the cinematic universe.",
        Icon: IoMdHeartEmpty,
      },
      {
        nameDropDown: "Up Coming",
        typeLink: "movie",
        description:
          "Be the first to watch the latest movies before they hit the big screen. Discover the upcoming movies that everyone is talking about.",
        Icon: MdOutlineCalendarMonth,
      },
    ],
  },
  {
    IconNav: TbDeviceTv,
    nameNav: "Tv Shows",
    description:
      "Embark on a journey through the world of TV shows. From the latest hits to timeless classics, discover new stories and revisit your favorites.",
    IconDown: FaChevronDown,
    menuDropDown: [
      {
        nameDropDown: "Airing Today",
        typeLink: "tv",
        description:
          "Don't miss out on the latest episodes of your favorite TV shows airing today. Stay up-to-date with the newest content from networks and streaming platforms.",
        Icon: IoPlayOutline,
      },
      {
        nameDropDown: "Top Rated",
        typeLink: "tv",
        description:
          "Explore the pinnacle of television excellence with our collection of top-rated TV shows. These series have been recognized for their outstanding storytelling, acting, and production values.",
        Icon: CiStar,
      },
      {
        nameDropDown: "Popular",
        typeLink: "tv",
        description:
          "Dive into the world of popular TV shows that have captured the hearts of audiences worldwide. From binge-worthy series to critically acclaimed dramas, discover what's trending in the TV universe.",
        Icon: IoMdHeartEmpty,
      },
      {
        nameDropDown: "On The Air",
        typeLink: "tv",
        description:
          "Tune in to the latest buzz with shows currently on the air. From gripping dramas to laugh-out-loud comedies, watch what's captivating audiences right now.",
        Icon: IoPlayOutline,
      },
    ],
  },
  {
    IconNav: HiTrendingUp,
    nameNav: "Trending",
    description:
      "Stay in the know with the latest trends in movies and TV shows. Discover what's popular and what's on the rise.",
    IconDown: FaChevronDown,
    menuDropDown: [
      {
        nameDropDown: "Trending Now",
        typeLink: "trending",
        description: " Catch the all Trending now",
        Icon: MdOutlineBorderAll,
      },
      {
        nameDropDown: "Movies",
        typeLink: "trending",
        description:
          "Stay on the pulse of what's hot in the movie scene. See what films are making waves and capturing audiences around the globe.",
        Icon: BiCameraMovie,
      },
      {
        nameDropDown: "Tv Shows",
        typeLink: "trending",
        description:
          "Catch up with the world and see what TV shows are currently trending. From viral sensations to critically acclaimed series, find out what's capturing viewers' attention.",
        Icon: TbDeviceTv,
      },
    ],
  },
];
