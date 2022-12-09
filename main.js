import {Platform} from 'react-native';

var YouTube;
if (Platform.OS === 'android' || Platform.OS === 'ios') {
    YouTube = require('./YouTube');
}

export { YouTubeStandaloneIOS } from './YouTubeStandalone.ios';
export { YouTubeStandaloneAndroid } from './YouTubeStandalone.android';

export default YouTube;
