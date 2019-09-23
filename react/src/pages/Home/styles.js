import styled from 'styled-components';

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;

    span {
        display: block;
        font-size: 16px;
        color: #fafafa;
    }

    input {
        background-color: transparent;
        font-size: 48px;
        font-weight: bold;
        padding: 0.5rem;
        color: #fff;
        border: 0;
        border-bottom: 1px solid #999;
        flex: 1;

        ::placeholder {
            color: #999;
        }
    }

    @media screen and (max-width: 899px) {
        margin-top: 3rem;

        input {
            font-size: 36px;
        }
    }

    @media screen and (max-width: 667px) {
        margin-top: 2rem;

        input {
            font-size: 24px;
        }
    }
`;

export const Title = styled.h2`
    color: #fafafa;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 2rem;
    padding: 60px 0.5rem 0;
    @media screen and (max-width: 667px) {
        padding: 30px 0.5rem 0;
        margin-bottom: 1rem;

        input {
            font-size: 16px;
        }
    }
`;

export const Back = styled.div`
    a {
        display: inline-block;
        color: #fafafa;
        text-decoration: none;
        margin-bottom: 1.5rem;

        &:hover {
            color: #fff;
        }

        svg {
            margin-right: 0.5rem;
        }
    }

    @media screen and (max-width: 899px) {
        display: flex;
        justify-content: flex-end;
    }
`;
