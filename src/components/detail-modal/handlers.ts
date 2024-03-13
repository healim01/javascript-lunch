import restaurantListService from "../../services/restaurantListService";
import restaurantListStateStore from "../../store/RestaurantListStateStore";
import { Irestaurant } from "../../types/restaurant";

import DetailModal from "./DetailModal";

export const dimmerClickHandler = () => {
  const modal = document.getElementsByClassName("detail-modal")[0];
  const dimmer = document.getElementsByClassName("detail-modal-dackdrop")[0];

  dimmer.addEventListener("click", () => {
    modal.remove();
  });
};

const generateDetailModal = (id: string) => {
  DetailModal(
    restaurantListService.getListItemById(
      Number(id),
      restaurantListStateStore.getListData(),
    ) as Irestaurant,
  );
};

const detailModalOpenHandler = (restaurant: Element) => {
  restaurant.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const restaurantElement = target.closest(".restaurant") as HTMLElement;
    generateDetailModal(restaurantElement.id);

    dimmerClickHandler();
  });
};

export const clickRestaurantModal = () => {
  const restaurants = document.querySelectorAll(".restaurant__info");
  restaurants.forEach((restaurant) => {
    detailModalOpenHandler(restaurant);
  });
};
