export const dynamicParams = true;
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "./globals.css";

const validLocales = ["en", "ar", "fr", "de"]; // your supported languages

export default async function RootLayout({ children, params }) {
  const thedata = params?.locals;

  if (!thedata || !validLocales.includes(thedata)) {
    // Invalid locale - you can redirect, throw error, or set default
    return (
      <html lang="en" dir="ltr">
        <body>
          <p>Invalid locale</p>
        </body>
      </html>
    );
  }

  const dir = thedata === "ar" ? "rtl" : "ltr";

  return (
    <html lang={thedata} dir={dir}>
      <body>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}
