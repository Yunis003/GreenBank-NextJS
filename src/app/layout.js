import './Styles/layout.css'
import Header from './Components/Header';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GreenBank</title>
      </head>
      <body>
        <Header />
        {/* <main>{children}</main> */}
      </body>
    </html>
  );
}
