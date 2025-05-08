import { Typography } from '@shared/ui/atoms'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

type Props = {
  onSkip: VoidFunction
}

const SkipText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
const Wrapper = styled(TouchableOpacity)`
  padding-left: ${({ theme }) => theme.spacing(2)}px;
`

export const Skip = ({ onSkip }: Props) => {
  return (
    <Wrapper onPress={onSkip}>
      <SkipText variant='body15Regular'>Пропустить</SkipText>
    </Wrapper>
  )
}
