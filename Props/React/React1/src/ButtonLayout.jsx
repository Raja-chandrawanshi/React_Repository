import styled from "styled-components";
import ButtonV4 from "./ButtonChild";
const Div = styled.div`
  display: flex;
  gap: 12px;
  margin: 12px;
`;
const ButtonExample5 = () => {
  return (
    <Div>
      <ButtonV4 primary>Button1</ButtonV4>

      <ButtonV4 secondary>Button2</ButtonV4>

      <ButtonV4 success>Button3</ButtonV4>
      <ButtonV4 danger>Button4</ButtonV4>
      <ButtonV4 warning>Button5</ButtonV4>
      <ButtonV4 info>Button6</ButtonV4>
      <ButtonV4 light>Button7</ButtonV4>
      <ButtonV4 padding>Button8</ButtonV4>
    </Div>
  );
};

export default ButtonExample5;
