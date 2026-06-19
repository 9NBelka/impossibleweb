import RootRedirect from '../components/RootRedirect/RootRedirect';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export default function RootPage() {
  return (
    <>
      <RootRedirect defaultLang='en' />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
