import styled  from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fafafa;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  height: 100px;
  -webkit-transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  -o-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  min-height: 80px;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  visibility: visible;
  padding-left: 5%;
`

export const HeaderTitleSection=styled.a`
line-height: 100px;
color: #fff;
font-size: 24px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 2px;
float: left;
transition: all 0.3s ease 0s;
`
export const HeaderTitle=styled.h4`
font-size: 16px;
font-weight: 700;
text-transform: uppercase;
color: ${({ theme }) => theme.text.primary};
line-height: 100px;
float: left;
transition: all 0.3s ease 0s;

span{
    color: ${({ theme }) => theme.text.secondary};
}
`
