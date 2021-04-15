import { css } from '@emotion/react';

export const list = css`
  margin: 0 16px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
     border-radius: 8px;
     margin: 8px;
     padding: 8px;
     width: 7%;
     background: #FFFFFF;
     box-shadow: 0 0.5rem 1rem rgb(0 0 1 / 15%);

     &:hover {
       box-shadow: 0 0.2rem 0.8rem rgb(0 0 1 / 30%);
     }

     img {
       display: block;
       width: auto;
       height: 80px;
     }

     a {
       color: #333333;
       text-decoration: none;
       font-weight: 600;
       align-items: center;
       display: flex;
       flex-direction: column;
     }

     span {
       font-color : orange;
       font-weight : 600;
       margin-top : 10px;
     }
  }

`

export const root = css`
  text-align: center;
  img {
    width: auto;
    height: 90px;
  }

`
