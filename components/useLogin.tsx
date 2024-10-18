import { useState } from 'react';

interface FormData {
  username: string;
  password: string;
  email: string;
}

export const useLogin = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    email: ''
  });

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {

    console.log('Sending data to the server:', JSON.stringify(formData, null, 2));

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Login successful!');
        resolve();
      }, 1000);
    });
  };

  return { formData, handleInputChange, handleLogin };
};
