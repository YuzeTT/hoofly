import React from 'react'

function Back() {
  return (
    <div onClick={window.history.back(-1)}>返回</div>
  )
}

export default Back