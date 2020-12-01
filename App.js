import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// React Navigation allows us to show different content to the user.
import ComponentsScreen from './src/screens/ComponentsScreen'; // import Components
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen, // Add our Components component
    List: ListScreen
  },
  {
    initialRouteName: "List", // Change the home screen to out Components component
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
