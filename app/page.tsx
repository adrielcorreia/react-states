'use client'

import './globals.css'
import Image from 'next/image'
import { sculptureList } from './data'
import { useRef, useState, useEffect, useLayoutEffect } from 'react'

export default function Home() {
  const [index, setIndex] = useState(0)
  const [details, setDetails] = useState(false)

  return (
    <main style={{padding: '2rem'}}>

      {
        <>
          <button onClick={() => {
            if (index < sculptureList.length-1) {
              setIndex(index+1)
            }
          }} style={{padding: '.25rem', marginBottom: '1rem'}}>Próximo</button>

          <h1>{sculptureList[index].name}</h1>
          <h3>por {sculptureList[index].artist}</h3>
          <p style={{paddingTop: '.5rem'}}>({index + 1} de {sculptureList.length})</p>
          
          <img
            style={{padding: '2rem 0'}}
            alt={sculptureList[index].alt}
            src={sculptureList[index].url}
            draggable={false}
          />

          <br/>
          <button onClick={() => setDetails(!details)} style={{padding: '.25rem'}}>Mostrar detalhes</button>

          {
            details && (<span style={
              {
                width: '500px', 
                display: 'block', 
                padding: '1rem 0'
              }}>
                {sculptureList[index].description}
                </span>)
          }
          
        </>
      }

    </main>
  )
}
