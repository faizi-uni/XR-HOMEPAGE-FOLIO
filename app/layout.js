import './globals.css';
import Navigation from '../components/Navigation';
import PageShell from '../components/PageShell';

export const metadata = {
  title: 'Harun Faizi | Homepage & Portfolio',
  description: 'Persönliche Homepage und Portfolio-Platzhalter für Harun Faizi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="site-body">
        <Navigation />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
