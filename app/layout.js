import './globals.css';

export const metadata = {
  title: 'Harun Faizi | Homepage & Portfolio',
  description: 'Persönliche Homepage und Portfolio-Platzhalter für Harun Faizi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
