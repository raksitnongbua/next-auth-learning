import { LoginForm } from '@/components/LoginForm';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='flex justify-center items-center h-screen'>
      <LoginForm />
    </main>
  );
}
