import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 100vh;
  margin-inline: auto;
  background-color: #f7f8fb;
`;

export const CalcScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  padding-inline: 20px;
  font-size: 22px;
`;

export const CalcVal = styled.div`
  margin-block: 5px;
  color: #818181;
  height: 20px;
`;
export const CalcAns = styled.div`
  font-weight: bolder;
  margin-block: 5px;
  font-size: 40px;
  color: #424242;
`;

export const KeyPadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  justify-items: center;
  margin-top: auto;
  margin-bottom: 30px;
`;
export const KeyPad = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  color: #38B9FF;
  font-weight: bolder;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
`;
