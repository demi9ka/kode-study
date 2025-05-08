import { Input } from '@shared/ui/atoms'
import { IconLoader, IconPhone } from '@shared/ui/icons'
import { Images } from '@shared/ui/images'
import { PrimaryButton } from '@shared/ui/molecules'
import { styled, useTheme } from '@shared/ui/theme'
import { Control, Controller } from 'react-hook-form'
import { TAuthPostOtpCode } from './model'
import { KeyboardView } from '@shared/ui/templates'

type AuthPhoneType = {
  handleSubmit: VoidFunction
  control: Control<TAuthPostOtpCode, any, TAuthPostOtpCode>
  isLoading: boolean
}

const Wrapper = styled.View`
  /* padding: ${({ theme }) => theme.spacing(2)}px; */
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
`
const Logo = styled.Image`
  width: ${({ theme }) => theme.spacing(11.25)}px;
  height: ${({ theme }) => theme.spacing(5)}px;
  margin: ${({ theme }) => `${theme.spacing(7)}px 0px`};
`
const Footer = styled.View`
  padding: ${({ theme }) => theme.spacing(2)}px;
  justify-content: flex-end;
  flex-grow: 2;
  width: 100%;
`

export const AuthPhone = ({
  control,
  handleSubmit,
  isLoading,
}: AuthPhoneType) => {
  const theme = useTheme()
  return (
    <KeyboardView>
      <Wrapper>
        <Logo source={Images.logo} />
        <Controller
          control={control}
          name='phone'
          render={({ field, fieldState }) => {
            return (
              <Input
                keyboardType='phone-pad'
                placeholder='Телефон'
                leftSection={
                  <IconPhone
                    color={
                      Boolean(fieldState.error?.message)
                        ? theme.palette.indicator.error
                        : theme.palette.accent.primary
                    }
                  />
                }
                rigthSection={isLoading ? <IconLoader /> : null}
                wrapperStyle={{
                  marginTop: 30,
                  marginHorizontal: 16,
                  borderRadius: 26,
                  backgroundColor: theme.palette.content.primary,
                }}
                isError={Boolean(fieldState.error?.message)}
                {...field}
              />
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
