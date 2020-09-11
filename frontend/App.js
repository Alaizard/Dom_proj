import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, PureComponent } from 'react';
import { useColorScheme } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';
// import Navigation from 'components/navigation';
import { ColorScheme, DarkTheme, LightTheme } from './src/helpers/Themes';
// import { persistor, store } from 'store';

enableScreens();

 class App extends React.PureComponent {
   constructor(props) {
     super(props)
   }
   
   useEffect = () => {
     persistor(RNBootSplash.hide);
    }
    
  render = () => {
    scheme = useColorScheme('DARK');
    return (  
      <Provider store={store}>
        <NavigationContainer
          theme={scheme === ColorScheme.DARK ? DarkTheme : LightTheme}
        >
          <Navigation />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
