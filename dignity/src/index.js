import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
//import { gapi } from 'gapi-script'; // Import the gapi object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter >
  </React.StrictMode>
);

// const SPREADSHEET_ID = '1RimXeXxItN-lCw-NTtGfyT0Y7fGVGU2a4ed8tEBH050';
// const CLIENT_ID = 'http://902853765665-g96nl44ov96qrvlem7bf9cmpid6kk5qb.apps.googleusercontent.com (http://902853765665-g96nl44ov96qrvlem7bf9cmpid6kk5qb.apps.googleusercontent.com)';
// const SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';


// const useGoogleSheetsData = () => {
//   useEffect(() => {
//     gapi.load('client:auth2', () => {
//       gapi.client.init({
//         clientId: CLIENT_ID,
//         scope: SCOPE,
//       }).then(() => {
//         return gapi.auth2.getAuthInstance().signIn();
//       }).then(() => {
//         return gapi.client.sheets.spreadsheets.values.get({
//           spreadsheetId: SPREADSHEET_ID,
//           range: 'Sheet1', 
//         });
//       }).then(response => {
//         const data = response.result.values;
//       }).catch(error => {
//         console.error('Error fetching data:', error);
//       });
//     });
//   }, []);
// };

// export default useGoogleSheetsData;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
