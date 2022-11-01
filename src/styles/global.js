import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  height: 100vh;
  background: linear-gradient(
    90deg,
    #87839f 0%,
    hsl(263, 31%, 37%) 100%
    
    
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  border: 2px solid #fff;
  padding: 30px 40px;
  width: 40%;
  min-width: 500px;
}

.new-task-container {
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  display: flex;
}

.new-task-container input {
  flex: 3;
  font-size: 1rem;
  border: 2px solid #d1d3d4;
  border-radius: 5px;
  padding: 12px;
  font-weight: 500;
}

.new-task-container input:focus {
  outline: none;
  border-color: black;
}

.new-task-button {
  flex: 1;
  border-radius: 5px;
  font-weight: 500;
  height: 100%;
  font-size: 1rem;
  border: none;
  background-color: black;
  color: #fff;
  padding: 12px;
  margin-left: 12px;
  cursor: pointer;
}

.tasks-container {
  background-color: #fff;
  padding: 30px 20px;
  margin-top: 60px;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  margin-top: 6px;
}

.task-item i {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 12px;
  border-radius: 5px;
}

.task-item i:hover {
  cursor: pointer;
}

/* Utilities */
.error {
  border: 2px solid red !important;
}

.error::placeholder {
  color: red;
}

.completed {
  text-decoration: line-through;
}
`;