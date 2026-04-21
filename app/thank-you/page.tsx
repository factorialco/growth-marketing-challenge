import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Thank you!</h1>
        <p className="text-muted-foreground text-base max-w-md">
          We have received your request and will contact you soon.
        </p>
      </main>
      <Footer />
    </div>
  );
}
