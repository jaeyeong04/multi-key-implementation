# 웹 커스텀 단축키 구현 데모

> React의 Hook을 활용하여 성능 최적화에 초점을 맞춘 커스텀 단축키 구현 예제입니다.

- 이 레포지토리는 아래 블로그 포스팅의 예제를 담고 있습니다. 자세한 구현 설명 및 코드 분석은 아래 블로그를 참고해주세요.

### [[React] useEffect와 useCallback 함수로 웹 커스텀 단축키 구현하기](https://jaeyeong04.tistory.com/12)

- 배포 주소: https://jaeyeong04.github.io/multi-key-implementation/

---

## 실행 방법

```
git clone https://github.com/jaeyeong04/multi-key-implementation.git
npm install
npm start
```

---

## 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

---

## 주요 기능

|  단축키   |              동작              |                  목적                  |
| :-------: | :----------------------------: | :------------------------------------: |
| Ctrl + s  | alert창 표시 및 기본 동작 무시 | event.preventDefault()를 보여주는 예시 |
| Shift + j |          alert창 표시          |   커스텀 단축키 등록을 보여주는 예시   |
| Ctrl + ↑  |     count라는 state update     |        커스텀 단축키 응용 예시         |
