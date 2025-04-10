import { Typography } from '@shared/ui/atoms'
import styled from 'styled-components/native'

type TDummyScreenProps = {
  title?: string
  children?: React.ReactNode
}

export const DummyScreen = ({ title, children }: TDummyScreenProps) => {
  return (
    <Wrapper>
      {title && <Typography>{title}</Typography>}

      {children && <>{children}</>}
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
