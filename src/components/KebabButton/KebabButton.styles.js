import styled from 'styled-components';

import { ReactComponent as MoreIcon } from '../../assets/figma.named.svg/icon-more.svg';

const StyledMoreIcon = styled(MoreIcon)`
  width: 26px;
  height: 26px;
  &:hover {
    cursor: pointer;
  }
`;

const KebabButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const MenuModal = styled.ul`
  position: absolute;
  top: 8px;
  right: 1;
  list-style-type: none;
  width: 128px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow:
    0px 3px 14px 2px rgba(0, 0, 0, 0.12),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 5px 5px -3px rgba(0, 0, 0, 0.2);

  li {
    display: block;
    text-decoration: none;
    font-size: 13px;
    padding: 8px 8px;
    &:hover {
      background-color: #e1e2e3};
    }
`;

export { StyledMoreIcon, KebabButtonWrapper, MenuModal };
