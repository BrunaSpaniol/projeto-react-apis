import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsListPage from "../pages/PokemonsListPage";
import PokedexPage from "../pages/PokedexPage";
import PokemonDetailPage from "../pages/PokemonDetailPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokemonsListPage />} />
        <Route path="/detail" element={<PokemonDetailPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        {/* <Route path="error" element={<ErrorPage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
