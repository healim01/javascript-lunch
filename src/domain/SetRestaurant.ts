import { Irestaurant } from "../types/restaurant";

export default function setRestaurant(restaurant: Irestaurant) {
  return {
    category: restaurant.category,
    name: restaurant.name,
    distance: restaurant.distance,
    description: restaurant.description,
    link: restaurant.link,
  };
}
