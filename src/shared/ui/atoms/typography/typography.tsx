import { styled } from '@shared/ui/theme'
import { TypographyVariants } from '@shared/ui/theme/types'
import React, { ReactNode } from 'react'
import { StyleProp, TextStyle } from 'react-native'

type TTypographyAlignment = 'center' | 'left' | 'right'

const TextVariant = styled.Text<{
  $variant: TypographyVariants
  $align?: TTypographyAlignment
}>`
  font-family: ${({ theme, $variant }) =>
    theme.typography[$variant].fontFamily};
  font-size: ${({ theme, $variant }) => theme.typography[$variant].size};
  letter-spacing: ${({ theme, $variant }) =>
    theme.typography[$variant].letterSpacing};
  line-height: ${({ theme, $variant }) =>
    theme.typography[$variant].lineHeight};
  color: ${({ theme }) => theme.palette.text.primary};
  ${({ $align }) => $align && `text-align: ${$align};`}
`

type Props = {
  children: ReactNode
  align?: TTypographyAlignment
  variant?: TypographyVariants
  style?: StyleProp<TextStyle>
}

export const Typography = ({
  variant = 'body20',
  align,
  style,
  children,
}: Props) => {
  return (
    <TextVariant $align={align} $variant={variant} style={style}>
      {children}
    </TextVariant>
  )
}
