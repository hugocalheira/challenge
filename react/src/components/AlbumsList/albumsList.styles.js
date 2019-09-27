import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

export const Content = styled.div.attrs(props => ({
    disabled: props.isLoading,
}))`
    display: flex;
    flex-direction: column;
    padding: 60px 0.5rem;

    h2 {
        color: #fafafa;
        font-size: 24px;
        font-weight: normal;
        margin-bottom: 2rem;
    }

    ${props =>
        props.isLoading &&
        css`
            svg {
                align-self: center;
                animation: ${rotate} 1.5s linear infinite;
            }
        `}
`;

export const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
