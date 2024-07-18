import styled from "styled-components";
import Label from "./label";
import Text from "./text";

type InfoPanelProps = {
  ipAdress: string;
  location: string;
  timezone: string;
  isp: string;
};

function InfoPanel(props: InfoPanelProps) {
  return (
    <Wrapper>
      <InfoGroup>
        <Label>Ip Address</Label>
        <Text>{props.ipAdress}</Text>
      </InfoGroup>

      <InfoGroup>
        <Label>Location</Label>
        <Text>{props.location}</Text>
      </InfoGroup>

      <InfoGroup>
        <Label>Timezone</Label>
        <Text>{props.timezone}</Text>
      </InfoGroup>

      <InfoGroup>
        <Label>ISP</Label>
        <Text>{props.isp}</Text>
      </InfoGroup>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border-radius: 16px;
  background-color: white;
  color: black;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export default InfoPanel;
