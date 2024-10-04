import React, { useState, useEffect } from 'react';
import { ToastContainer, ToastMessage } from './Toast.styles';

export const Toast = ({ message, duration = 3_000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <ToastContainer>
      <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
  );
};

export default Toast;