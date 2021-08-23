import { useParams } from "react-router"
import axios from 'axios'
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remCrew, removie, setMovie,setCrew } from "../redux/action";
import {img,img2} from '../constants/images'
import { MovieContainer, MoviesList } from "../Styles/Middle";
const MovieItem = () => {
    const [load,setLoad] = useState(false)
    let {id} = useParams()
    console.log(id);
    const dispatch = useDispatch()
    const movie = useSelector(state=>state.movie)
    const crew = useSelector(state=>state.crew)
    const crewSlice = crew.slice(0,5)
    const fetchSingle= async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        fetchCrew()
        setLoad(true)
        console.log(data);
        dispatch(setMovie(data))
    }
    const fetchCrew = async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
        dispatch(setCrew(data.cast))
    }
    useEffect(() => {
      fetchSingle()
      
      return(()=> {
        dispatch(remCrew())  
        dispatch(removie())})
    },[])

    return (
        <>
        {load === true?
            <>
            <div>
                Movie Item:{id} 
            </div>
            <img src={`${img2}/${movie.backdrop_path}`} width='1000px'></img>
            <img src={`${img}/${movie.poster_path}`}></img>
            <h1>{movie.overview}</h1>
            <MoviesList>
            {crewSlice.map(member=>{
                return (
                    <MovieContainer>
                    <img src={`${img}/${member.profile_path}`}></img>
                    <h1>{member.name}</h1>
                    </MovieContainer>
                    
                )
            })}
            </MoviesList>
            </>
            :
            <h1>Loading...</h1>
        }
        </>
        
    )
}

export default MovieItem
