import { css } from '@emotion/react';

export const root = css`
  background:#E62B1E;
  align-items:center;
  display: flex;
  flex-direction:column;
  margin-bottom: 32px;

  img {
    width: auto;
    height: 80px;
  }
  a {
    color:#FFFFFF;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 300;

    &:hover{
      text-decoration: underline;
    }

  }

`
