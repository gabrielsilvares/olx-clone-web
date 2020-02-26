import styled from 'styled-components';

export const SearchArea = styled.div`
  background-color: #6e0ad6;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;

  .searchBox {
    background-color: #6e0ad6;
    padding: 20px 15px;
    border-radius: 5px;
    /*box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);*/
    display: flex;

    form {
      flex: 1;
      display: flex;

      input, select {
        height: 40px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        font-size: 20px;
        color: #555;
        margin-right: 20px;
        box-shadow: 2px 2px 2px 0.3px rgba(0, 0, 0, 0.2);
      }

      input {
        flex: 1;
        padding: 30px;
      }

      select {
        width: 100px;
        height: 60px;
        padding: 20px;
        background: #fff;
      }

      button {
        background-color: #fff;
        font-size: 16px;
        border: 0;
        border-radius: 5px;
        color: #555;
        padding: 0 20px;
        outline: 0;
        cursor: pointer;
        box-shadow: 2px 2px 2px 0.3px rgba(0, 0, 0, 0.2);
      }
      button:hover {
        background-color: #8831a5;
        color: #fff;
      }
    }
  }

  .categoryList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .categoryItem {
      width: 25%;
      display: flex;
      align-items: center;
      color: #ffff;
      text-decoration: none;
      height: 50px;
      margin-bottom: 10px;

      &:hover {
        color: #ccc;
      }

      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
  }
`;

export const PageArea = styled.div`
  
`;