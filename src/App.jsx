import Count from "./component/Count"
import { useDispatch } from "react-redux" 

export default function App() {
  const dispatch = useDispatch();

  return (
    
    <div>
      <div className="flex justify-center text-3xl font-bold h-screen items-center gap-3 bg-gray-400">
      <button onClick={e=> dispatch({type:"INCREMENT"})} className=" p-2 border-2 border-black ">INCREMENT</button>
      <Count/>
      <button onClick={e=> dispatch({type:"DECREMENT"})} className=" p-2   border-2 border-black ">DECREMENT</button>
    </div>
    </div>
  )
}