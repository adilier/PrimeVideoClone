import styled from "styled-components";

import SearchIcon from "../../assets/logos/search.svg";

export const Container = styled.header`
  width: 100%;
  height: 72px;
  background-color: #19242e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  .brand-logo {
    max-height: 72px;
    width: 15%;
  }
  .user-icon {
    color: #c5c8ca;
    font-size: 1.5em;
    margin-right: 15px;
  }
  .arrow-icon {
    color: #c5c8ca;
    font-size: 1em;
  }
  #actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* margin: 0 45px; */
  }
  #menuWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Menu = styled.nav`
  margin-left: 3%;
  button {
    border: none;
    background: transparent;
    height: 1.5em;
    margin: 0 9px;
    color: #fff;
    font-size: 1em;
    line-height: 1em;
    cursor: pointer;
  }
  button:hover {
    border-bottom: solid 1px #fff;
  }
  .active-link {
    font-weight: 700;
    border-bottom: solid 1px #fff;
  }
`;

export const Search = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;
  width: 250px;
  height: 35px;
  background: url(${SearchIcon}) no-repeat 7px center;
  background-size: 20px 20px;
  border: solid 1px rgba(197, 200, 202, 0.5);
  border-radius: 2px;
  input {
    margin-left: 40px;
    padding: 10px;
    background: transparent;
    border: none;
    color: #c5c8ca;
    &::placeholder {
      font-size: 18px;
      color: #c5c8ca;
    }
  }
`;
