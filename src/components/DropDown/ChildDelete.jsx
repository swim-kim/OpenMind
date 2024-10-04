import React, { useState } from 'react';

import { ReactComponent as VectorIcon } from '../../assets/figma.named.svg/vector.svg';
import { ReactComponent as Vector2Icon } from '../../assets/figma.named.svg/vector-2.svg';
import { ReactComponent as Vector3Icon } from '../../assets/figma.named.svg/vector-3.svg';
import {
  DropdownContainer,
  MenuItem,
  MenuItemSelected,
  MenuIcon,
  MenuText,
} from './ChildDelete.styles';

const ChildDelete = () => {
  const [selected, setSelected] = useState('Default');

  const handleSelect = (state) => {
    setSelected(state);
  };

  return (
    <DropdownContainer>
      <MenuItem
        background="#ffffff"
        onMouseEnter={() => handleSelect('Hover')}
        onMouseLeave={() => handleSelect('Default')}
        onClick={() => handleSelect('Selected')}
      >
        <MenuIcon as={VectorIcon} />
        <MenuText color={selected === 'Default' ? '#515151ff' : '#000000'}>삭제하기</MenuText>
      </MenuItem>

      <MenuItemSelected onClick={() => handleSelect('Selected')}>
        <MenuIcon as={Vector2Icon} />
        <MenuText color={selected === 'Selected' ? '#1877f2ff' : '#515151ff'}>삭제하기</MenuText>
      </MenuItemSelected>

      <MenuItem>
        <MenuIcon as={Vector3Icon} />
        <MenuText color="#000000ff">삭제하기</MenuText>
      </MenuItem>
    </DropdownContainer>
  );
};

export default ChildDelete;
