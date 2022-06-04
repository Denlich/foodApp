import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from "./src/route/HomeStack";
import SavedStack from "./src/route/SavedStack";
import CartStack from "./src/route/CartStack";
import ProfileStack from "./src/route/ProfileStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="SavedStack" component={SavedStack} />
        <Tab.Screen name="CartStack" component={CartStack} />
        <Tab.Screen name="ProfileStack" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}