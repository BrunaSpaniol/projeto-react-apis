import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { handleDetail, handleHome } from "../../routes/cordinator";

function PokemonsDetailPage() {
  const navigate = useNavigate();
  const headerProps = {
    page: "detail",
    buttonFunction: () => handleHome(navigate),
    textButton: "Excluir do Pokedex",
  };

  return (
    <>
      <Header headerProps={headerProps} />
      <h1>Detalhes</h1>
    </>
  );
}
export default PokemonsDetailPage;
