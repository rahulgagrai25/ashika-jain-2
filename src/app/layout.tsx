import "./globals.css";
import Navbar from "./components/navbar";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
