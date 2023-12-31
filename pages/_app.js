import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const isTaskingURL = router.asPath.includes("/tasking/");
    if (!email && isTaskingURL) {
      router.push("/signup");
    } else if (email && router.pathname === "/") {
      router.push("/tasking/home");
    }
  }, [router.pathname]);

  return (
    <>

<Head>
        <title>Tasking</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
