import styled from "styled-components";

import PrevIcon from "../../assets/logos/prev.svg";
import NextIcon from "../../assets/logos/next.svg";
import IndicatorIcon from "../../assets/logos/circle.svg";

export const Container = styled.div`
  width: 100%;
  .containerImg{
    display: flex;
    justify-content: center;
    img {
      width: 85%;
    }
  }
  #controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 5;
    width: 100%;
    margin: 100px 0;
    .next-button {
      width: 30px;
      height: 30px;
      background: url(${NextIcon}) center no-repeat;
      background-size: 25px 25px;
      padding: 60px 0px;
      cursor: pointer;
    }
    .prev-button {
      width: 30px;
      height: 30px;
      background: url(${PrevIcon}) center no-repeat;
      background-size: 25px 25px;
      padding: 60px 0px;
    }
  }
  #indicators {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 6;
    width: 100%;
    margin: 100px 0;
    .indicator {
      width: 10px;
      height: 10px;
      background: url(${IndicatorIcon}) center no-repeat;
      background-size: 10px 10px;
      padding: 10px;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
    .active {
      opacity: 1;
    }
  }
`;
