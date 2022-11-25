import React from 'react'
import {
	View,
	StyleSheet,
	Text,
	Image,
	Button,
	ScrollView,
	Alert,
} from 'react-native'
import { DATA } from './../data'
import { THEME } from './../Theme'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../Components/AppHeaderIcon'

export const PostScreen = ({ navigation, route }) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({
			// in your app, you can extract the arrow function into a separate component
			// to avoid creating a new one every time you update the options
			headerRight: (props) => (
				<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
					<HeaderButtons {...props} HeaderButtonComponent={AppHeaderIcon}>
						<Item
							title='Bookmark'
							iconName='ios-star'
							onPress={() => console.log('press photo')}
						/>
					</HeaderButtons>
				</HeaderButtons>
			),
		})
	}, [navigation])
	const post = DATA.find((p) => p.id == route.params.postId)
	const onDelete = () => {
		Alert.alert('Delete Post', 'You ', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'OK',
				style: 'destructive',
				onPress: () => console.log('OK Pressed'),
			},
		])
	}
	return (
		<ScrollView style={styles.center}>
			<Image style={styles.image} source={{ uri: post.img }} />
			<View style={styles.textWrap}>
				<Text style={styles.title}>{post.text}</Text>
			</View>
			<Button title='delete' color={THEME.DANGER} onPress={onDelete} />
		</ScrollView>
	)
}

// PostScreen.navigationOptions = ({ route }) => {
// 	return { headerTitle: route.params.postId }
// }

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	textWrap: {
		paddingHorizontal: 20,
		marginVertical: 20,
	},
	title: {
		fontFamily: 'sans-regular',
	},
})
