import * as Yup from 'yup';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, Typography, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';


// ----------------------------------------------------------------------

export default function RegisterForm() {
  const { register } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const resisteryes = (false);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('유효한 이메일 주소를 입력해주세요.').required('이메일을 입력해주세요.'),
    password: Yup.string().required('비밀번호를 입력해주세요.'),
    userName: Yup.string().required('이름을 입력해주세요.'),
    nickname: Yup.string().required('닉네임을 입력해주세요.'),
    birth: Yup.string().required('생일을 입력해주세요.'),
    phone: Yup.string().required('핸드폰 번호를 입력해주세요.'),
    sex: Yup.string().required('성별을 입력해주세요.'),   
    sity: Yup.string().required('지역명을 입력해주세요.'),
  });

  const defaultValues = {
    email: (''),
    password: '',
    userName: (''),
    nickname: '',
    birth: '',
    phone: '',    
    sex: '',   
    sity: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    console.log(RegisterSchema.userName);
    console.log(RegisterSchema.password);
    try {
      await register(
        data.email, 
        data.password,
        data.userName, 
        data.nickname,
        data.birth,
        data.phone,
        data.sex,
        data.sity);
    } catch (error) {
      console.error(error);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', error);
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} value={RegisterSchema}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}        
        <RHFTextField name="email" label="이메일" />
        
        <RHFTextField
          name="password"
          label="비밀번호"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="userName" label="이름" />
          <RHFTextField name="nickname" label="닉네임"/>  
          </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <RHFTextField name="birth" label="생일"/>        
        <RHFTextField name="phone" label="핸드폰 번호" />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <RHFTextField name="city" label="지역"value={RegisterSchema.city}/>
        <RHFTextField name="sex" label="성별 추가 예정" value={RegisterSchema.sex}/>    
        </Stack>

     

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} >
          가입하기
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

/* 
        <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
              가입을 위해&nbsp;
              <Link underline="always" color="text.primary" href="#">
                서비스약관 
              </Link>
               에 동의해주세요. &nbsp;<RHFCheckbox name="resisteragree" label="" value={resisteryes|| ''}/>
        </Typography>
        */
