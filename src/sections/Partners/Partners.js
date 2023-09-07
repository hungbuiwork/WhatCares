import React from 'react'
import partners from '../../data/partners'

export const Partners = () => {
  return (
    <div>
      {
        partners.map((partner)=>{
          return <div>
            <a href = {partner.link} target='_blank'>{partner.name}</a>
            </div>
        })
      }
    </div>
  )
}
