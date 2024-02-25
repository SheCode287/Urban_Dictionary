const fstyle= {
  left:'0',
  bottom:'0',
  height: '9.5vh',
  width:'100%',
  backgroundColor:'coral',
  color: 'white',
  textAlign:'center'
}


function Footer() {
  return (
    <>
      <div style={fstyle}> 

      <h5>Copyright © {new Date().getFullYear()}</h5>
      <p>All Right Reserved by SheCode. <br />☏ Mobile: 001-234</p>
      </div>
    
    
    </>
  )
}

export default Footer
