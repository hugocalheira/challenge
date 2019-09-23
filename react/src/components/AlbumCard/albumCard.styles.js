import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0.5rem;
    max-width: 170px;

    img {
        width: 170px;
        height: 170px;
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

    div.card {
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

        p {
            margin: 10px auto;
        }

        span {
            color: #999;
        }
    }
`;
