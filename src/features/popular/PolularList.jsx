import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchMovies } from "../../app/store/slice/moviesSlice"

function PopularList () {
 
 const items = useSelector((state)=> state.movies.items) // Получение данных
 const dispatch = useDispatch()
 console.log(items)


 useEffect(()=>{
   dispatch(fetchMovies)
 }, [])

  return (
      <p>1</p>
  )
}


export default PopularList;
