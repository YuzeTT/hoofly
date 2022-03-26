import React from 'react'

function Center(props) {
  return (
    <div style={{maxWidth: '600px', margin: '0 auto', padding: '10px 15px'}}>
      {props.children}
    </div>
  )
}

export default Center