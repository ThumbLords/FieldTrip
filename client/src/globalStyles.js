import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    font-family: 'Spartan', sans-serif;
    background-color: rgb(9, 11, 23);
    color: whitesmoke;
    height: 100vh;
  }
  //test
  header{
    background-color: rgb(9, 11, 23);
    padding: 10px 10px;
    margin: 0;
    overflow: hidden;
    box-shadow: 0px 0px 7px 0px #736bfb;
    opacity: 87%;
    backdrop-filter: blur(8px);
  }
  .logo{
    opacity: 100% !important;
  }
  .component{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .video-responsive{
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }
  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .youtube{
    padding-bottom: 250px;
  }
  .news-container{
    display: flex;
    position: center;
    align-items: center;
    padding-top: 3rem;
  }
  .card-top img{
    max-width: 200px;
  }
  #basicTabs{
      background: rgb(9, 11, 23);
      color: #736bfb;
      margin-top: 0;
      opacity: 100%;
      box-shadow: 0px 0px 7px 0px #736bfb;
    }
    #tab{
      color: whitesmoke;
      backdrop-filter: blur(8px);
    }
    #news-card-paper{
      background-color: rgb(9, 11, 23);
      opacity: 87%;
    }
    .MuiMobileStepper-dot{
      width: 6px;
      height: 6px;
      margin: 0 2px;
      border-radius: 50%;
      background-color: #5e5e5e;
    }
    .MuiMobileStepper-dotActive{
      background-color: #736bfb;
    }
    .MuiButton-root.Mui-disabled{
      color: #5e5e5e;
    }
    #arrows{
      font-size: 1.75rem;
    }
    .container, .container-lg, .container-md, .container-sm, .container-xl{
      max-width: 80%;
    }
    .MuiDialog-paperWidthSm{
      /* max-width: 600px;
      opacity: 85%;
      background-color: whitesmoke;
      box-shadow: 0px 0px 15px 5px #736bfb;
      box-shadow: 0px 0px 15px 5px rgb(115, 107, 251, 0.75); */

      max-width: 600px;
      /* opacity: 87%; */
      background-color: rgb(9, 11, 23);
      box-shadow: 0px 0px 13px 1px ghostwhite;
      color: ghostwhite;
      border-radius: 10px;
    }
    .MuiDivider-inset{
      margin-left: 90px;
      background-color: ghostwhite;
      opacity: 0.45;
    }
    .makeStyles-avatar-16{
      color: rgb(9, 11, 23);
      background-color: ghostwhite;
    }
    .MuiSelect-icon{
      color: ghostwhite;
    }
    .choose-avatar-btn {
      /* color: ghostwhite; */
      margin: 15px auto;
      display: flex;
      /* background-color: rgba(0, 0, 0, 0); */
      border-radius: 10px;
      backdrop-filter: blur(90px);
      box-shadow: 0px 0px 6px 2px ghostwhite;
      /* box-shadow: inset 0px 0px 7px 2px ghostwhite; */
      font-size: 0.95rem;
      font-weight: 500;
      color: ghostwhite;
      /* color: rgb(9, 11, 23); */
      text-align: center;
      /* width: 200px; */
      /* height: 60px; */
      overflow: hidden;
      /* background-image: linear-gradient(135deg, #FBFBFB 0%, #BFB3FB 38%, #736BFB 100%); */
      /* background-image: linear-gradient(135deg, transparent 0%, #737bfb 38%, transparent 100%); // !! // */
      /* background-image: linear-gradient(135deg, transparent 0%, transparent 50%, transparent 100%); */
      /* background-image: linear-gradient(135deg,rgba(115, 107, 251, 0) 0%,rgba(191, 179, 251, 0) 38%,rgba(115, 107, 251, 0) 100%); */
      background-size: 400% 400%;
      background-color: rgba(0,0,0,0);
      backdrop-filter: blur(144px);
      /* animation: transitioningBackground 10s ease infinite; */
      /* animation: transitioningBackground 6s cubic-bezier(0.5, -0.15, 0.45, 1.09) infinite; */
      /* transition: 0.6s; */
      /* transition: 0.6s, transform 600ms; */
      :hover{
        background-image: linear-gradient(to bottom, #FF00DD 0%, #B254FB 50%, #736BFB 100%);
        /* background-color: transparent; */
        /* animation: transitioningBackground 6s ease infinite; */
        box-shadow: 0px 0px 24px 8px #736BFB;
        font-weight: 600;
        /* width: 215px; */
        /* height: 75px; */
        cursor: help;
        transform: scale(1.1);
        z-index: 1;
        font-size: 1rem;
        /* backdrop-filter: blur(1px); */
        animation: transitioningBackground 6s infinite ease-in-out;
        transition: 0.6s;
      }
    }
    .access-ctrl {
      font-size: large;
      color: #736bfb;
      background: ghostwhite;
    }



    /* .color-changing{
      font-size: 1rem;
      font-weight: 600;
      color: ghostwhite;
      text-align: center;
      width: 200px;
      height: 60px;
      border-radius: 10px;
      overflow: hidden;
      background-image: linear-gradient(135deg, #FBFBFB 0%, #BFB3FB 38%, #736BFB 100%);
      background-size: 400% 400%;
      animation: transitioningBackground 10s ease infinite;
      transition: 0.6s;

      :hover{
        background-image: linear-gradient(to bottom, #FF00DD 0%, #B254FB 50%, #736BFB 100%);
        width: 215px;
        height: 75px;
        cursor: pointer;
      }
    } */

    @keyframes transitioningBackground {
      0% {
        background-position: 1% 0%;
      }
      50% {
        background-position: 99% 100%;
      }
      100% {
        background-position: 1% 0%;
      }
    }

    /* .choose-avatar-btn {
      position: relative;
      overflow: hidden;

      &::before{
        content: '';
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        width: 30px;
        height: 100%;
        top: 0;
        filter: blur(30px);
        transform: translateX(-100px) skewX(-15deg);
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.2);
        width: 30px;
        height: 100%;
        top: 0;
        filter: blur(5px);
        transform: translateX(-100px) skewX(-15deg);
      }
      &:hover {
        &::before,
        &::after {
          transform: translateX(300px) skewX(-15deg);
          transition: 0.7s;
        }
      }
    } */



`;
export default GlobalStyles;