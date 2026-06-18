import RootRedirect from '../components/RootRedirect/RootRedirect';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootPage() {
  return (
    <>
      <RootRedirect defaultLang='en' />
      <SpeedInsights />
    </>
  );
}
