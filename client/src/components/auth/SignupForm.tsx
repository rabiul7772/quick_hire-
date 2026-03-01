import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { Mail, Lock, User, Briefcase } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { authService } from '../../services/auth.service';
import { signupSchema, type SignupFormValues } from '../../schemas/auth.schema';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export const SignupForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { role: 'user' }
  });

  const onSubmit = async (data: SignupFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await authService.signup(data);
      login(response.data.user, response.token);
      toast.success('Account created successfully!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to sign up');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register('name')}
        label="Full Name"
        placeholder="John Doe"
        icon={<User className="w-5 h-5" />}
        error={errors.name?.message}
      />

      <Input
        {...register('email')}
        label="Email Address"
        type="email"
        placeholder="name@example.com"
        icon={<Mail className="w-5 h-5" />}
        error={errors.email?.message}
      />

      <Select
        {...register('role')}
        label="I am a..."
        icon={<Briefcase className="w-5 h-5" />}
        options={[
          { value: 'user', label: 'Job Seeker' },
          { value: 'admin', label: 'Employer / Admin' }
        ]}
        error={errors.role?.message}
      />

      <Input
        {...register('password')}
        label="Password"
        type="password"
        placeholder="••••••••"
        icon={<Lock className="w-5 h-5" />}
        error={errors.password?.message}
      />

      <Input
        {...register('confirmPassword')}
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
        icon={<Lock className="w-5 h-5" />}
        error={errors.confirmPassword?.message}
      />

      <Button type="submit" isLoading={isSubmitting} fullWidth className="mt-2">
        Create Account
      </Button>
    </form>
  );
};
