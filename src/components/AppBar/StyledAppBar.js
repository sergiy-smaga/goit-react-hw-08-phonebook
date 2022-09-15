import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  line-height: 1.5;
  font-weight: 500;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  letter-spacing: 0.01em;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
    nav {
      display: flex;
      gap: 10px;
    }
  }

  button {
    padding: 8px 16px;
    border-radius: 4px;
    color: black;
    font-weight: 700;
    transition: 300ms ease;
    background-color: #bbb;
    border: 1px solid #bbb;
    cursor: pointer;
  }
  button:hover {
    background-color: #ddd;
    border: 1px solid #ddd;
  }
  a {
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    transition: 300ms ease;
  }
  a:hover {
    background-color: #ddd;
  }
  a:active {
    color: white;
    background-color: #bbb;
  }
`;
