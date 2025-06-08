import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { authorisation, fetchMovies, a, b} from "../../app/store/slice/moviesSlice"

function PopularList () {
 
 const {items, status, error} = useSelector((state)=> state.movies) // Получение данных
 const dispatch = useDispatch()
 console.log(items)


//  useEffect(()=>{
//    dispatch(authorisation())
//  }, [])

  return (
    <>
     <p>{items}</p>
     <button onClick={()=> dispatch(a([1]))} >click A</button>
     <button onClick={()=> dispatch(b())} >click B</button>
    </>
     
  )
}


export default PopularList;

//у меня есть шапка с кнопкой. Кнопка должна менять состояние на странице. Расширить store, что бы там была новая логика, то есть создать новый слайс
