## Layout

- **Flex Direction**

  - View의 ''자식요소''들의 배치 방향을 결정

    - ```js
      <View style={styles.container}>
      	<View style={styles.item1} />
      	<View style={styles.item2} />
      </View>
      ```

      - 부모 View의 style의 flex direction이 자식 View의 배치방향을 결정  

  - React Native에서 모든 flex box의 flex direction의 디폴트는 column

    - ```js
      export default function App(){
      return(
      	<View style={styles.container}>
      		<Text>Hello!!</Text>
      		<Text>Hello!!!</Text>
      	</View>
      	);
      }
      
      const styles = StyleSheet.create({
      	container: {
      		flex: 1
      	}
      });
      ```

      

      출력:

      ```
      Hello!!
      Hello!!!
      ```

      

  - 컴포넌트들이 세로로 나열

  - 웹사이트에서는 모든 flex box의 flex direction의 디폴트는 row

    - 가로로 나열

  - 가로 배치로 변경 가능

    - ```js
      const styles = StyleSheet.create({
      	container: {
      		flexDirection:'row',
      		...
      	}
      	...
      })
      ```

  <br>

- **flex**

  - flex : 1
    
    - 모든 공간 사용
    
  - containor : 부모같은 역할. 큰 틀. 전체 화면

  - ```js
    import { StatusBar } from 'expo-status-bar';
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    
    export default function App() {
     return (
      <View style={styles.container}>
       <Viex style={styles.yellowView}></Viex>
       <View style={{flex:1, backgroundColor:"blue"}}></View>
       <StatusBar style="auto" />
      </View>
     );
    }
    
    const styles = StyleSheet.create({
     container: {
      flex: 1,
      backgroundColor: '#fff',
     },
    
     yellowView: {
      flex:1,
      backgroundColor:"yellow"
     }
    });
    ```

    - < View>에 style을 적용하는 방법은 2가지
      1. yellowView처럼 추가
      2. < View style={{...}}?></ View> 처럼 바로 적용
    
    - yellowView를 style로 가지는 View와 blueView를 style로 가지는 View모두 flex:1
    
      - 즉 두 View가 서로 모든 공간을 사용하려고 경쟁
    
      - 각자 원하는 만큼 차지
    
      - 자리경쟁하는 형제들이라고 생각
    
    - yellowView의 flex:1, blueView의 flex:2일 경우
    
      - 전체 화면(containor)을 노랑, 파랑 view가 1:2의 비율로 차지함
    
    - yellowView의 flex:2, blueView의 flex:2일 경우 
    
      - 전체 화면(containor)을 노랑, 파랑 view가 절반씩 차지
    
  - 레이아웃 코딩은 늘 flex로 하는 걸 권장함
  
    - 기기의 화면크기가 어떻든 자동으로 맞춰지기 때문
  

 <br>


