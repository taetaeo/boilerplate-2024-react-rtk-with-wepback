# React + Typescript + webpack with ReduxToolkit Boilerplate

- 본 프로젝트는 [React Boilerplate](https://github.com/taetaeo/react-ts-boilerplate-2024)에서 상태관리를 추가한 프로젝트입니다.

## 1. 폴더 구조

```
📦src
 ┣ 📂components
 ┣ 📂configs
 ┣ 📂dto
 ┣ 📂lib
 ┣ 📂redux
 ┣ 📂styles
 ┣ 📂utils
 ┣ 📂views
 ┣ 📂_commons
 ┣ 📂_mocks
 ┣ 📜app.tsx
 ┗ 📜index.tsx
```

> `_폴더명`처럼 `_` 가 붙은 것들은 변경이 되지 않은 파일들을 담아두는 공간입니다.

1. components

- 리액트 컴포넌트들을 저장하는 폴더입니다. 여기에는 프로젝트의 재사용 가능한 UI 요소들이나 작은 컴포넌트들이 위치할 수 있습니다.

2. configs

- 프로젝트의 설정 파일들을 저장하는 폴더입니다. 주로 환경 설정이나 서버 연결 정보와 같은 내용이 들어갑니다.

3. dto

- Data Transfer Objects의 약자로, 데이터 전송에 사용되는 객체들을 저장하는 폴더입니다. 주로 서버와 클라이언트 간의 데이터 교환에 사용됩니다.

4. lib

- 프로젝트에서 사용되는 라이브러리나 API 등을 저장하는 폴더입니다.

5. redux

- Redux 관련 파일들을 저장하는 폴더입니다. Redux 스토어 설정이나 액션, 리듀서 등이 위치할 수 있습니다.

6. styles

- 프로젝트의 스타일 시트 파일들을 저장하는 폴더입니다. 주로 CSS 파일이나 SCSS 파일들이 위치합니다.

7. utils

- 프로젝트에서 사용되는 유틸리티 함수들을 저장하는 폴더입니다. 주로 간단한 기능을 수행하는 함수들이 위치합니다.

8. views

- 애플리케이션의 뷰 컴포넌트들을 저장하는 폴더입니다. 주로 라우팅되는 페이지들이 위치하며, 각 페이지의 별도의 폴더가 있을 수 있습니다.

7. \_commons

- 기본형의 컴포넌트들을 정의합니다.
- 프로젝트 전반에서 공통으로 사용되는 타입 정의나 상수 값 등을 저장하는 폴더입니다.
- 내부에는 글로벌로 저장할 타입들 또는 프로젝트에 필요할 타입들을 저장합니다.

8. \_mocks

- 테스트 또는 개발 중에 사용되는 가짜 데이터나 가짜 서버를 구현하는 파일들을 저장하는 폴더입니다. 주로 테스트용 브라우저, 가짜 데이터베이스, 핸들러, 리졸버 등이 위치할 수 있습니다.

9. app.tsx

- 애플리케이션의 진입점 파일로, 라우팅이나 전역 상태 관리 등의 설정이 이루어집니다.

10. index.tsx

- React 애플리케이션의 렌더링을 위한 파일로, ReactDOM.render() 함수를 사용하여 앱을 실제 DOM에 렌더링합니다.

## 2. React Router Dom 설치

SPA 에서 Routing을 위한 라이브러리 최근 `v.6.4` 까지 출시 되었으며 이 프로젝트에서는 `v.^6.22.3` 를 사용합니다. 자세한 내용은 [공식문서](https://reactrouter.com/en/main/start/overview)를 통해 확인할 수 있습니다.

### 2.1. Router 설정

```tsx
// configs/router.config.tsx
import { createBrowserRouter } from 'react-router-dom';

export default createBrowserRouter([
  {
    path: "페이지 경로",
    element: <컴포넌트>,
    children: [하위 컴포넌트],
  },
]);


```

## 3. RTK 설치

```bash
# 1. npm
# Redux Toolkit 설치
$ npm install @reduxjs/toolkit

# Redux 설치
$ npm install react-redux


# 2. yarn
# Redux Toolkit 설치
$ yarn add @reduxjs/toolkit


# Redux 설치
$ yarn add react-redux
```

## 4. MSW 설치

> `MSW` 는 mocking service worker의 약자로 말 그대로 service worker를 이용하여 가짜 Api를 mocking 하는 역할을 합니다.

### 4.1. 패키지 설치

```bash
# 1. npm
# msw 설치
$ npm install msw

# 2. yarn
# msw 설치
$ yarn add msw
```

### 4.2. service worker 설정

```bash
# service worker 설정
$ npx msw init public/ --save

```

터미널에 다음의 명령어를 입력하면, `mockServiceWorker.js` 파일이 생성됩니다.

### 4.3. msw api 모킹 소개

![msw](https://github.com/taetaeo/react-ts-boilerplate-with-rtk-2024.git/public/images/msw.png)

### 4.4. 사용법

> /src/\_mocks 에서 확인할 수 있습니다.

- `resolver` : mock data를 위한 controller의 역할을 합니다.,
- `db` : 가상의 데이터 베이스

```tsx
import { useEffect } from 'react';

const HomeView = () => {
  useEffect(() => {
    fetch('/api/dummy')
      .then(response => response.json())
      .then(console.log)
      .catch(console.error);
  }, []);

  return <div>Home화면</div>;
};

export default HomeView;
```

이러한 방법으로 가짜의 데이터 통신을 할 수 있습니다.
