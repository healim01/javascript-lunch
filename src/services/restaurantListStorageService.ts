import restaurantListHelper from "../domain/RestaurantListHelper";
import filterState from "../store/FilterStateStore";
import { Irestaurant } from "../types/restaurant";

const RestaurantListStorageService = {
  getData() {
    const restaurantList = localStorage.getItem("restaurantList");
    if (restaurantList) {
      return JSON.parse(restaurantList);
    }
    return [];
  },

  getfilteredData() {
    const filtereDataByCategory = restaurantListHelper.filterByCategory(
      filterState.getFilterInfo().filter,
      this.getData(),
    );
    return restaurantListHelper.sortBySelectedValue(
      filterState.getFilterInfo().sort,
      filtereDataByCategory,
    );
  },

  setData(restaurant: Irestaurant) {
    const prevData = this.getData();

    const newData = [...prevData, restaurant];

    localStorage.setItem("restaurantList", JSON.stringify(newData));
  },
};

export default RestaurantListStorageService;
