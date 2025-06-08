import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../app/store/slice/uiSlice";

function Favorites() {
  const dispatch = useDispatch();
  const isToggled = useSelector((state) => state.ui.isToggled);

  return (
    <header>
      <button onClick={() => dispatch(toggle())}>
        {isToggled ? "ON" : "OFF"} 
      </button>
      <p>Current state: {isToggled.toString()}</p> 
    </header>
  );
}

export default Favorites;