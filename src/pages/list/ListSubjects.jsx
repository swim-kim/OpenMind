import React, { useEffect, useState } from 'react';
import {
  Container,
  StyledLogo,
  Title,
  DropdownContainer,
  Dropdown,
  DropdownText,
  ArrowIcon,
  DropdownMenu,
  MenuItem,
  UserCardContainer,
  UserCard,
  ProfilePhoto,
  UserName,
  InfoRow,
  InfoText,
  MessageIcon,
  Count,
  PaginationContainer,
  PaginationItem,
  GoToQuestionsButton,
} from './ListSubjects.styles';

import { ReactComponent as ArrowUp } from '../../assets/figma.named.svg/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../assets/figma.named.svg/icon-arrow-down.svg';
import { ReactComponent as ArrowRight } from '../../assets/figma.named.svg/icon-arrow-right-10.svg';

import profilePhoto from '../../assets/figma.named.svg/profile-photo.svg';
import { useNavigate } from 'react-router-dom';

import * as Swagger from '../../api/swagger/Subjects';
import LocalStore from '../../api/storage/LocalStore';

const ListSubjects = () => {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('이름순');

  const team = '10-1'
  const offset = 0;
  const limit = 10;

  const [subjects, setSubjects] = useState({});
  const getSubjects = async ({ team, offset, limit }) => {
    try {
      const fetchedSubjects = await Swagger.getSubjects(team, offset, limit)
      return fetchedSubjects
    } catch (error) {
      console.error('Error get subjects:', error)
      return null
    }
  }

  useEffect(() => {
    const fetchSubjects = async () => {
      const result = await getSubjects({ team, offset, limit });
      if (result) {
        setSubjects(result);
      }
    };
    fetchSubjects();
  }, [team, offset, limit]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(subjects.count / itemsPerPage);

  const handleGoToQuestions = (params, e) => {
    e.preventDefault();
    LocalStore.setItem('subject', JSON.stringify(params));
    navigate("/post/question/PostWithQuestion")
  };
  const handleGoToAnswerClick = () => {
    navigate("/post/answer/WriteAnswer")
  };

  return (
    <Container>
      <StyledLogo />

      <Title>누구에게 질문할까요?</Title>

      <DropdownContainer>
        <Dropdown open={isOpen} onClick={toggleDropdown}>
          <DropdownText open={isOpen}>{selected}</DropdownText>
          <ArrowIcon as={isOpen ? ArrowUp : ArrowDown} />
        </Dropdown>
        {isOpen && (
          <DropdownMenu>
            <MenuItem selected={selected === '이름순'} onClick={() => handleSelect('이름순')}>
              이름순
            </MenuItem>
            <MenuItem selected={selected === '최신순'} onClick={() => handleSelect('최신순')}>
              최신순
            </MenuItem>
          </DropdownMenu>
        )}
      </DropdownContainer>

      <UserCardContainer>
        {subjects.results && subjects.results.map((it, index) => (
          <UserCard key={it.id} onClick={(e) => { handleGoToQuestions(it, e) }}>
            <ProfilePhoto src={it.imageSource || profilePhoto} alt="Profile" />
            <UserName>{it.name + '(' + it.id + ')' || '아초는고양이'}</UserName>
            <InfoRow>
              <InfoText>
                <MessageIcon />
                받은 질문
              </InfoText>
              <Count>{it.questionCount || 0}개</Count>
            </InfoRow>
          </UserCard>
        ))}
      </UserCardContainer>

      <PaginationContainer>
        <PaginationItem onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>{'<'}</PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem
            key={page}
            selected={page === currentPage}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </PaginationItem>
        ))}
        <PaginationItem onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}>{'>'}</PaginationItem>
      </PaginationContainer>
      <GoToQuestionsButton onClick={handleGoToAnswerClick}>답변하러 가기<ArrowRight /></GoToQuestionsButton>
    </Container>
  );
};

export default ListSubjects;