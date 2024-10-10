// KebabButton.jsx
import { useState, useRef, useEffect } from 'react';
import { StyledMoreIcon, KebabButtonWrapper, MenuModal } from './KebabButton.styles';

const KebabButton = ({ menuItems, question }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const onMenuItemClick = (onClick) => {
    onClick();
    setIsOpen(false);
  };

  useEffect(() => {
    const onOutsideClose = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', onOutsideClose);
    return () => document.removeEventListener('click', onOutsideClose);
  }, [isOpen]);

  return (
    <KebabButtonWrapper ref={menuRef}>
      <StyledMoreIcon
        color='gray'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      {isOpen && (
        <MenuModal>
          {menuItems.map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              onClick={() => onMenuItemClick(() => item.onClick(question))}
            >
              <img src={`${item.icon}`} width={'16px'} height={'16px'} alt={item.label} />
              {item.label}
            </li>
          ))}
        </MenuModal>
      )}
    </KebabButtonWrapper>
  );
};

export default KebabButton;
