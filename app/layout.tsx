export const metadata = {
  title: "NGA Topografia",
  description: "Soluções completas em topografia com precisão",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}