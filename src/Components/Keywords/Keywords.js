import React from 'react'
import './Keywords.css'

const Keywords = ({ keywords }) => {
  return (
    <div>
        <ul className='keywords'>
            {keywords.map(k => <li key={k}>{k}</li>)}
        </ul>
    </div>
  )
}

export default Keywords