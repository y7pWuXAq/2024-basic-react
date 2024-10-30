import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 라이브러리 컴포넌트 가져오기
import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <NotificationList />
    </React.StrictMode>
);


/*
ReactDOM.render(
    <React.StrictMode>
        <Library />
    </React.StrictMode>,
document.getElementById('root')
)


setInterval(() => {
    ReactDOM.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>,
        document.getElementById('root')
    );
}, 1000);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <CommentList />
    </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
