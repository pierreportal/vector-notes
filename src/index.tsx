import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clxja94zr00ts07wbm6vnpd7i/master',
  {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qYzFORUUzTUVaQk9EZzBNVGsyT1RVME1VTTRSa1ZEUkRRNFFVRkJOVVpHUmtaRk0wWkNRZyJ9.eyJodHRwczovL2dyYXBoY21zLmNvbS9sb2dpbnNDb3VudCI6MjcsImh0dHBzOi8vZ3JhcGhjbXMuY29tL2ZsYWdzIjp7fSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmh5Z3JhcGguY29tLyIsImF1ZCI6IjhWV1NkeVVodFpUNDNuQWlwcjJmaktSaGpKbXA4c1l5IiwiaWF0IjoxNzE4NjU0NTQxLCJleHAiOjE3MTkyNTkzNDEsInN1YiI6ImdpdGh1YnwzMTE2NTMxNCIsInNpZCI6ImpScW5xbkFhc1d2bmc2YzI0enVSSW1JZ0ZtTm1GWHBWIiwibm9uY2UiOiJaWThYR1hQamV2LnptSUdoTFQyX2tyalM4WVhUR3ZnZiJ9.YK4-YWkCucJZt1BE2iX02Q-YrFfaANK5aYOzyk4KzMV7ochTVF0UjkpTkna0ydry15T44i0rQ4VWT1cJjHT625wOn9D_dquqKxwVzopejZXoWwKcLUbWPUQn06mtbE6DNi93ev_20Pl0vNJHsRpkXYwUwcVDzDjszwj-6QJUOgB90sxbIv3dwIm1naVh3Xz37Xoac-5kfujIUuxZ79elCLoAflM_1RmTcd5uoN0Erax6RnS-1RwimImkl3UYZaFSCo0S3JRN-bpLr9DVA9-UGsWy8NhPMy4uQHiVCkYtcg1FaqsJeTmgiVoE7gDPdcmmdrFrVk3Ng2em6vMfHzJTFw'
    }
  }
);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
