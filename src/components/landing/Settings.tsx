const Lists = [
  'SSL/TLS - FULL ✅',
  'Always Use HTTPS - Yeep ✅',
  'Minimum TLS Version - 1.2 ✅',
  'Opportunistic Encryption, TLS 1.3 - Yeep ✅',
  'Caching Level, Browser Cache TTL - Standard, 4 hours ✅',
  'HTTP/2, HTTP/2 to Origin, HTTP/3 (with QUIC) - Yeep ✅',
  '0-RTT Connection Resumption - Yeep ✅',
  'DNSSEC - Yeep ✅',
  'Brotli - Yeep ✅',
  'Early Hints - Yeep ✅',
];

export default function Settings() {
  return (
    <section className="bg-gray-950 text-white">
      <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-xl">
          <p className="text-3xl font-bold sm:text-4xl">Pengaturan domain</p>
          <p className="mt-4 text-gray-300">
            neko.kids menggunakan cloudflare untuk keamanan dan kecepatan, Fitur
            dibawah ini Hanya tersedia saat proksi diaktifkan di subdomain yang
            kamu minta.
          </p>
          {Lists.map((list, key) => (
            <p className="mt-4 text-gray-300" key={key}>
              {list}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
