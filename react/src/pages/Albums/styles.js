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
    margin: 1rem 0.5rem;
    display: flex;

    div {
        counter-reset: button;
        margin: 0.25rem 0.5rem;
        flex: 1;

        button {
            color: #fafafa;
            font-size: 16px;
            font-weight: normal;
            border: 0;
            width: 100%;
            background: none;
            margin-left: 5rem;
            padding: 0.75rem;
            counter-increment: button;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            cursor: pointer;

            .enabled {
                display: none;
            }

            &:disabled {
                cursor: default;
                color: #666;

                .disabled {
                    display: inline-block;
                    padding-right: 10px;
                }
            }

            &::before {
                content: counter(button) '.';
                color: #999;
                position: absolute;
                width: 1em;
                margin-left: -3em;
            }

            .control {
                display: none;
            }

            .time {
                color: #999;
                margin-left: 0.5rem;
            }

            &.playing,
            &:hover:not(:disabled) {
                .control {
                    display: inline-block;
                    font-size: 14px;
                    svg {
                        margin-right: 1rem;
                    }
                }
                span:first-child {
                    filter: drop-shadow(0px 0px 5px black);
                    transform: translateX(-10px);
                    transition: all 0.3s;
                }
            }

            span:first-child {
                transition: all 0.6s;
            }
        }

        div {
        }
    }
`;
