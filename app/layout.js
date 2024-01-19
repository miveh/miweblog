import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({ subsets: ["arabic"] });

export const metadata = {
  title: "AboutMe",
  description: "my personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={vazir.className}>{children}</body>
    </html>
  );
}
