import { Input, Typography } from '@shared/ui/atoms'
import { IconClose, IconEye, IconEyeOff, IconLock1 } from '@shared/ui/icons'
import { Images } from '@shared/ui/images'
import { PrimaryButton } from '@shared/ui/molecules'
import { styled, useTheme } from '@shared/ui/theme'
import { Control, Controller } from 'react-hook-form'
import { TAuthPassword } from './model'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { KeyboardView } from '@shared/ui/templates'

type AuthPasswordType = {
  control: Control<TAuthPassword, any, TAuthPassword>
  isLoading: boolean
  handleSubmit: VoidFunction
  exitAlert: VoidFunction
}

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
`
const Logo = styled.Image`
  width: ${({ theme }) => theme.spacing(11.25)}px;
  height: ${({ theme }) => theme.spacing(5)}px;
  margin: ${({ theme }) => `0 0 ${theme.spacing(10)}px 0`};
`
const Footer = styled.View`
  padding: ${({ theme }) => theme.spacing(2)}px;
  justify-content: flex-end;
  flex-grow: 2;
  width: 100%;
`
const Header = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1.2)}px
    ${({ theme }) => theme.spacing(2)}px;
`
const Text = styled(Typography)<{
  $color: string
}>`
  color: ${({ $color }) => $color};
`

export const AuthPassword = ({
  control,
  handleSubmit,
  isLoading,
  exitAlert,
}: AuthPasswordType) => {
  const theme = useTheme()
  const [viewPassword, setViewPassword] = useState(false)

  return (
    <KeyboardView>
      <Wrapper>
        <Header>
          <TouchableOpacity onPress={exitAlert}>
            <IconClose color={theme.palette.text.secondary} />
          </TouchableOpacity>
        </Header>
        <Logo source={Images.logo} />

        <Controller
          control={control}
          name='password'
          render={({ field, fieldState }) => {
            return (
              <>
                <Text
                  align='center'
                  variant='body15Regular'
                  $color={
                    fieldState.error?.message
                      ? theme.palette.indicator.error
                      : theme.palette.text.primary
                  }>
                  {fieldState.error?.message || 'Введите пароль'}
                </Text>
                <Input
                  secureTextEntry={!viewPassword}
                  placeholder='Пароль'
                  leftSection={
                    <IconLock1
                      color={
                        Boolean(fieldState.error?.message)
                          ? theme.palette.indicator.error
                          : theme.palette.accent.primary
                      }
                    />
                  }
                  rigthSection={
                    <ViewPasswordChecker
                      view={viewPassword}
                      setView={setViewPassword}
                    />
                  }
                  wrapperStyle={{
                    marginTop: theme.spacing(3),
                    marginHorizontal: theme.spacing(2),
                    borderRadius: theme.spacing(26 / 8),
                    backgroundColor: theme.palette.content.primary,
                  }}
                  isError={Boolean(fieldState.error?.message)}
                  {...field}
                />
              </>
            )
          }}
        />
        <Footer>
          <PrimaryButton children='Войти' onPress={handleSubmit} />
        </Footer>
      </Wrapper>
    </KeyboardView>
  )
}

type ViewPasswordCheckerType = {
  view: boolean
  setView: (view: boolean) => void
}

const ViewPasswordChecker = ({ view, setView }: ViewPasswordCheckerType) => {
  const theme = useTheme()

  const changeView = () => {
    setView(!view)
  }
  return (
    <TouchableOpacity onPress={changeView}>
      {view ? (
        <IconEye color={theme.palette.text.secondary} />
      ) : (
        <IconEyeOff color={theme.palette.text.tertiary} />
      )}
    </TouchableOpacity>
  )
}
