import bug from "../assets/types/bug.svg";
import dark from "../assets/types/dark.svg";
import dragon from "../assets/types/dragon.svg";
import eletric from "../assets/types/eletric.svg";
import fairy from "../assets/types/fairy.svg";
import fighting from "../assets/types/fighting.svg";
import fire from "../assets/types/fire.svg";
import flying from "../assets/types/flying.svg";
import ghost from "../assets/types/ghost.svg";
import grass from "../assets/types/grass.svg";
import ground from "../assets/types/ground.svg";
import ice from "../assets/types/ice.svg";
import poison from "../assets/types/poison.svg";
import psyc from "../assets/types/psyc.svg";
import rock from "../assets/types/rock.svg";
import steel from "../assets/types/steel.svg";
import water from "../assets/types/water.svg";
import normal from "../assets/types/normal.svg";

export const colors = {
  gray: "#729F92",
  orange: "#EAAB7D",
  blue: "#71C3FF",
  green: "#76A866",
  brown: "#BF9762",
};

export const getTypes = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return eletric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psyc;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return water;
  }
};
