import Layout from '@/components/Layout';
import { LoginForm } from '@/components/LoginForm';

export default function Home() {
  return (
    <main className='flex justify-center items-center h-screen'>
      <Layout>
        <LoginForm />
      </Layout>
    </main>
  );
}
