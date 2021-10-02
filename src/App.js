/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경함수] = useState(["남자 코트 추천", "강남 우동 맛집", "리액트 독학" ]);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState([0]);
  let [입력값, 입력값변경] = useState("");
  // function 제목바꾸기() {
  //   let newArray = [...글제목];
  //   newArray = newArray.sort();
  //   글제목변경함수(newArray);
  // }

  // function modalSW() {
  //   if(modal === false) {
  //     modal변경(true);
  //   } else {
  //     modal변경(false)
  //   }
  // }

  function 좋아요(i) {
    let copyArray = [...따봉]
    copyArray[i]++
    따봉변경(copyArray)
  }

  function 글제목추가(x) {
    let newArray2 = [...글제목];
    newArray2.unshift(x);
    글제목변경함수(newArray2);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      
      {
        글제목.map((글, i) => {
          return(
            <div className="list" key={i}>
              <h3 onClick = {() => {누른제목변경(i)}}>{글} <span onClick={() => {좋아요(i)}}>👍</span> {따봉[i]}</h3>
              <p>2월 18일 발행</p>
              <hr />
            </div>
          )
        })
      }

      {/* {입력값}<br />
      <input onChange = {(e) => {입력값변경(e.target.value)}}/><br /> */}
      <Profiles />
      <div className="publish">
        <input onChange = {(e) => {입력값변경(e.target.value)}}/>
        <button onClick = {() => {글제목추가(입력값)}}>저장</button>
      </div>


      <button onClick = {() => {modal변경(!modal)}}>버튼</button>
      {modal === true? <Modal 글제목={글제목} 누른제목={누른제목}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return(
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

class Profiles extends React.Component {
  constructor() {
    super();
    this.state = {name : "Tony", age: 100}
  }

  changeName() {
    this.setState( {name: "HURK"} )
  }

  render() {
    return(
      <div>
        <h3>This is my Profile</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick = { this.changeName.bind(this) }>이름 변경</button>
      </div>
    )
  }
}

export default App;
