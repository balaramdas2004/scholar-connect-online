
import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';

interface OTPInputProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
}

const OTPInput = ({ value, onChange, length = 6 }: OTPInputProps) => {
  const [otp, setOtp] = useState<string[]>(value.split('').concat(Array(length - value.length).fill('')));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    
    if (newValue.length > 1) {
      // If pasted content
      const pastedValue = newValue.slice(0, length);
      const newOtp = [...otp];
      
      for (let i = 0; i < pastedValue.length; i++) {
        if (i + index < length) {
          newOtp[i + index] = pastedValue[i];
        }
      }
      
      setOtp(newOtp);
      onChange(newOtp.join(''));
      
      // Focus on the next empty field or the last field
      const nextIndex = Math.min(index + pastedValue.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
    } else if (/^[0-9]$/.test(newValue)) {
      // If valid single digit
      const newOtp = [...otp];
      newOtp[index] = newValue;
      setOtp(newOtp);
      onChange(newOtp.join(''));
      
      // Focus on the next field
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous field on backspace if current field is empty
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      onChange(newOtp.join(''));
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      // Navigate left
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      // Navigate right
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent, index: number) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    
    if (!/^\d+$/.test(pastedData)) return; // Only allow digits
    
    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length && index + i < length; i++) {
      newOtp[index + i] = pastedData[i];
    }
    
    setOtp(newOtp);
    onChange(newOtp.join(''));
    
    // Focus on the next empty field or the last field
    const nextIndex = Math.min(index + pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={otp[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={(e) => handlePaste(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-12 text-center text-lg"
        />
      ))}
    </div>
  );
};

export default OTPInput;
