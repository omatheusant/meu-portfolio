import React from 'react'
import Wave from 'react-wavify'
import DivisorOndas from '../../assets/wavesOpacity.svg'


export const Divider = () => {
    return (

        <Wave fill='var(--light-color)'
            paused={false}
            style={{ display: 'flex', position: 'absolute', bottom: '0px', background: ''}}
            options={{
              height: 120,
              amplitude: 20,
              speed: 0.15,
              points: 1
            }}
      />    
    )
    }

    export const WavesOpacity = () => {
      return (
        <img src={DivisorOndas} alt='divisor' style={{rotate: '180deg'}}/>
      )
      }