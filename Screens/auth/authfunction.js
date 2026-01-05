import AsyncStorage from '@react-native-async-storage/async-storage';


   export const loginUser = async (user) => {
        try {
            const jsonValue = JSON.stringify(user);
            await AsyncStorage.setItem('login', jsonValue);
            return "v"
        } catch (e) {
            throw new Error(e);
            
        }
    };


export const loadUser = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('login');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(e)

        }
    };
export const disconnect = async () => {
  try {
    await AsyncStorage.removeItem('login')
  } catch(e) {
  }
  console.log('Done.')
}