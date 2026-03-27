import NavBar from "./ui/navbar";
import './globals.css';

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
      
        
        <Footer />
      
      </body>
    </html>
  );
}