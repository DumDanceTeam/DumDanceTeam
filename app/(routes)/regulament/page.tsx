import prismadb from '@/lib/db';
import { redirect } from 'next/navigation';

const Regulament = async () => {
  const showRules = await prismadb.rule.findFirst();

  if(!showRules?.show)
    redirect("/");

  return (
    <div>
      <p>regulanet</p>
    </div>
  )
}

export default Regulament;