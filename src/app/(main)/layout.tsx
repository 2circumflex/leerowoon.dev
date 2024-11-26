import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-1">{children}</main>
      <Footer />
    </>
  );
}
