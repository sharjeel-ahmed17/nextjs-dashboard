// import localFont from "next/font/local";
import { Inter, Lusitana } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false});
 
export const lusitana = Lusitana({weight: ['400', '700'],subsets: ['latin'],adjustFontFallback: false}); 
// export const lusitana = Lusitana({
//   subsets: ["latin"],
//   variable: "--font-lusitana",
//   display: "swap",
//   adjustFontFallback: false,
// });
// export const lusitana = localFont({
//   src: "/fonts/Inter_28pt-Regular.ttf",
//   variable: "--font-lusitana",
//   weight: "100 900",
// });
// export const inter = localFont({
//   src: "/fonts/Lusitana-Regular.ttf",
//   variable: "--font-inter",
//   weight: "100 900",
// });