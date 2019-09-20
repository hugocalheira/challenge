import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;

    width: 170px;

    img {
        width: 170px;
        height: 170px;
        background: #fafafa;
    }

    a {
        text-decoration: none;
        color: #fafafa;
        margin: 12px auto;
    }

    span {
        color: #999;
    }
`;
