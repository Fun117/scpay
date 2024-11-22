import Footer from "@/components/nav/footer";
import Header from "@/components/nav/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container flex flex-col items-start max-w-[1024px] h-full min-h-dvh overflow-y-auto px-8 mt-10 mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
