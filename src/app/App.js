import { Inventory } from "../features/inventory/Inventory";
import { Cart } from "../features/cart/Cart";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";
import { SearchTerm } from "../features/searchTerm/SearchTerm";

function App(props) {

  const { state, dispatch } = props;

  const visibleItems = getFilteredItems(state.inventory, state.searchTerm);

  // Render the Cart component below <Inventory />

  return (
    <div>

      <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />

      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={visibleItems}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart = {state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

    </div>
  );
};

//Helper Function:

function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default App;
