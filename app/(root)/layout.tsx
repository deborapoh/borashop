export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // flex h-screen -> takes the full height of the screen
  // flex-col -> flex direction is column
  // flex-1 -> takes the remaining space
  // wrapper -> from globals.css
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper">
        {children}
      </main>
    </div>
  );
}
