import styled from 'styled-components';

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;

    span {
        display: block;
        font-size: 16px;
        color: #fafafa;
    }

    input {
        background-color: transparent;
        font-size: 48px;
        font-weight: bold;
        padding: .5rem;
        color: #fff;
        border: 0;
        border-bottom: 1px solid #999;
        flex: 1;

        ::placeholder {
            color: #999;
        }
    }
`;
