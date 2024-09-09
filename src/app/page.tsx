import { api, HydrateClient } from "@/trpc/server";
import Link from "next/link";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-purple-500 relative ">
        <div className="flex flex-col h-auto p-8 z-10 rounded items-center justify-center bg-gradient-to-b from-[#2f026d3b] to-[#15162c] text-white ">
          <h1 className="text-4xl font-bold mb-8">Hoş Geldiniz!</h1>
          <p className="text-lg mb-8">Bu sınav 10 sorudan oluşmaktadır. Başlamak için aşağıdaki butona tıklayın.</p>
          <p className="text-lg mb-8">Birden fazla doğru cevap olabilir yalnızca tek şık işaretlenebilir</p>
          <p className="text-lg mb-8">Soru başlıkları kopyalanamaz</p>
          <p className="text-lg mb-8">Sorunun ilk 10 saniyesi işaretleme yapılamaz</p>
          <p className="text-lg mb-8">Sayfa yenilemesiyle ekstra süre kazanılamaz</p>
          <p className="text-lg mb-8">Soruda geçen süre kaydedilmektedir.</p>
          <p className="text-lg mb-8">Sınav sonucunda doğru ve işaretlenen şıklar görunmektedir.</p>
          <Link href="/quiz">
            <button className="py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-700">
              Sınavı Başlat
            </button>
          </Link>
        </div>
      </main>
    </HydrateClient>
  );
}
