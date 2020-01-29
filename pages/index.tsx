import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Title = styled('h1')`
  font-size: 50px;
  ${tw`text-red-500`}
`

export default () => <Title>My page</Title>
