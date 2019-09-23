import styled from 'styled-components';

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
`;

export const Content = styled.div`
    color: #fafafa;
    font-size: 16px;
    font-weight: normal;
    margin: 1rem 0.5rem;
    display: flex;

    ol {
        /* list-style: decimal; */
        list-style: none;
        counter-reset: li;
        margin: 0.25rem 0.5rem;
        flex: 1;

        li {
            margin-left: 6rem;
            padding: 0.75rem;
            counter-increment: li;
            display: flex;
            justify-content: space-between;
            cursor: pointer;

            &::before {
                content: counter(li) '.';
                color: #999;
                position: absolute;
                width: 1em;
                margin-left: -3em;
            }

            .time {
                color: #999;
                margin-left: 0.5rem;
            }

            &:hover span:first-child {
                filter: drop-shadow(0px 0px 5px black);
                transform: translateX(-10px);
                transition: all 0.3s;
            }

            span:first-child {
                transition: all 0.6s;
            }
        }

        div {
        }
    }
`;
