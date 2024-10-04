import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// Image Components
import { ReactComponent as LogoSVG } from '../assets/figma.named.svg/logo.svg';
import { ReactComponent as PersonIconSVG } from '../assets/figma.named.svg/icon-person.svg';
import { ReactComponent as ArrowRightIconSVG } from '../assets/figma.named.svg/icon-arrow-right-10.svg';
import { ReactComponent as BackgroundSVG } from '../assets/figma.named.svg/v-872-batch-5-nunny-04-1.svg';

// Styled Components
import {
  Container,
  FormContainer,
  InputContainer,
  Input,
  GoToQuestionsButton,
  GoToAnswerButton,
} from './Main.styles'

import * as Swagger from '../api/swagger/Subjects';
import LocalStore from '../api/storage/LocalStore';

const Main = () => {

  const navigate = useNavigate();

  const [subject, setSubject] = useState(JSON.parse(LocalStore.getItem('subject')));
  const [name, setName] = useState('')
  const [team] = useState('10-1')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const createSubject = async () => {

    try {
      const res = await Swagger.createSubject(team, name)
      if (res !== null && res !== undefined) {
        LocalStore.setItem('subject', JSON.stringify(res))
        setSubject(res)
        return res;
      }
    } catch (error) {
      console.error('Error creating subject:', error)
    }
    return null
  }
  const onClickAnswer = async () => {
    if (name.trim() === '' && subject?.name === undefined) {
      alert('Enter name and Click the button.')
      return
    } else if (name.trim().length > 0) {
      const res = await createSubject()
      if (res) {
        setSubject(res)
        navigate("/post/answer/WriteAnswer")
      }
    } else if (subject?.name !== undefined) {
      navigate("/post/answer/WriteAnswer")
    }
  }

  const onClickListSubjects = () => {
    navigate("/list/ListSubjects")
  }

  return (
    <Container>
      <LogoSVG />
      <FormContainer>
        <InputContainer>
          <PersonIconSVG />
          <Input id={name} value={name} onChange={handleNameChange} type="text" placeholder="이름을 입력하세요" />
        </InputContainer>
        <GoToAnswerButton onClick={onClickAnswer}>질문 받기</GoToAnswerButton>
      </FormContainer>
      <GoToQuestionsButton onClick={onClickListSubjects}>질문하러 가기<ArrowRightIconSVG />
      </GoToQuestionsButton>
      <BackgroundSVG />
    </Container>
  );
};

export default Main;
