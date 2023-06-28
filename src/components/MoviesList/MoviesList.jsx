import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css'

const MoviesList = ({ listTitle, moviesList }) => {
  const location = useLocation();

  return (
    <>
      {listTitle && (<h1 className={css.h1}>{listTitle}</h1>)}
      <ul className={css.list}>
        {moviesList.map(({ id, title }) => (
          <li className={css.listItem} key={id}>
            <Link className={css.link} to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
