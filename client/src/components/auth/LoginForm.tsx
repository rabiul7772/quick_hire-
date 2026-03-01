import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { Mail, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { authService } from '../../services/auth.service';
import { loginSchema, type LoginFormValues } from '../../schemas/auth.schema';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await authService.login(data);
      login(response.data.user, response.token);
      toast.success('Welcome back!');
      navigate(from, { replace: true });
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Invalid email or password');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-4">
        <Input
          {...register('email')}
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          icon={<Mail className="w-5 h-5" />}
          error={errors.email?.message}
        />

        <Input
          {...register('password')}
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={<Lock className="w-5 h-5" />}
          error={errors.password?.message}
        />
      </div>

      <Button type="submit" isLoading={isSubmitting} fullWidth className="mt-2">
        Log In
      </Button>
    </form>
  );
};
