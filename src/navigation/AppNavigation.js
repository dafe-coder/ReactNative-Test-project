import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from './../screens/MainScreen'
import { PostScreen } from './../screens/PostScreen'
import { THEME } from './../Theme'
import { getHeaderTitle } from './AppHeader'

const Stack = createStackNavigator()

export function MyStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: THEME.PRIMARY,
				},
				headerTintColor: '#fff',
			}}>
			<Stack.Screen name='Main' component={MainScreen} />
			<Stack.Screen
				name='Post'
				component={PostScreen}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
				})}
			/>
		</Stack.Navigator>
	)
}
