import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps84479Navigator from '../features/Maps84479/navigator';
import Add-Item84478Navigator from '../features/Add-Item84478/navigator';
import Maps84474Navigator from '../features/Maps84474/navigator';
import UserProfile84470Navigator from '../features/UserProfile84470/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps84479: { screen: Maps84479Navigator },
Add-Item84478: { screen: Add-Item84478Navigator },
Maps84474: { screen: Maps84474Navigator },
UserProfile84470: { screen: UserProfile84470Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
