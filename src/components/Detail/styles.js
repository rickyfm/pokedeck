import { css } from '@emotion/react';

export const root = css`
  border-radius: 8px;
  margin: 32px auto;
  max-width: 500px;
  padding: 8px;
  background: #FFFFFF;
  box-shadow: 0 0.5rem 1rem rgb(0 0 1 / 15%);

  h1{
    text-align: center;
    color:#E62B1E;
    font-weight: bold;
    font-size: 26px;
    text-transform: uppercase;
  }

  .image{
    text-align: center;
    img {
      width: 180px;
      height: auto;
    }
  }

  .text{
    text-align: center;
    color:#E62B1E;
    font-weight: bold;
  }

  .header{
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .baseExperience{
      margin: 8px auto;
      width: auto;
      padding: 12px;
      border-radius: 8px;
      color: #E62B1E;
      border: solid 1px #CED1D9;
      font-weight: bold;
    }
  }


`

export const stats = css`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    padding: 4px;
    border-bottom: solid 1px #CED1D9;

    &:last-child {
      border-bottom: none;
    }
  }
`
