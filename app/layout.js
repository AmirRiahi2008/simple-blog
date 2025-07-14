
import MainHeader from "@/components/main-header";
import "./globals.css";

export const metadata = {
  title: "Blog managment",
  description: "Read Blogs",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
