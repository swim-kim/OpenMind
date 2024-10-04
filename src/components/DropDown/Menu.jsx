import React from 'react';
import {
  DropdownContainer,
  MenuItem,
  MenuText,
  MenuIcon,
} from './Menu.styles';

import { ReactComponent as EditIcon } from '../../assets/figma.named.svg/icon-edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/figma.named.svg/ic-x.svg';

// React component

const Menu = () => {
  return (
    <DropdownContainer>
      <MenuItem>
        <MenuIcon as={EditIcon} />
        <MenuText>수정하기</MenuText>
      </MenuItem>
      <MenuItem>
        <MenuIcon as={DeleteIcon} />
        <MenuText>삭제하기</MenuText>
      </MenuItem>
    </DropdownContainer>
  );
};

export default Menu;