- **Align Items**

  - 배치방향(Flex Direction)으로부터 수직한 정렬

    - Flex Direction: "column"(세로 배치)면 가로 정렬 
    - Flex Direction: "row"(가로 배치)면 세로 정렬

  - View의 "자식요소"들의 정렬을 결정(?)

  - 속성

    <img width="300" alt="align items" src="https://user-images.githubusercontent.com/43772750/88948718-3b1b6080-d2cd-11ea-883f-d853e400d33d.png">
  
    - flex-start : 가로 정렬을 기준으로 좌측(시작점)
    - center :  가로 정렬을 기준으로 가운데
    - flex-end : 가로 정렬을 기준으로 우측(끝점)
    - stretch : 정렬 방향의 크기를 지정하지 않았을 때 flex-start지점부터 flex-end지점까지 쭉 늘림
    - 정렬 방향의 값을 지정해주지 않아야 함
    - baseline

    

    - Flex Direction: "row" 일 때
  
      - ```js
        import React, {Component} from 'react';
        import {StyleSheet, Text, View} from 'react-native';
        type Props = {};
        
        export default class App extends Component<Props> {
          render() {
        ​    return (
        ​      <View style={styles.container}>
        ​        <View style={styles.item1}/>
        ​      </View>
        ​    );
          }
        }
        
        const styles = StyleSheet.create({
          container: {
        ​    flex: 1,
        ​    flexDirection:'row',
        ​    alignItems:'flex-start',
          },
          item1: {
        ​    width:50,
        ​    height:50,
        ​    backgroundColor: 'red',
          },
      });
        ```

        <img width="250" alt="flex-start" src="https://user-images.githubusercontent.com/43772750/88948924-833a8300-d2cd-11ea-8678-639f47e1fa45.png">
  
      - ```js
        const styles = StyleSheet.create({
          container: {
        ​    flex: 1,
        ​    flexDirection:'row',
        ​    alignItems:'center',
          },
          item1: {
        ​    width:50,
        ​    height:50,
        ​    backgroundColor: 'red',
          },
      });
        ```

        <img width="250" alt="center" src="https://user-images.githubusercontent.com/43772750/88949013-a107e800-d2cd-11ea-95ae-22e1bd4e4371.png">
  
      - ```js
        const styles = StyleSheet.create({
          container: {
        ​    flex: 1,
        ​    flexDirection:'row',
        ​    alignItems:'flex-end',
          },
          item1: {
        ​    width:50,
        ​    height:50,
        ​    backgroundColor: 'red',
          },
      });
        ```

        <img width="250" alt="flex-end" src="https://user-images.githubusercontent.com/43772750/88949087-ba109900-d2cd-11ea-9229-ed991e7f1040.png">
  
      - ```js
        const styles = StyleSheet.create({
          container: {
        ​    flex: 1,
        ​    flexDirection:'row',
        ​    alignItems:'stretch',
          },
          item1: {
        ​    width:50,
        ​    //height:50, // stretch는 정렬 방향의 값을 지정해주지 않아야 한다
              			  // flex direction='row'이므로 정렬방향은 세로
              //따라서 height는 지정x
        ​    backgroundColor: 'red',
          },
      });
        ```
  
        <img width="250" alt="stretch" src="https://user-images.githubusercontent.com/43772750/88949148-cf85c300-d2cd-11ea-8ac3-a0434acbf236.png">

<br>

- **Justify Content**

  - Flex Direction의 진행 방향과 같은 방향으로 정렬

  - View의 "자식요소"들의 정렬을 결정(?)

  - 속성

    - flex-start : 세로 정렬을 기준으로 시작점

    - center : 세로 정렬을 기준으로 가운데

    - flex-end : 세로 정렬을 기준으로 끝점

    - space-between : 양 끝을 기점으로 요소간의 거리를 균등하게 정렬

    - space-around : 양 끝을 기점으로 '공백을 포함한 상태로' 균등하게 정렬

      - <img width="300" alt="justify" src="https://user-images.githubusercontent.com/43772750/88949252-f80dbd00-d2cd-11ea-9349-b32b627bc115.png">

      - space-between

        <img width="250"  alt="space-between" src="https://user-images.githubusercontent.com/43772750/88949347-14115e80-d2ce-11ea-8e20-56d3f7f983ce.png">

      - space-around

        <img width="250" alt="space-around" src="https://user-images.githubusercontent.com/43772750/88949396-24293e00-d2ce-11ea-8b49-8ede58f0b5fb.png">
  
      - ```js
        import React, {Component} from 'react';
        import {StyleSheet, Text, View} from 'react-native';
        
        type Props = {};
        export default class App extends Component<Props> {
          render() {
            return (
              <View style={styles.container}>
                <View style={styles.item1} />
                <View style={styles.item2} />
                <View style={styles.item3} />
              </View>
            );
          }
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'space-between',
          },
          item1: {
            width:50,
            height:50,
            backgroundColor: 'red',
          },
          item2: {
            width:50,
            height:50,
            backgroundColor: 'yellow',
          },
          item3: {
            width:50,
            height:50,
            backgroundColor: 'green',
          },
      });
        ```
  
        