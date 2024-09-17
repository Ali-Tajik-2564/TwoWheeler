import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  fullName: Yup.string().min(3).max(12).required(),
  email: Yup.string().email().min(10).max(45).required(),

  password: Yup.string().min(5).max(15).required('password is necessary'),
});

const LoginUserSchema = Yup.object().shape({
  email: Yup.string().email().min(10).max(45).required(),

  password: Yup.string().min(5).max(15).required(),
});

export { LoginUserSchema, userSchema };
