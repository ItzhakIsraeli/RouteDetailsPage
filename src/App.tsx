import React from 'react';
import './App.css';
import {Main} from "./Main/Main";
import {ThemeProvider} from "@mui/material/styles";
import {appTheme} from "./StyledComponents/StyledComponents";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={appTheme}>
                <Main/>
            </ThemeProvider>
        </div>
    );
}

export default App;
