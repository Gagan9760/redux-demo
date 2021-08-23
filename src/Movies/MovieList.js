import axios from 'axios'
import { useEffect } from 'react'
import { removie, set, setMovie } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { img } from '../constants/images'
import { List, MovieContainer, MoviesList } from '../Styles/Middle'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { useState } from 'react'



const MovieList = () => {
    const [load,setLoad] = useState(false)
    console.log(process.env);
    let { path, url } = useRouteMatch();
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const fetchMovie = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`)
        // console.log(data.results);
        setLoad(true)
        dispatch(set(data.results))

    }
    useEffect(() => {
        fetchMovie()


    }, [])
    return (
        <>
        {load
        ?
        <MoviesList>
            {data.map(movie => {
                return (
                    <Link to={`${url}/${movie.id}`}>
                        <MovieContainer>
                            <img src={`${img}${movie.poster_path}`} ></img>
                            <h1 >
                                {movie.title}
                            </h1>
                        </MovieContainer>
                    </Link>
                )
            })}
        </MoviesList>
        :
        <h1>Loading...</h1>
            }
        </>
    )
}

export default MovieList
