import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;

    button {
        padding: 1rem;
        border-radius: 5px;
        background: none;
        border: .9px solid #fff;
        color: #fff;
        text-transform: uppercase;
    }

    @media screen and (min-width: 900px) {
        button {
            text-transform: none;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin: 20px auto;
            width: 200px;
            height: 200px;
            background: #161616;
            color:#f1f1f1;
            border-radius: 50%;
            border: 0;
            font-size: 20px;
            font-weight: lighter;
            letter-spacing: 2px;
            transition: 1s box-shadow;
        }

        /* button:hover {
            box-shadow: 0 5px 35px 0px rgba(0,0,0,1);
        } */

        button:hover,
        button.loading{
            box-shadow: 0 5px 35px 0px rgba(0,0,0,1);

            &:before, 
            &:after {
                display: block;
                content: '';
                position: absolute;
                width: 200px;
                height: 200px;
                border-radius: 50%;
                z-index: -1;
                filter: blur(5px);
                
                background: #fb0094;
                animation: .3s clockwise infinite;
            }

            &:after {
                background:  #ffff00;
                animation: .6s counterclockwise infinite;
            }
        }


    }

    @keyframes clockwise {
        0% {
            top: -3px;
            left: 0;
            filter: blur(5px);
            background:  #ffff00;
        }
        12% {
            top: -2px;
            left: 2px;
            filter: blur(5px);
            background:  #0000ff;
        }
        25% {
            top: 0;
            left: 3px;   
            filter: blur(7px); 
            background:  #00ff00;
        }
        37% {
            top: 2px;
            left: 2px;
            filter: blur(2px);
            background:  #ff0000;
        }
        50% {
            top: 3px;
            left: 0;   
            filter: blur(9px); 
            background:  #fb0094;
        }
        62% {
            top: 2px;
            left: -2px;
            filter: blur(1px);
            background:  #ffff00;
        }
        75% {
            top: 0;
            left: -3px;
            filter: blur(5px);
            background:  #00ff00;
        }
        87% {
            top: -2px;
            left: -2px;
            filter: blur(6px);
            background:  #0000ff;
        }
        100% {
            top: -3px;
            left: 0;    
            filter: blur(5px);
            background:  #ffff00;
        }
    }

    @keyframes counterclockwise {
        0% {
            top: -3px;
            right: 0;
            filter: blur(5px);
            background: #ff0000;
        }
        12% {
            top: -2px;
            right: 2px;
            filter: blur(1px);
            background: #0000ff;
        }
        25% {
            top: 0;
            right: 3px;    
            filter: blur(1px);
            background: #ffff00;
        }
        37% {
            top: 2px;
            right: 2px;
            filter: blur(2px);
            background: #ff0000;
        }
        50% {
            top: 3px;
            right: 0; 
            filter: blur(7px);  
            background: #0000ff; 
        }
        62% {
            top: 2px;
            right: -2px;
            filter: blur(3px);
            background: #ff0000;
        }
        75% {
            top: 0;
            right: -3px;
            filter: blur(3px);
            background: #fb0094;
        }
        87% {
            top: -2px;
            right: -2px;
            filter: blur(9px);
            background: #fb0094;
        }
        100% {
            top: -3px;
            right: 0;    
            filter: blur(5px);
            background: #ff0000;
        }
    }

`;