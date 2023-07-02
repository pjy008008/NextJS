import "../styles/globals.css";
import LayOut from "@/components/LayOut";
export default function App({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  );
}
