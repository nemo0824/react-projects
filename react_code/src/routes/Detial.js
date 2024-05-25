import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail(){
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState(null)
    
    console.log(id)
    const getMovies = async ()=>{
       const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
       
       
       console.log(json)
       console.log(json.data.movie)
       setMovie(json.data.movie)
       setLoading(false)
      
    }

    useEffect(()=>{
        getMovies();
    },[id])

    return <div>
        <div> {loading ? (<h1>Loading , 로딩중입니다</h1>) : (<div><h1>영화제목 : {movie.title}</h1>
            <img src={movie.background_image} alt={movie.id}></img>
            <p>상영시간 : {movie.runtime} 분</p>
            <p>개봉연도 : {movie.year} 년</p>
            <p>평점 : {movie.rating} 점</p>
            <p>
            <ul>장르 : {movie.genres.map((genre)=><li key={genre}>{genre}</li>)}</ul>
            </p>
        </div>
       
    )}

        </div>
        
        
        
    </div>
}

export default Detail;