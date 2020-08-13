## Reactive Native로 날씨앱 만들기



#### 기본 설정

- Node.js 버전 10 이상

- npm 버전 6 이상(Node.js받으면 자동으로 받아짐)

- Android Studio

- cmd창에 $ npm install -g expo-cli 입력 -> Expo CLI가 받아짐
  - Expo CLI 
    - react native를 위한 설정파일(native files)이 없고 기본으로 셋팅돼있음 -> native files을 제어할 수 없음
    - 폰에서 앱을 테스트할 수 있음
    - 니꼴라스쌤도 expo를 쓴다고 함
    - react native보다 훨씬 많은 API를 제공함
    - Window에서 iOS앱을 빌드할 수 있음(대신 빌드해줌)
  - React Native CLI
    - react native를 수동으로 작업하고 싶을 때 사용(native files에 접근) 
    - 여러 설정파일을 추가로 설치해야 함
    - 폰에서 앱을 테스트하기 아주 귀찮음
    - Window에서 iOS앱을 빌드할 수 없음(Mac에서만 가능)



---



#### 프로젝트 생성

1. cmd에서 프로젝트파일을 넣을 디렉토리로 이동

   - $ cd documents

2. $ expo init fokin-weather

   - $expo init [저장소 이름]

3. blank 선택

4. github에 fokin-weather이름의 저장소 생성

5. cmd에서 fokin-weather 디렉토리로 이동 후 $ npm start

6. vscode 터미널에서 $ git remote add origin [저장소 주소]

   ​								  $ git pull origin master --allow-unrelated-histories

   - app.json : expo가 읽을 configuration 파일
   - App.js : 기본적인 리엑트 컴포넌트

7. 터미널에서 $ npm start

   - vscode터미널에서 하면 안되고 cmd창 띄워서 해야 함(원래는 돼야 하는데..)
   - expo developer tools(크롬에서 띄워야 제대로 뜸)이 자동으로 뜸

8. expo developer tools에서 시뮬레이터 동작

   - Run on Android device/emulator
     - Android Studio
   - Run on iOS simulator
     - XCode
       - Mac에서만 가능

9. 폰에서 앱 테스트할 수 있도록 연결

   - Android : Android폰이 expo앱에서 QR코드를 스캔하면, expo앱이 폰에서 프로젝트를 열고, 폰에서 앱을 테스트할 수 있음
   - iOS : iOS폰에서 expo앱으로 로그인 후, 터미널에서 $ expo login 치면, 로그인 요청이 옴

   - 폰과 컴퓨터가 같은 와이파이를 사용하는 걸 권장

 

---



#### Expo

- reload(새로고침)
  - live reloading : 변경사항을 저장하면 자동으로 expo가 전체 앱을 reload 후 시뮬레이터를 새로고침
  - hot reloading
  - 수동으로 새로고침 : 시뮬레이터에서 command or ctrl + R

- expo 개발자 메뉴

  - 시뮬레이터에서 command or ctrl+D 하면 열림

  - debug remote js 메뉴 
    - 앱이 좀 느려질 수 있음, 앱이 무거워짐
    - 앱 디버그를 도와줌
    - 크롬에서 앱의 로그를 볼 수 있음
    - 필요한 경우에만 사용(네트워크 요청, 콘솔로그 확인.., 크롬으로 작업하고 싶을 때, 뭐가 어떻게 돌아가는지 보고싶을 때)



---



#### 모바일앱 종류

1. fully native
   - Swift나 objective-c로 iOS앱 개발
     - Xcode
   - Java나 코틀린으로 Android앱 개발
     - Android Studio

2. 앱 기반 웹뷰
   - 웹사이트를 모바일앱에서 작동
     - Cordova나 PhoneGap에 의해 만들어진 native : 껍데기
       - 앱스토어에 올라가는 것
     - 앱에 뜨는 내용물 : HTML, CSS, JavaScript로 구성됨
   - 유저는 앱을 통해 반응형 웹사이트를 봄
   - ex) 아마존 앱



---



#### React Native

- React Native가 iOS/Android의 native 엔진에게 자바스크립트를 이용한 메세지를 보냄

  - iOS, Android는 자바스크립트 엔진이 있어서 자바스크립트를 실행할 수 있음

  - React Native는 연결을 이어주는 브릿지같은 역할

    - App.js파일  

      ```
       import{StyleSheet, Text, View} from "react-native";
      ```

      - React Native가 자바스크립트와, Android/iOS의 Text, View를 이어줌

- 개발자(나)는 컴포넌트(자바스크립트로 이루어짐)를 사용함

  - 컴포넌트 안에 항상 브릿지가 존재
    - 브릿지 : 누군가가 작성해놓은 Java/Swift코드로 iOS, Android가 이 컴포넌트를 이해하도록 만들어 주는 것
    - 브릿지는 항상 필요
      - 자바스크립트와 폰 사이의 커뮤니케이션을 위해 필요
      - 느린 성능 유발 가능(브릿지로 많은 데이터를 보내면 교통체증처럼 부하가 걸림)
      - 이는 React Native의 장점이자 단점

- 단순히 컨텐츠만 다루는 앱 개발에 적합

  - 인스타그램

- 복잡한 앱 개발에는 부적합

  - 3D 비디오 게임 앱
  - 브릿지가 느려지지 않도록 최적화에 시간을 많이 써야하기 때문

- App.js의 컴포넌트 살펴보기

  ```
  import { StatusBar } from 'expo-status-bar';
  import React from 'react'; 
  import { StyleSheet, Text, View } from 'react-native';
  
  export default function App() {
  
   return (
  
    <View style={styles.container}>
  
     <Text>Open up App.js to start working on your app!</Text>
  
     <StatusBar style="auto" />
  
    </View>
   );
  }
  
  const styles = StyleSheet.create({
  
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },
   
  });
  ```

  - <View>

    - React Native, iOS, Android세상에서는 모든게 View(View안에 모든걸 집어넣어야 함)

    - 웹사이트에서의 <div>와 비슷

    - ```
      <View style={styles.container}>
      
      ​    <Text>Hello!!!</Text>
      
      </View>
      ```

      

  - <Text>

    - 모든 텍스트는 <Text></Text> 컴포넌트 안에 들어가야 함

    - 웹사이트에서의 <span>과 비슷

    - ```
      <Text>Hello!!!</Text>
      ```

  - StyleSheet API

    - looks like CSS, 하지만 다른 부분도 많음

      - 아래 코드에 color:"white"를 추가해도 container안에 있는 텍스트의 색깔을 바꿔주지 못함
        - 웹사이트의 <div>에 style을 적용했을 경우엔 <div>안에 속한 텍스트의 색깔을 바꿔줌

    - ```
      const styles = StyleSheet.create({
      
       container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
       },
      
      });
      ```

    - 텍스트의 색깔을 바꾸려면 아래와 같이 수정

      ```
      export default function App(){
      
      return(
      
      <View style={styles.container}>
      ​	<Text style={styles.text}>Hello!!!</Text>
      </View>
      );
      }
      
      const styles=StyleSheet.create({
      
      container: {
      flex:1,
      backgroundColor:"red",
      alignItems:"center",
      justifyContent:"center"
      },
      
      text: {
      color:"white"
      }
      
      });
      ```

      

- 에러 발생시 에러메세지를 보면 어떤 문제가 발생했는지 알 수 있음
  - connection reset
    - expo를 kill하고 터미널에 $ npm start