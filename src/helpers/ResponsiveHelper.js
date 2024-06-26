import { Dimensions } from "react-native";


const designHeight=812;
const designWidth=375;

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;


export const getFractionalDeviceHeight=(fraction)=>deviceHeight*fraction;
export const getFractionalDeviceWidth=(fraction)=>deviceWidth*fraction;


//responsvie value for vertical scenario eg padding vertical etc
export const h=(num)=>{
    if (designHeight == null || deviceHeight == null) {
        throw ArgumentError('Both designHeight and deviceHeight must be provided.');
      }
      const scaleFactor = deviceHeight / designHeight;
      return num * scaleFactor;
}
//for horizontal eg padding horizontal
export const w=(num)=>{
    if (designWidth == null || deviceWidth == null) {
        throw ArgumentError('Both designWidth and deviceWidth must be provided.');
      }
      const scaleFactor = deviceWidth / designWidth;
      return num * scaleFactor;
}
