import styled, { css } from 'styled-components';
import { shade } from 'polished'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration:none;
    color: #A8A8B3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }

  @media screen and (max-width: 500px){
    img {
      max-width: 180px;
    }
  }

`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      P {
        font-size: 18px;
        color: #737380;
        margin-top: 4px
      }

    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;



    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  @media screen and (max-width: 500px){
    header {
      display: grid;
      justify-items: center;

      div{
        margin-left: 0;
        strong {
          font-size: 22px;
        }

        P {
          font-size: 16px;
        }
      }
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      justify-items: center;
      text-align: center;
      li {
        & + li {
          margin-left: 0;
        }
        &:last-child{
          grid-column: 1 / 3;
          justify-self: center;
          text-align: center;
        }
      }
    }

  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px)
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #CBCBD6;
    }
  }
`;
