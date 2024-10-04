import React, { useState } from 'react';
import { InputContainer, InputText } from './Textarea.styles';

const Textarea = ({ state, placeholder }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  const currentState = focus ? 'Focusing' : value ? 'Entered' : 'Placeholder';

  return (
    <InputContainer state={currentState}>
      <InputText
        state={currentState}
        placeholder={placeholder}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
};

const InputTextarea = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Textarea state="Placeholder" placeholder="이름을 입력하세요" />
      <br />
      <Textarea state="Focusing" placeholder="이름을 입력하세요" />
      <br />
      <Textarea state="Entered" placeholder="이름을 입력하세요" />
    </div>
  );
};

export default InputTextarea;
