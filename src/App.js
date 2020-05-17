import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import StudentResult from './component/studentresult/StudentResult'

function App() {
  //const { t } = useTranslation();
  return (
    <div className="App">
      <StudentResult></StudentResult>
    </div>
  );
}

export default App;
