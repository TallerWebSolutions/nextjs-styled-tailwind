import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Title = styled('h1')`
  font-size: 50px;
  ${tw`text-red-500`}
`

const SuperTitle = styled(Title)`
  ${tw`text-blue-500`}
`

export default () => <SuperTitle>My page</SuperTitle>
