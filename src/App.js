import './App.css';
import {useLocation, BrowserRouter, Route, Routes, useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Svg />} />
        <Route path="/:id" element={<Svg />} />
        <Route path="*" element={<p> wrong link </p>} />
      </Routes>
    </BrowserRouter>
  );
}

function Svg(){
  const [cradius, setCRadius] = useState(70)
  const [rradius, setRRadius] = useState(100)
  const [circleText, setCircleText] = useState("Click to learn about circles")
  const [rectangleText, setRectangleText] = useState(" Click to learn about rectangles")


  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location.hash)
  const params = useParams()

  console.log(params.id)
  useEffect( () =>
  {
  // check if id exists or is undefined
  if(params.id){
    console.log("shape url")
    if (params.id === "rectangle") {
      // makes rectangle big, circle small, and gives description of rect
      setCRadius(50)
      setRRadius(200)
      setCircleText("")
      setRectangleText("A rectangle is a shape with four edges and with four inner 90 degree angles")
      return
    }
    if (params.id === "circle"){
     // makes circle big, rectangle small, and gives description of circle
      setCRadius(200)
      setRRadius(50)
      setCircleText("")
      setRectangleText("A circle is a shape who's edge is always the same distance from it's center")
      return
    }
    // tells you if you have invalid urls
    console.log("shape url not 'circle' or 'square'")
  } else {
    // checks if functions runs when params.id is undefined
    console.log("I ran even though no shape url")
  }
  }
  , [params.id]
  )
  // above makes sure that useEffect only runs on first render and then if params.id changes

  console.log(params.id)
  return(
    <svg  width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <text x="750" y="100">{circleText}</text>
      <circle onClick={() => navigate("/circle")}  cx="750" cy="100" stroke="black" fill="transparent" r={cradius} stroke-width="5"/>
      <text x="250" y="100">{rectangleText}</text>
      <rect onClick={() => navigate("/rectangle")} x="250" y="10" width={rradius} height={rradius} stroke="black" fill="transparent" stroke-width="5"/>
    </svg>
  )
}

export default App;