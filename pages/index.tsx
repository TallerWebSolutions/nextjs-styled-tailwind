import React from 'react'
import styled, {css} from 'styled-components'
import tw from 'tailwind.macro'

type Size = 'small' | 'base' | 'big'

const sizes: Record<Size, any> = {
  small: tw`text-sm`,
  base: tw`text-base`,
  big: tw`text-5xl`
}

interface Props {
  size?: Size
}

const Title = styled('h1')<Props>`
  ${tw`text-red-500`}
  ${({size}) => size &&
    css`
      ${sizes[size]}
    `}
`

const SuperTitle = styled(Title)`
  ${tw`text-blue-500`}
`

export default () => <SuperTitle size='small'>My page</SuperTitle>
