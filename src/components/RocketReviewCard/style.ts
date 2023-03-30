import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  margin-bottom: 30px;
  box-shadow: 0 3px 5px rgba(25, 30, 62, 0.02);
  border-radius: 10px;
  border: 1px solid #ecedf2;
  background-color: #fff;
  padding: 15px;
  color: #a3a3ba;
  font-size: 16px;
`
export const CardImgWrapper = styled.div`
  margin: 5px;
  margin-right: 25px;
  width: 220px;
  max-width: 160px;
`
export const CardImg = styled.img`
  border-radius: 7px;
  max-width: 147px;
  display: inline-block;
  width: 147px;
`
export const CardContentHeader = styled.div`
  margin-top: 10px;
`
export const CardTitleContainer = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #666;
  margin-bottom: 6px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const CardTitle = styled.a`
  color: rgb(68, 68, 68);
`

export const RocketNameContainer = styled.div`
  font-size: 13px;
  color: #444;
  margin-left: 10px;
  top: 2px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UpdateRocket = styled.div`
  color: #03a4ed;
  font-size: 18px;
  position: relative;
  margin-right: 4px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`
export const CardBreak = styled.div`
  height: 1px;
  width: 50px;
  border-top: 1px solid #ddd;
  margin-top: 7px;
  margin-bottom: 7px;
`
