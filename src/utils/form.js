import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

export const sendEmail = async (formRef) => {
  try {
    const response = await emailjs.sendForm(
      'service_tclv9wb',
      'template_vnai3xu',
      formRef.current,
      'oGepLHNgumrcZ8Joy'
    );
    toast.success('¡Mensaje enviado correctamente!');
    return response;
  } catch (error) {
    console.error('FAILED...', error.text);
    toast.error('Error al enviar el mensaje. Inténtalo de nuevo.');
    return error;
  }
};

export const resetForm = (event, setFormData) => {
  setFormData({
    user_name: '',
    user_email: '',
    message: '',
  });
  event.target.reset();
};
