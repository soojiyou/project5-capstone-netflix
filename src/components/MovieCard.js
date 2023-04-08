import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faUsers } from '@fortawesome/free-solid-svg-icons'



const MovieCard = ({ item }) => {
    const navigate = useNavigate();
    const showMovieDetail = (id) => { navigate(`/movies/${id}`); };
    const { genreList } = useSelector(state => state.movie);

    return (
        <div className='moviecard' onClick={() => showMovieDetail(item.id)} style={{ backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + ")" }}>

            <div className='overlay'>
                <h1>{item.title}</h1>
                <div>
                    {item.genre_ids.map(id =>
                        <Badge key={id} bg="danger">{genreList.find(item => item.id === id).name}</Badge>
                    )}
                </div>

                <div>
                    <span><FontAwesomeIcon icon={faFilm} /> {item.vote_average} </span>
                    <span> <FontAwesomeIcon icon={faUsers} /> {item.vote_count} </span>
                    <span className='adultfont'> {item.adult ? "Adult" : "Under 18"} </span>
                </div>
            </div></div>
    )
}





export default MovieCard