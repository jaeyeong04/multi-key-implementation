import "./App.css";
import { useCallback, useEffect } from "react";

function App() {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault(); //브라우저의 기본 동작 방지
      alert("Ctrl + S 단축키가 눌렸습니다!");
    }
    if (event.shiftKey && event.key === "J") {
      event.preventDefault(); //브라우저의 기본 동작 방지
      alert("Shift + J 단축키가 눌렸습니다!");
    }
  }, []);
  //키보드 이벤트 리스너 등록 및 해제
  useEffect(() => {
    //키보드 keydown 이벤트 리스너 등록 및 해제
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <div className="App">
      <header className="App-header">
        <p>단축키 테스터</p>
      </header>
      <p>
        Ctrl + S는 원래 기본 저장 단축키입니다. 하지만, 이 웹사이트에서는
        아닙니다ㅎㅎ
      </p>
      <p>나만의 단축키를 테스트 해볼까요? Shift + J를 눌러봅시다!</p>
    </div>
  );
}

export default App;
