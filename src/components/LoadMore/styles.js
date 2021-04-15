import { css } from '@emotion/react';

export const root = css`
  display: flex;
  align-items: center;
  flex-direction:column;
  padding: 8px 12px;

  button {
    border-radius: 4rem;
    padding: .8rem 1.5rem;
    width: auto;
    border: none;
    background: #E62B1E;
    color: white;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 300;
    &:focus{
      outline: none;
    }
  }

`
