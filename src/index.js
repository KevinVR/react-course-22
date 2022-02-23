import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ClickCounterPage from "./click/ClickCounterPage";
import AgifyPage from "./agify/AgifyPage";
import Homepage from "./Homepage";
import {RecoilRoot} from "recoil";
import ClickCounterStatePage from "./click/ClickCounterStatePage";

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/click" element={<ClickCounterPage/>}/>
                    <Route path="/agify" element={<AgifyPage/>}/>
                    <Route path="/recoil-1" element={<ClickCounterStatePage/>}/>
                    <Route path="/recoil-2" element={<ClickCounterStatePage/>}/>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
