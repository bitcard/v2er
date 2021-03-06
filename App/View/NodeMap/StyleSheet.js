'use strict';

var React = require('react-native');

var {
	StyleSheet
} = React;

module.exports = StyleSheet.create({
	container: {
		backgroundColor: '#efefef',
		flex:1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	loadingText: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 10,
		marginRight: 10,
		color: '#666E74',
		flex:1
	},
	nodeView: {
		backgroundColor: '#ff6600',
		flex:1,
		alignItems: 'center',
		borderRadius: 10,
		height: 20
	},
	nodeText: {
		fontSize: 16,
		color: '#ffffff'
	}
});