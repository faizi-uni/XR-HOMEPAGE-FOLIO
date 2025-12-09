import './globals.css';

export const metadata = {
  title: 'Harun Faizi | Homepage & Portfolio',
  description: 'Grundstruktur einer persönlichen Homepage und eines Portfolios.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 lg:px-10 lg:py-12">
          <main className="flex-1 space-y-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
