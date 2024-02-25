import React from 'react'

function Body(props) {
  return (
    <>
    <div className='ctr'>
      <div className='card'>
        <small>{props.Id}</small>
        <h4>{props.Abbr}</h4>
        <p>{props.Descr}</p>
      </div>
        
    </div>

    </>
  )
}

export default Body

 