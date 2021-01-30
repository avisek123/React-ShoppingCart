import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { BrowserRouter, Route } from "react-router-dom";
import { DataProvider } from "./Components/DataProvider";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
export default function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <section>
            <Route>
              <Route exact path="/products" component={Products} />
              <Route exact path="/products/:id" component={Details} />
              <Route exact path="/cart" component={Cart} />
              {/* <Products /> */}
            </Route>
          </section>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}
