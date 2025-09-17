
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";




export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>

      </head>
      <body>
        <Header/>
        {children}
         <Footer/>
      </body>
    </html>
  );
}
