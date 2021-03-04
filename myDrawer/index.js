import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { Text , TouchableOpacity, Button} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        
    );
}
/* const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'BIENVENIDO' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};*/

function HomeScreen(props) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style= {{fontSize:30}}>PANTALLA DE INICIO</Text>
          <Button
            title="Ir a Perfil de Ramiro"
            onPress={() =>
            props.navigation.navigate('Profile')
            }/>
      </View>
      
    );
  };
function ProfileScreen(navigation, route) {
    return <Text>This is Ramiro's profile</Text>;
  };

  export default MyDrawer