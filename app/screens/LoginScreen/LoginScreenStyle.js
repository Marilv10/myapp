import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from 'ejercicio1/app/styles';
//import { ApplicationStyles } from 'ejercicio1/app/styles';

export default StyleSheet.create({
	 //...ApplicationStyles.screen,
	// ...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	container: {
    flex: 1,
    flexDirection: 'column',
  },
  body: {
    flex: 4,
    alignItems: 'center',
    marginTop: 10

  },
  header: {
    flex: 0.4,
    flexDirection: 'row',
    marginTop: 20
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerRight: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
});
