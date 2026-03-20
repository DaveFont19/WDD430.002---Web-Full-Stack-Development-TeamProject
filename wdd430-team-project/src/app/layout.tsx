import NavBar from "./ui/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body>
        <NavBar />
        
        {children}
      
        <footer>
          <p>Footer Goes HERE</p>
        </footer>
      </body>
    </html>
  );
}