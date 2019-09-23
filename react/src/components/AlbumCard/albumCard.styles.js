import styled, { css } from 'styled-components';

export const Item = styled.li.attrs(props => ({
    plusSize: props.plusSize,
}))`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0.5rem;

    ${props => (props.plusSize ? `max-width: 300px` : `max-width: 170px`)}

    @media screen and (max-width: 899px) {
        ${props => (props.plusSize ? `width: 284px` : `max-width: 170px`)}
        margin: 0;
    }

    .notAvailable {
        width: 170px;
        height: 170px;
        background: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48px;
    }

    .card {
        text-decoration: none;
        color: #fafafa;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        transition: filter 0.3s;
        filter: brightness(0.9);

        &:hover {
            filter: brightness(1.2) drop-shadow(2px 4px 6px black);
        }

        ${props =>
            props.plusSize
                ? css`
                      p {
                          font-size: 18px;
                          margin: 14px auto;
                      }
                  `
                : css`
                      p {
                          margin: 10px auto;
                      }
                  `}

        span {
            color: #999;
        }
    }
`;
