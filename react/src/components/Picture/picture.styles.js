import styled from 'styled-components';

export const Block = styled.div`
    &.gradient-effect {
        position: relative;
        /* margin: 0 auto; */
        width: 300px;
        height: 300px;
        background: linear-gradient(45deg, #000, #272727);
    }

    &.gradient-effect:hover:before ,
    &.gradient-effect:hover:after 
    {
        content: '';
        position: absolute;
        left: -1px;
        top: -1px;
        background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094, 
            #0000ff, #00ff00,#ffff00, #ff0000);
        background-size: 400%;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        z-index: -1;
        animation: steam 20s linear infinite;
    }

    @keyframes steam {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }

    &.gradient-effect:after {
        filter: blur(20px);
    }
`

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
