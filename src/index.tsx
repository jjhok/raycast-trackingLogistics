import MainPage from "./pages/MainPage";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default function main() {
  return <MainPage></MainPage>;
}
