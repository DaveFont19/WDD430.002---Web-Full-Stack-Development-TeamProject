import { Lora, PT_Sans } from 'next/font/google';

export const lora = Lora({
  subsets: ['latin'],
  weight: [ '600', '700'],
  variable: '--font-lora',
});
export const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
}); 