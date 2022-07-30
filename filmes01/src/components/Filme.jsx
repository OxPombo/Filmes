import "../styles/filme.css";

import Card from "./Card";

export default function Filme(props) {
  return (
    <Card>
      <figure className="card-imagem">
        <img alt="poster"
          src={`http://image.tmdb.org/t/p/w500${props.umFilme.poster_path}`}
        />
        <figcaption className="card-titulo">{props.umFilme.title}</figcaption>
        <p className="card-descricao">
          {props.umFilme.overview}
        </p>
          <p className="card-avaliacao"> {props.umFilme.vote_average} {" "}

          <span className="material-icons">
            star
          </span>
          
        </p>
      </figure>
    </Card>
  );
}
