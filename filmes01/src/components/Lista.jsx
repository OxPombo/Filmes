import "../styles/lista.css";
import { useEffect, useState } from "react";
import Filme from "../components/Filme";

export default function Lista() {
  const [filmes, setFilmes] = useState([]);

  const apiKey = "0a5575db42ba837b09f11c9c37529035";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=pt-BR`
    )
      .then(retornoFetch => retornoFetch.json())
      .then(dados => setFilmes(dados.results));

    /*  Filtra os objetos com Array, por causa do results */
  }, []);

  return (
    <div className="flexbox-conteiner">
      {filmes.map(filme => (
        <Filme umFilme={filme} />
      ))}

      {/*Filme umFilme = {}/> */}
    </div>
  );
}
