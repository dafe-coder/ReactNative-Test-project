import React from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import { DATA } from '../data'
import { Post } from './../Components/Post'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../Components/AppHeaderIcon'
export const MainScreen = ({ navigation }) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({
			// in your app, you can extract the arrow function into a separate component
			// to avoid creating a new one every time you update the options
			headerRight: (props) => (
				<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
					<HeaderButtons {...props} HeaderButtonComponent={AppHeaderIcon}>
						<Item
							title='Take Photo'
							iconName='camera'
							onPress={() => console.log('press photo')}
						/>
					</HeaderButtons>
				</HeaderButtons>
			),
			headerLeft: (props) => (
				<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
					<HeaderButtons {...props} HeaderButtonComponent={AppHeaderIcon}>
						<Item
							title='Toggle drawer'
							iconName='ios-menu'
							onPress={() => console.log('press photo')}
						/>
					</HeaderButtons>
				</HeaderButtons>
			),
		})
	}, [navigation])
	const onOpenPost = (post) => {
		navigation.navigate('Post', { postId: post.id })
	}
	return (
		<View style={styles.wrapper}>
			<FlatList
				data={DATA}
				keyExtractor={(post) => post.id.toString()}
				renderItem={({ item }) => {
					return <Post item={item} onOpen={onOpenPost} />
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 10,
	},
})
