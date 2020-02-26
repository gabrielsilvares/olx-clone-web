import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color: #fff;
height: 60px;
border-bottom: 1px solid #ccc;

.container {
  max-width: 1000px;
  margin: auto;
  display: flex;
}

a {
  text-decoration: none;
}

.logo {
  flex: 1;
  display: flex;
  align-items: center;
  height: 60px;

  
  .logo1,
  .logo2,
  .logo3 {
    font-size: 27px;
    font-weight: bold;
  }

  .logo1 {
    color: rgb(110, 10, 214);
  }

  .logo2 {
  color: rgb(140, 229, 99);
  }

  .logo3 {
    color: #ff8100;
  }
}

nav {
  padding-top: 10px;
  padding-bottom: 10px;

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul {
    display: flex;
    align-items: center;
    height: 40px;
  }

  li {
    margin-left: 20px;
    margin-right: 20px;

    a, button {
      border: 0;
      font-size: 14px;
      background: none;
      cursor: pointer;
      outline: none;
      color: #000;
      text-decoration: none;
      
      &:hover {
        color: #999;
      }

      &.button {
        background-color: #f78323;
        font-size: 14px;
        font-weight: bold;
        border-radius: 20px;
        color: #fff;
        padding: 10px 30px;
        transition: all 0.3s;
      }

      &.button:hover {
        background-color: #F99E53;
        transition: all 0.3s;
      }
    }
  }
}
`;