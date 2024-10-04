import React, { useState } from 'react';

import { ReactComponent as IconEdit } from '../../assets/figma.named.svg/icon-edit.svg';
import { ReactComponent as IconEdit2 } from '../../assets/figma.named.svg/icon-edit-2.svg';
import { ReactComponent as IconEdit3 } from '../../assets/figma.named.svg/icon-edit-3.svg';

import {
  DropdownContainer,
  MenuItem,
  MenuText,
  MenuIcon,
} from './ChildEdit.styles';

// React component
const ChildEdit = () => {
  const [selected, setSelected] = useState(null);
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (state) => {
    setHover(state);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleSelect = (state) => {
    setSelected(state);
  };

  return (
    <DropdownContainer>
      <MenuItem
        onMouseEnter={() => handleMouseEnter('Default')}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleSelect('Default')}
        background={hover === 'Default' ? '#f9f9f9ff' : '#ffffff'}
      >
        <IconEdit />
        <MenuText color={selected === 'Default' ? '#1877f2ff' : '#515151ff'}>수정하기</MenuText>
      </MenuItem>

      <MenuItem
        onMouseEnter={() => handleMouseEnter('Hover')}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleSelect('Hover')}
        background={hover === 'Hover' ? '#f9f9f9ff' : '#ffffff'}
      >
        <IconEdit3 />
        <MenuText color={selected === 'Hover' ? '#1877f2ff' : '#000000ff'}>수정하기</MenuText>
      </MenuItem>

      <MenuItem
        onMouseEnter={() => handleMouseEnter('Selected')}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleSelect('Selected')}
        background={hover === 'Selected' ? '#f9f9f9ff' : '#ffffff'}
      >
        <IconEdit2 />
        <MenuText color={selected === 'Selected' ? '#1877f2ff' : '#515151ff'}>수정하기</MenuText>
      </MenuItem>
    </DropdownContainer>
  );
};

export default ChildEdit;