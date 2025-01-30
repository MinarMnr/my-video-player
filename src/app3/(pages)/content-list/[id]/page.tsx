import React from 'react'

const page = ({params}: {params: {id: string}}) => {
  return (
    <div>
      Showing data of Content {params?.id}
    </div>
  )
}

export default page