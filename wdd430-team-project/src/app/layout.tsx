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
    <html lang="en" >
      <body>
        <NavBar />
        
        {children}
      
        
        <Footer />
      
      </body>
    </html>
  );
}