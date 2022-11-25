import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import useCachedResources from './hooks/useCachedResources'
import { MyStack } from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
	const isAppLoading = useCachedResources()
	if (!isAppLoading) {
	} else {
		return (
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		)
	}
}
