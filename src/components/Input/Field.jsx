import React, { useState } from 'react';

import { ReactComponent as PersonIcon } from '../../assets/figma.named.svg/icon-person.svg';
import { ReactComponent as Frame79Icon } from '../../assets/figma.named.svg/frame-79.svg';

import { InputContainer, InputIcon, InputText, TypingFrame } from './Field.styles';

const Field = ({ state, placeholder }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  const currentState = state ? state : focus ? 'Focusing' : value ? 'Entered' : 'Placeholder';

  return (
    <InputContainer state={currentState}>
      <InputIcon as={PersonIcon} />

      {currentState === 'Typing' ? (
        <TypingFrame>
          <InputText
            state={currentState}
            placeholder={placeholder}
            value={value}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => setValue(e.target.value)}
          />
          <InputIcon as={Frame79Icon} />
        </TypingFrame>
      ) : (
        <InputText
          state={currentState}
          placeholder={placeholder}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </InputContainer>
  );
};

const SampleField = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Field state="Placeholder" placeholder="이름을 입력하세요" />
      <br />
      <Field state="Focusing" placeholder="이름을 입력하세요" />
      <br />
      <Field state="Entered" placeholder="이름을 입력하세요" />
      <br />
      <Field state="Typing" placeholder="이름을 입력하세요" />
    </div>
  );
};

export default SampleField;
