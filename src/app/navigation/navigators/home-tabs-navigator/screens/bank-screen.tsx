import { BankConnector } from '@screens/bank';
import {StackScreenProps} from "@react-navigation/stack";
import {HomeTabsParamsList} from "../types";


type Props = StackScreenProps<
    HomeTabsParamsList,
    'BankMain'
>;

export const BankScreen = ({}: Props) => {
  return <BankConnector />
}
