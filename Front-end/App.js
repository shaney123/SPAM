
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Register from './screens/Register';
import Studentdashboard from './screens/StudentDashboard/Studentdashboard';
import Profiledashboard from './screens/StudentDashboard/Profiledashboard';
import Overlaymenu from './screens/StudentDashboard/components/Overlaymenu';

const Stack = createNativeStackNavigator();
 
const App =()=> {

  return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen  name='Splash' component={Splash}/>
         <Stack.Screen  name='Onboarding' component={Onboarding}/>
         <Stack.Screen  name='Login' component={Login}/>
         <Stack.Screen  name='Register' component={Register}/>
         <Stack.Screen name= 'Studentdashboard' component={Studentdashboard}/>
         <Stack.Screen name= 'Profiledashboard' component={Profiledashboard}/>
         <Stack.Screen name='Overlaymenu' component={Overlaymenu}/>
      </Stack.Navigator>
     </NavigationContainer>

  );
}

export default App;