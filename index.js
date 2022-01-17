import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import configurePlansStore from '@app/store/plans';

configurePlansStore();

AppRegistry.registerComponent(appName, () => App);
