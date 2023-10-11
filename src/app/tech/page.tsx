import { commonFetch } from '@/api/commonFetch';
import News from '@/components/News/News';

export default function SportsPage() {
  return <News fetchFunc={commonFetch({ category: 'technology' })}></News>;
}
