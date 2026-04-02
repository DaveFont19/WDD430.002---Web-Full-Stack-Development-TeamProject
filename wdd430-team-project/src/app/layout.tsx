import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import './globals.css';
import { lora, ptSans } from "./ui/fonts";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ptSans.className}>
      <body>
        <Providers>
          <NavBar />

          {children}


          <Footer />
        </Providers>
      </body>
    </html>
  );
}