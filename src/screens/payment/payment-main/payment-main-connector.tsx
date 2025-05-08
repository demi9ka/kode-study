import { PaymentMain } from './payment-main'

type PaymentMainProps = {
  handlerPressMobile: VoidFunction
}

export const PaymentMainConnector = ({
  handlerPressMobile,
}: PaymentMainProps) => {
  return <PaymentMain handlerPressMobile={handlerPressMobile} />
}
