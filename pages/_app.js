import "../styles/globals.css";
import { QuioscoProvider } from "../context/QuioscoProvider";

function MyApp({ Component, pageProps }) {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
  );
}

export default MyApp;

/**
 * npm i -D (--save-dev) prisma
 * npm i @prisma/client
 * npx prisma init
 */
