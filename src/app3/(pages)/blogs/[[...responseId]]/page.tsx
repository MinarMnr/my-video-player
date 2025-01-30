import React from 'react'

const Conversation = ({params}: {params: {
  responseId: string[]
}}) => {
  return (
    <div>Conversation has {params?.responseId?.length} roots</div>
  )
}

export default Conversation