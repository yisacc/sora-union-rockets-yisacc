import styled from 'styled-components'

export const Content = styled.div`
  padding: 20px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-size: 14px;
`
export const Header = styled.div`
  border-bottom: none;
  position: relative;
`

export const Title = styled.h4`
  text-align: center;
  font-size: 26px;
  margin: 30px 0 -10px;
`
export const CloseModal = styled.button`
  position: absolute;
  top: -5px;
  right: -2px;
  border: none;
  background-color: transparent;
  color: #ee3535;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
`
export const ModalBody = styled.div`
  color: #999;
`
export const ModalFooter = styled.div`
  border: none;
  text-align: center;
  border-radius: 5px;
  font-size: 13px;
  padding: 10px 15px 25px;
`
export const IconBox = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  z-index: 9;
  text-align: center;
  border: 3px solid #f15e5e;
`

export const Button = styled.button`
  color: #fff;
  border-radius: 4px;
  background: #60c7c1;
  text-decoration: none;
  transition: all 0.4s;
  line-height: normal;
  min-width: 120px;
  border: none;
  min-height: 40px;
  border-radius: 3px;
  margin: 0 5px;
`
