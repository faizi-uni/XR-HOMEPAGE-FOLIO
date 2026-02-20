import './globals.css';

export const metadata = {
  title: 'Ausstellungs-Tracking | Anonymes Bewegungsprofil',
  description:
    'Mobile Web-App zum anonymen Erfassen von Besuchsbewegungen auf einem Ausstellungsgrundriss.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
