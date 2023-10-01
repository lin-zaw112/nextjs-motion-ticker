import Image from "next/image";
import { Inter } from "next/font/google";
import Testimonials from "./Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid place-items-center">
      <Testimonials />
    </main>
  );
}
