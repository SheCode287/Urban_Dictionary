import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Body from "./Components/Body"
import { words } from "./Data"




function data (item){
  return (
    < Body
        Id={item.id}
        Abbr={item.Abbreviation}
        Descr={item.Description}
     /> 

  )
}



function App() {
  return (
    <>
       <h1 style={{marginLeft:'40vw'}}>The Urban Dictionary</h1>
       <Header />
       <div className='ctr'>
        {words.map(data)}
        </div>
       <Footer />
       
       
    </>
  )
}

export default App

