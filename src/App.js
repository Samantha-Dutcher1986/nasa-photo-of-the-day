import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import "./App.css";
import DailyApp from './DailyApp'

const StyledApp = styled.div`
  background-color: ${pr => pr.theme.darkPurple};
  color: ${pr => pr.theme.white};
`

const StyledApiApps = styled.div`
  background-color: ${pr => pr.theme.black};
`

function App() {
  return (
    <StyledApp className="App">
      <h1>NASA API's</h1>
      <StyledApiApps>
        <DailyApp />
      </StyledApiApps>
    </StyledApp>
  );
}

export default App;
