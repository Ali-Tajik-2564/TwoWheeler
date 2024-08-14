import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'اسم حداقل باید 3 کاراکتر داشته باشه')
    .max(12, 'اسم حداکثر باید 12 کاراکتر داشته باشه')
    .required('اسم را وارد نمایید'),
  email: Yup.string()
    .email()
    .min(10, 'ایمیل حداقل باید 10 کاراکتر داشته باشه')
    .max(30, 'ایمیل حداکثر باید 30 کاراکتر داشته باشه')
    .required('ایمیل را وارد نمایید'),

  password: Yup.string().required('password is necessary'),
});

export default userSchema;
