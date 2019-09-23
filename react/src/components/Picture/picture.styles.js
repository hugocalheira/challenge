import styled from 'styled-components';

export const Photo = styled.img.attrs(props => {
    return {
        alt: props.alt,
        src: props.imgUrl,
        width: props.plusSize ? `300px` : `170px`,
        height: props.plusSize ? `300px` : `170px`,
    };
})``;

export const NotAvailable = styled.div`
    width: 170px;
    height: 170px;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
`;
