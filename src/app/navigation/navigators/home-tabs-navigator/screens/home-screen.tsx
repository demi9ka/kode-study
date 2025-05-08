import { HomeConnector } from '@screens/home';
import {StackScreenProps} from "@react-navigation/stack";
import {HomeTabsParamsList} from "../types";


type Props = StackScreenProps<
    HomeTabsParamsList,
    'HomeMain'
>;

export const HomeScreen = ({}: Props) => {
  return <HomeConnector />
}
