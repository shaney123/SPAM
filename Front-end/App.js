import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Register from './screens/Register';
import Studentdashboard from './screens/StudentDashboard/Studentdashboard';
import Profiledashboard from './screens/StudentDashboard/Profiledashboard';
import Overlaymenu from './screens/StudentDashboard/components/Overlaymenu';
import Instructordashboard from './screens/Instructor/Instructordashboard';
import Admindashboard from './screens/Admin/Admindashboard';
import Myclasses from './screens/Instructor/Myclasses';
import Mycourses from './screens/Instructor/Mycourses';
import PerformanceScreen from './screens/StudentDashboard/PerformanceScreen';
import InboxScreen from './screens/StudentDashboard/InboxScreen';
import Attendance from './screens/Instructor/Attendance';
import ClassesScreen from './screens/Instructor/ClasssesScreen';
import CoursesScreen from './screens/Instructor/CoursesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRouteName, setInitialRouteName] = React.useState('Splash');

  useEffect(() => {
    AsyncStorage.getItem('lastVisitedScreen')
      .then((lastVisitedScreen) => {
        if (lastVisitedScreen) {
          setInitialRouteName(lastVisitedScreen);
        }
      })
      .catch((error) => {
        console.error('Error checking last visited screen:', error);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash}  />
        <Stack.Screen name="Onboarding" component={Onboarding} initialParams={{ initialRouteName: initialRouteName }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Studentdashboard" component={Studentdashboard} />
        <Stack.Screen name="Profiledashboard" component={Profiledashboard} />
        <Stack.Screen name="Overlaymenu" component={Overlaymenu} />
        <Stack.Screen name="Instructordashboard" component={Instructordashboard} />
        <Stack.Screen name="Admindashboard" component={Admindashboard} />
        <Stack.Screen name ="PerformanceScreen" component={PerformanceScreen}/>
        <Stack.Screen name = "InboxScreen" component={InboxScreen}/>
        <Stack.Screen name = "Attendance" component = { Attendance}/>
        <Stack.Screen name = "Myclasses" component={Myclasses}/>
        <Stack.Screen name = "Mycourses" component={Mycourses}/>
        <Stack.Screen name = "ClassesScreen" component={ClassesScreen}/>
        <Stack.Screen  name = "CoursesScreen" component={CoursesScreen}/>


        
              
      </Stack.Navigator>


    </NavigationContainer>
  );
};


export default App;
