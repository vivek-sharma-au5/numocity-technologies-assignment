import React,{useState} from 'react';
import './App.css';

const App = () => {

  const [lunchItems,setLunchItems] = useState([])
  const [msg ,setMsg] = useState("")
  const [msgClass,setMsgClass] = useState("")

  const handleInput = (event) => {
    const inputData = event.target.value.replace(/^[\s,]+|[\s,]+$|\s*(\s|,)[\s,]*/g, "$1")
    setLunchItems(inputData)
    setMsg("")
    setMsgClass("")
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(lunchItems)
      
      var itemsArray = lunchItems.split(",")
      if(itemsArray.length === 0){
        setMsg("Please enter data first !!!")
        setMsgClass("danger")
        console.log("length",itemsArray.length)
      }
      else if(itemsArray.length <= 3){
        setMsg("Enjoy!!!")
        setMsgClass("success")
        console.log("length",itemsArray.length)
      }else if(itemsArray.length === 4){
        setMsg("CareFull!!!")
        setMsgClass("warning")
        console.log("length",itemsArray.length)
      }else if(itemsArray.length >= 5){
        setMsg("Too Much!!!")
        setMsgClass("danger")
        console.log("length",itemsArray.length)
      }
     
  }
  return(
    <React.Fragment >
      <div className="App">
      <nav className="navbar navbar-light bg-dark" >
      <h3 style={{color:"whitesmoke"}}>Numocity Technologies</h3>
        </nav>
        {msg && msgClass ? ( <div className={`alert alert-${msgClass}`} role="alert">
          {msg}
        </div>):(<div></div>)}
       
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="container">
            <div className="row mt-3 col-5">
              <input type="text" className="form-control"  placeholder="Enter Lunch items !!!" onChange={handleInput}  />
            </div>
            <div className="row mt-3 col-5">
              <button type="submit" className="btn btn-success">Check if Too Much !!</button>
            </div>
           </div>
        </div>
       </form>
      </div>
        
    </React.Fragment>
  )
}
export default App;
