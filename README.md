# 1. State와 Props로 할일 목록 앱 개발 (JSX 버전)

- 실제로는 이렇게까지 복잡하게 컴포넌트 구조를 구성하지 않습니다.
- Context API 실습을 위해 짠 구조입니다.

## 1.1 컴포넌트 구조

- App
  - TodoList Data
    - DataView
      - Title
      - TodoList
        - TodoItem
  - Todo Data
    - Input
      - TodoInput
        - TextInput
        - AddButton
      - InputButton

### 1.1.1 컴포넌트 분리 기준

- 이 구조는 프로젝트 마다 달라질 수 있음

- PageComponent : 데이터의 상태관리를 할 수 있도록 해보자
- UiComponent : 화면 또는 페이지를 구성하는 UI 로직을 가지도록 해보자
- ApiComponent : API 로직을 분리해보자

  flex-grow: 1; 다른 flex 아이템과 동일한 비율로 나누어 가짐
  flex-shrink: 1; 아이템의 공간이 부족할 때 줄어들 수 있는 정도 (비슷한 비율)
  flex-basis: 0; 아이템의 시작 크기 설정 (원래 크기 무시) grow, shrink에 따라 결정
