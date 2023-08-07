const Lists = [
  {
    title: `Privacy`,
    description: `neko.kids menggunakan Cloudflare untuk penyedia DNS, jadi informasi apa pun yang dikumpulkan akan ada di sana di cloudflare itu sendiri. Karena itu, kami sendiri tidak mengumpulkan informasi tambahan apa pun.`,
  },
  {
    title: `Terms`,
    description: `Anda bertanggung jawab atas semua konten yang ditampilkan di situs(projects) Anda. Kami berhak menghapus siapa pun dari layanan ini dengan alasan apa pun yang kami anggap pantas. ("Don't be evil")`,
  },
];
export default function Terms() {
  return (
    <section className="bg-gray-950 text-white">
      <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-xl">
          {Lists.map(list => (
            <>
              <p className="text-3xl font-bold sm:text-4xl">{list.title}</p>
              <p className="mt-4 text-gray-300">{list.description}</p>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
