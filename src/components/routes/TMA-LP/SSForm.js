import React from 'react'
import styled from 'styled-components'
import { SharpSpringFormEmbed } from 'wmk-lib'
 
const Wrap = styled.div`
  margin: 5vw 0;
`
 
const SSForm = props => {
  return (
    <Wrap>
      <SharpSpringFormEmbed 
        account={'MzawMDG3MDUyAwA'}
        formID={'MzNKSUtMNTLUTUk2SdI1Mbew1LVITDTRNTKzTDFMSzG2MDVKBgA'}
        width={'50%'}
        domain={'app-3QNKKO7IHS.marketingautomation.services'}
      />
    </Wrap>
  )
}
 
export default SSForm