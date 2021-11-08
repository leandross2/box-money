import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #181B23;
    --shape: #353646;

    --white: #FFFFFF;
    --red: #e1546c;
    --green: #33CC95;
    --gray: #EEEEF2;
    --gray-light: #73737c;

    --blue: #3e79f7;
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75% // 15px
    }
    @media (max-width: 720px){
      font-size: 87.5% //14px
    }
  }

  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--white);
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600
  }

  button{
    cursor: pointer;
    transition: .2s filter;
    &:hover {
      filter: brightness(0.9)
    }
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  //react-modal
  .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items:center;
    justify-content:center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    svg{
      color: var(--white);
    }
    &:hover{
      filter: brightness(0.8)
    }
  }
`
