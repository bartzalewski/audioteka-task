import React, { useState } from 'react';
import styled from 'styled-components';
import mockup from '../../img/mockup_blank@3x.png';
import background from '../../img/pixel_player_blank@3x.png';
import iconPause from '../../img/i_pause.svg';
import iconPlay from '../../img/i_play.svg';
import imgDice from '../../img/cover_1@3x.jpg';
import ReactAudioPlayer from 'react-audio-player';
import mp3Dice from '../../mp3/solaris.mp3';

const Container = styled.div`
  background: url(${mockup});
  background-size: cover;
  width: 421px;
  height: 812px;
  position: relative;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
  border-radius: 60px;
`;
const Screen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 50px 20px;
`;
const Wrapper = styled.div`
  background: url(${background});
  background-size: contain;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;
const Image = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 5px;
  cursor: pointer;
`;
const Title = styled.h4`
  font-weight: normal;
`;
const Icon = styled.img`
  cursor: pointer;
`;
const Audio = styled.audio``;

export default function Player() {
  const [pause, setPause] = useState<boolean>(true);

  return (
    <Container>
      <Screen>
        <Wrapper>
          <Content>
            <Image src={imgDice} alt="Dice" />
            <Title>Dice</Title>
            {pause ? (
              <Icon src={iconPlay} alt="Play" onClick={() => setPause(false)} />
            ) : (
              <Icon
                src={iconPause}
                alt="Pause"
                onClick={() => setPause(true)}
              />
            )}
            {!pause && <ReactAudioPlayer src={mp3Dice} autoPlay={true} />}
          </Content>
        </Wrapper>
      </Screen>
    </Container>
  );
}
