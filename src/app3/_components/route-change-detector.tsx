"use client"

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const RouteChange = () => {
  let path: string = usePathname();
  useEffect(() => {
    console.log(path, 'changed');
  }, [path]);
  return (
    <div className='hidden'>RouteChange: {path}</div>
  )
}

export default RouteChange