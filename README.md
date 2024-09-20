# 2024-basic-react
2024년 React 학습 리포지토리


### 직접 리액트 연동하기

- 간단한 웹 페이지 제작 후 리액트 연동하기

- 웹 페이지 제작
    ```html

        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <title>BLOG TEST</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link rel='stylesheet' type='text/css' media='screen' href='./css/styles.css'>
            <script src='main.js'></script>
        </head>
        <body>
            <h1>아래 버튼을 클릭하세요.</h1>
            <div id="root"></div> <!-- DOM Container (Root DON Node) -->

            <!-- 리액트 가져오기 -->
            <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
            <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

            <!-- 리액트 컴포넌트 가져오기 -->
            <script src="MyButton.js"></script>
        </body>
        </html>

    ```

- css 폴더에 styles.css 파일 생성 및 스타일 적용
    ```css
        h1 {
        color: darkgray;
        font-style: italic;
    }
    ```

- 간단한 리액트 컴포넌트 생성
    ```js
    function MyButton(props) {
        const [isClicked, setIsClicked] = React.useState(false);

        return React.createElement(
            'button',
            { onClick: () => setIsClicked(true) },
            isClicked ? 'Clicked!' : 'Click here!'
        )
    }

    const domContainer = document.querySelector('#root');
    ReactDOM.render(React.createElement(MyButton), domContainer);
    ```


### 새로운 웹사이트 제작 시 리액트 적용
- create-react-app(cra)
- 사용 조건
    - Node.js v14.0.0 이상
    - npm v6.14.0 이상
    - VS Code 설치

- VS Code 터미널에서 npx 명령어를 입력하여 이용 가능함
    ```
        npx create-react-app <프로젝트 이름>
    ```

- 간단 명령어
    ```py
        # 경로 변경
        cd my-app
        
        # 애플리케이션 실행
        npm start
    ```


### JSX
- A syntax extension to JavaScript
    - 자바스크립트의 확장 문법

- JSX = JavaScript + XML/HTML
- 예제
    ```jsx
        const element = <h1>Hello, World!</h1>;
    ```

- 역할
    - JSX 코드를 JavaScript로 변환
    - JSX의 역할을 하는 것이 React의 createElement 함수
        ```jsx
            React.createElement(
                type, 
                [props],
                [...children]
            )
        ```
    - createElement 파라미터
        - 유형 type
        - 속성 props
        - 자식엘리먼트 children

    - 예제 코드
        - JSX를 사용한 코드
            ```jsx
                const element = (
                    <h1 className="greeting">
                        Hello, World!
                    </h1>
                )
            ```
        - JSX를 사용하지 않은 코드 
            ```js
                const element = React.createElement(
                    'h1',
                    { className: 'greeting'},
                    'Hello, World!'
                )
            ```
        - React.create.Element() 함수의 결과로 다음과 같은 객체가 생성 됨
            ```js
                const element = {
                    type: 'h1',
                    props: {
                        className: 'greeting',
                        childern: 'Hello, World!'
                    }
                }
            ```

    - 비교
        - JSX를 사용한 코드
            ```jsx
                class Hello extends React.Component {
                    render() {
                        return <div>Hello {this.props.toWhat}</div>;
                    }
                }

                ReactDOM.render(
                    <Hello toWhat="World" />,
                    document.getElementById('root')
                )
            ```
        - JSX를 사용하지 않은 코드 
            ```javaScript
                class Hello extends React.Component {
                    render() {
                        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
                    }
                }

                ReactDOM.render(
                    React.createElement(Hello, { toWhat: 'World' }, null),
                    document.getElementById('root')
                )
            ```
        - 위 코드와 아래 코드는 모두 같은 코드임

- 장점
    - 간결한 코드
    - 가독성 향상
    - 가독성 향상으로 코드 유지보수가 쉬움
    - Injection Attacks 방어


### Component 만들기 및 렌더링
- Component는 Function Component와 Class Component로 나눌 수 있음

- Function Component
    - Function Component를 개선해서 사용 > 훅
    ```jsx
        function Welcome(props) {
            return <h1> 안녕, {props.name}</h1>;
        } 
    ```
    - 하나의 props 객체를 받아서 인삿말이 담긴 리엑트 엘리먼트를 리턴함

- Class Component
    - 함수 컴포넌트와 가장 큰 차이점은 React.Component를 상속 받아서 생성
    ```jsx
        class Welcome extends React.Component {
            render() {
                return <h1> 안녕, {this.props.name}</h1>;
            }
        }
    ```

- Component 생성 시 유의
    - Component의 이름은 항상 대문자로 시작해야 함
    - 소문자로 시작할 경우 DOM 테그로 인식하기 때문

- 렌더링
    ```jsx
        function Welcome(props) {
            return <h1> 안녕, {props.name}</h1>;
        }

        const element = <Welcome name = "인제" />;
        ReactDom.render(
            element,
            document.getElementById('root')
        );
    ```


### Component 합성과 추출
- 여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만들 수 있음
- 컴포넌트 안에 또 다른 컴포넌트를 사용 할 수 있음

- 복잡한 컴포넌트를 쪼개서 여러개의 컴포넌트로 쪼갤 수 있음
    - 재사용성이 올라가고 개발속도가 올라감

- 컴포넌트 추출
- 예시 코드
    ```jsx
        function Comment(props) {
            return (
                <div className="comment">
                    <div className="user-info">
                        <img className="avatar" 
                            src={props.author.avatarUrl}
                            alt={props.author.name} />
                        <div className="user-info-name">
                            {props.author.name}
                        </div>
                    </div>

                    <div className="comment-text">
                        {props.text}
                    </div>

                    <div className="comment-date">
                        {formatDate(props.date)}
                    </div>
                </div>
            );
        }
    ```
- Avatar 추출 : author > user 로 변경, 차후 재사용성 측면을 고려함
    ```jsx
        function Avatar(props) {
            return (
                <img className="avatar" 
                    src={props.user.avatarUrl}
                    alt={props.user.name} />
            );
        }
    ```

- Avatar 컴포넌트 추출 이후 예시코드의 변화
    ```jsx
        function Comment(props) {
            return (
                <div className="comment">
                    <div className="user-info">
                        /*
                        <img className="avatar" 
                            src={props.author.avatarUrl}
                            alt={props.author.name} />
                        */
                        /* 아래와 같이 변경 됨 */
                        <Avatar user={props.author} />
                        <div className="user-info-name">
                            {props.author.name}
                        </div>
                    </div>

                    <div className="comment-text">
                        {props.text}
                    </div>

                    <div className="comment-date">
                        {formatDate(props.date)}
                    </div>
                </div>
            );
        }
    ```

- UserInfo 추출 : 사용자의 정보를 담고 있는 부분, 처음에 추출했던 아바타 컴포넌트도 포함
    ```jsx
        function UserInfo(props) {
            return (
                <div className="user-info">
                    <Avatar user={props.author} />
                    <div className="user-info-name">
                        {props.author.name}
                    </div>
                </div>
            );
        }
    ```

- UserInfo 컴포넌트 추출 이후 예시코드의 변화
    ```jsx
        function Comment(props) {
            return (
                <div className="comment">
                    <UserInfo user={props.author}>
                    <div className="comment-text">
                        {props.text}
                    </div>

                    <div className="comment-date">
                        {formatDate(props.date)}
                    </div>
                </div>
            );
        }
    ```

###