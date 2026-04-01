import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import './globals.css';
import { lora, ptSans } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ptSans.className}>
      <body>
        <NavBar />
        
        {children}
      
        
        <Footer />
      
      </body>
    </html>
  );
}