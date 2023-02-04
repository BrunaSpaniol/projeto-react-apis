// import { useNavigate } from "react-router-dom"; => importa no componente/ page 

//const navigate = useNavigate() => isso vc chama no componente que vai ter essas funções.

export function handleHome(navigate) {
  navigate("/");
}

export function handlePokedex(navigate) {
  navigate("/pokedex");
}

export function handleDetail(navigate) {
  navigate("/detail");
}

//navigate(-1) => volta uma página
//navigate('/rota', {replace:true}) => não permite que volte para a pág. anterior
