import React from 'react'
import styled from 'styled-components'
import { SharpSpringFormEmbed } from 'wmk-lib'
 
const Wrap = styled.div`
  margin: 5vw 25vw;
`
 
const SSForm = props => {
  return (
    <Wrap id="form-wrap">
      <SharpSpringFormEmbed 
        account={'MzawMDG3MDUyAwA'}
        formID={'MzNKSUtMNTLUTUk2SdI1Mbew1LVITDTRNTKzTDFMSzG2MDVKBgA'}
        width={'100%'}
        domain={'app-3QNKKO7IHS.marketingautomation.services'}
      />
    </Wrap>
  )
}
 
export default SSForm