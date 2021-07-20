import './App.css'

// JSX 예제
function App() {
  return (
    // JSX
		<div>
			Hello <b>react</b>
		</div>
	);
}

// 요소가 여러 개일 경우 이를 감싸 줄 요소가 필요
// 아래는 요소가 2개임에도 감싸주지 않아 에러가 발생하는 예제 코드
// function App() {
// 	return (
// 		<h1> 리액트 안녕!</h1>
// 		<h2> 잘 작동하니?? </h2>
// 	);
// }

// 위의 코드 해결 방법
// <div>(...)</div> 또는 <Fragment>(...)</Fragment> 또는 <>(...)</>
// function App() {
//   return (
//     // 방법 1.
//     <div>
//       <h1> 리액트 안녕!</h1>
//       <h2> 잘 작동하니?? </h2>
//     </div>
//     // 방법 2.
//     <>
//       <h1> 리액트 안녕!</h1>
//       <h2> 잘 작동하니?? </h2>
//     </>
//     // 방법 3.
//     <Fragment>
//       <h1> 리액트 안녕!</h1>
//       <h2> 잘 작동하니?? </h2>
//     </Fragment>
// 	);
// }

// 자바스크립트 표현
// function App() {
// 	const name = '리액트';
// 	return (
//     <>
//       {/* JSX 내부에서 자바스크립트 표현식 쓰는 방법 */}
// 			<h1> {name} 안녕!</h1>
// 			<h2> 잘 작동하니?? </h2>
// 		</>
// 	)
// }

// If 문 대신 조건부 연산자
// function App() {
// 	const name = '리액트';
// 	return (
// 		<div>
//       {name === '리액트' ?         // name 변수에 값이 리액트인가요?
//         (<h1>리액트입니다.</h1>) :   // 맞으면 해당 문구 출력
//         (<h2>리액트가 아닙니다.</h2>) // 그렇지 않으면 해당 문구 출력
//       }
// 		</div>
// 	)
// }

// AND 연산자(&&)를 사용한 조건부 렌더링
// function App() {
//   // const name = '리액트';
//   const name = '리웩트';
// 	return (
//     // <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>
//     // && 연산자를 이용하여 간략하게 구현 가능
//     <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>
// 	)
// }

// undefined를 렌더링하지 않기
// undefined만 반환하여 렌더링하는 상황을 만들어선 안됩니다.
// function App() {
// 	const name = undefined;
// 	return name;
// }
// OR연산자(||) 연산자를 이용하여 쉽게 해결
// function App() {
// 	const name = undefined;
// 	return name || '값이 undefined입니다.';
// }
// 반면 JSX 내부에서 undefined를 렌더링하는 것은 괜찮습니다.
// function App() {
// 	const name = undefined;
// 	return <div>{name}</div>;
// }
// 변수 값이 undefined일 때 보여주고 싶은 값이 있다면 || 연산자 사용
// function App() {
// 	const name = undefined;
// 	return <div>{name || '리액트'}</div>
// }

// 인라인 스타일링
// function App() {
// 	const name = '리액트';
// 	const style = {
// 		// background-color는 - 문자를 빼고 카멜 표기법으로 작성
// 		backgroundColor: 'black',
// 		color: 'aqua',
// 		fontSize: '48px',  // font-size -> fontSize
// 		fontWeight: 'bold',  // font-weight -> fontWeight
// 		padding: 16  // 단위 생략시 px로 지정
// 	};
// 	return <div style={style}>{name}</div>
// }
// 아래와 같이도 가능
// function App() {
// 	const name = '리액트';
// 	return (
// 		<div 
// 			style={{
// 				// background-color는 - 문자를 빼고 카멜 표기법으로 작성
// 				backgroundColor: 'black',
// 				color: 'aqua',
// 				fontSize: '48px',  // font-size -> fontSize
// 				fontWeight: 'bold',  // font-weight -> fontWeight
// 				padding: 16  // 단위 생략시 px로 지정
// 			}}
// 		>
// 			{name}
// 		</div>
// 	)
// }

// class가 아닌 className
// function App() {
// 	const name = '리액트';
// 	return <div className="react">{name}</div>
// }

// 꼭 닫아야 하는 태그
// function App() {
// 	const name = '리액트';
// 	return (
// 		<>
// 			<div className="react">{name}</div>
//       <input></input> {/* <input /> -> self-closing  태그를 닫지 않으면 오류 발생*/}
// 		</>
// 	)
// }

// 주석
// function App() {
// 	const name = '리액트';
//   return (
//     <>
//       <div
//         className='react' 
//         // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있다.
//         /* 이러한 주석도 가능 */
//       >
//         {name}
//       </div>
//       // 하지만 시작태그가 아닐 때 이런 주석이나
//       /* 이런 주석은 페이지에 그대로 나타난다.*/
//       <input />
//     </>
// 	);
// }

export default App;