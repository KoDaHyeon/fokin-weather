import React from 'react';
import Loading from "./Loading"; //App.js와 같은 디렉토리에 있는 Loading.js파일을 import
import Weather from "./Weather";
import * as Location from "expo-location"; //expo홈페이지-documentation-location에서 복붙해옴 
import {Alert} from "react-native"; //경고창 띄우기 위해
import axios from "axios";

const API_KEY = "a938c44e3a0c4847c76fc4e9dbb92aaf";

export default class extends React.Component { 
  //class뒤에 클래스이름(App) 안써도 됨
  //class 클래스이름{} 정의하고 맨 뒤에 export default 클래스이름; 하는 것과 똑같은듯
  
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );//백틱(`)으로 묶어줘야함(변수를 문자열에 포함시키기 위해)
    //${latitude} : template strings(자바스크립트)(변수)
    //console.log(data); //object형태의 data를 콘솔에서 확인
    this.setState({isLoading:false, temp: data.main.temp}); //우리가 가져오는 온도는 data.main.temp
  };

  getLocation = async() => { //getLocation 함수
    try{
      await Location.requestPermissionsAsync();
      /*Location permission is required to do this operation..(사용자에게 permission을 요청해야한다)
      라는 경고문구가 뜨는걸 해결하기 위해 사용자에게 위치제공 permission을 요청하는 창을 띄움*/
      //console.log(location); //사용자 위치 좌표를 콘솔에 출력
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      //coords:사용자 위치좌표 object에 있는 coords object
      //latitude, longitude : coords object에 있는 object들
      this.getWeather(latitude, longitude);
      this.setState({isLoading:false});
      //위치를 API로 전송해서 날씨를 가져오기

    }catch(error){ //사용자가 permission을 주지 않을 경우 실행
      Alert.alert("Can't find you.", "So sad.."); //Can't find you:크게, So sad..:작게 뜸
    }

  }
  
  componentDidMount(){
    this.getLocation();
  }
 
  render() {
    const {isLoading, temp} = this.state;
    return isLoading? <Loading /> : <Weather temp={Math.round(temp)} />; 
    //isLoading이 true면 <Loading />, false면 null리턴
    //Math.round(temp) : 소수점까지 표현되는 온도를 반올림해서 1의자리까지만 출력하도록
    //temp={temp} : 소수점자리까지 출력
  }
}
