import Link from 'next/link';

const Menus = [
  {
    path: '/',
    to: 'Home',
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="mt-4 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            {Menus.map((menu, key) => (
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href={menu.path}
                key={key}
              >
                {menu.to}
              </Link>
            ))}
          </ul>
          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            neko.kids
          </p>
        </div>
      </div>
    </footer>
  );
}
