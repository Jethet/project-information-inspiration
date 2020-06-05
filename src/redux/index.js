import redux, { createStore } from "redux";

export function createInfoCard() {
  return {
    type: "CREATE_INFOCARD",
    payload: infoCard,
  };
}

export function deleteInfoCard() {
  return {
    type: "DELETE_INFOCARD",
    payload: infoCard,
  };
}


export default function infoCardsReducer(infoCards = [], action) {
  switch (action.type) {
    case "CREATE_INFOCARD":
      return [...infoCards, action.payload];

    case "DELETE_INFOCARD": {
      const updatedCardList = infoCards.filter(
        (infoCard) => infoCard.toLowerCase() !== action.payload.toLowerCase()
      );
      return updatedCardList;
    }
    default:
      return infoCards
  }
}

store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
