import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0.5rem ;

    width: 170px;

    img {
        width: 170px;
        height: 170px;
        background: #fafafa;
    }

    div.card {
        text-decoration: none;
        color: #fafafa;
        text-align: center;
        cursor: pointer;
        transition: filter .3s;

        &:hover{
            filter: brightness(1.5)
        }

        p {
            margin: 12px auto;
        }
    
        span {
            color: #999;
        }
    }

`;
