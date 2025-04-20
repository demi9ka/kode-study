import {
    NavigationContainer
} from '@react-navigation/native'
import {RootNavigatorConnector} from '@app/navigation/navigators/root-navigator/root-navigator-connector'

export const NavigationConnector = () => {
    return (
        <NavigationContainer>
            <RootNavigatorConnector />
        </NavigationContainer>
    )
}
