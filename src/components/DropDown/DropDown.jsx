import React, { useState } from 'react';

import {
  DropdownContainer,
  DropdownBox,
  DropdownText,
  ArrowIcon,
  DropdownMenu,
  MenuItem,
} from './DropDown.styles';

import { ReactComponent as ArrowUpIcon } from '../../assets/figma.named.svg/icon-arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/figma.named.svg/icon-arrow-down.svg';

// React component
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('이름순');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownBox open={isOpen} onClick={toggleDropdown}>
        <DropdownText open={isOpen}>{selected}</DropdownText>
        <ArrowIcon as={isOpen ? ArrowUpIcon : ArrowDownIcon} />
      </DropdownBox>
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
  );
};

export default DropDown;