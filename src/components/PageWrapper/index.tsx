import styled from "styled-components";
import leftBannerImg from '../../../public/baner-dec-left.png'
import rightBannerImg from '../../../public/baner-dec-right.png'

export const PageWrapper = styled.div`
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
padding: 226px 0px 120px 0px;

&::after {
    content: "";
    background-image: url(${leftBannerImg.src});
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 100px;
    width: 193px;
    height: 467px;
}

&::before{
    content: "";
    background-image: url(${rightBannerImg.src});
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    top: 100px;
    width: 98px;
    height: 290px;
}
`;