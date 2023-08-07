import Link from 'next/link';

const Links = [
  {
    path: 'https://www.nic.kids/policy/guiding-principles',
    to: '.KiDS Guiding Principles',
  },
  {
    path: 'https://www.nic.kids/policy/content-guide',
    to: 'Kids-Friendly Content Guide',
  },
  {
    path: 'https://www.nic.kids/policy/anti-abuse',
    to: '.KiDS Anti-Abuse Policy',
  },
  {
    path: 'https://www.nic.kids/policy/personal-data-protection',
    to: '.KiDS Personal Data Protection Policy',
  },
  {
    path: 'https://www.nic.kids/policy/sunrise-dispute-resolution',
    to: '.KiDS Sunrise Dispute Resolution Policy',
  },
  {
    path: 'https://www.nic.kids/policy/objections-take-down-appeals',
    to: '.KiDS Objections Take-down Process and Appeals Policy',
  },
  {
    path: 'https://www.nic.kids/policy/sunrise-startup',
    to: '.KiDS Sunrise & Startup Policies',
  },
];

export default function Policy() {
  return (
    <section>
      <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div className="w-full mx-auto">
            <h2>.KiDS Registry Policies</h2>
            <p>
              Sebelum kamu meminta untuk mendaftarkan subdomain harap mengunduh
              dan membaca beberapa dokumen berikut ini terlebih dahulu.
            </p>
            {Links.map((link, key) => (
              <p className="mt-4" key={key}>
                <Link
                  className="group relative inline-block focus:outline-none focus:ring"
                  href={link.path}
                >
                  <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-rose-400 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
                  <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                    {link.to}
                  </span>
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
