import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });


export const metadata = {
  title: {
    default: "Learning Next.js",
    template: "%s | Next.js",
  },
  description: "View Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}