import PullRequest from '../Button/PullRequest';

export default function Hero() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          Subdomain Gratis{' '}
          <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500 lg:inline">
            *.neko.kids
          </span>{' '}
          untuk pembelajaran dan aktivitas anak-anak!
        </h1>
        <p className="px-0 mb-6 text-lg text-gray-700 md:text-xl lg:px-24">
          hai kamu bisa menggunakan subdomain *.neko.kids untuk berbagai macam
          projects mulai dari membuat website mewarnai / mengerjakan tugas
          sekolah / berhitung dan aktivitas anak-anak lainnya.
        </p>
        <p className="mt-4">
          <PullRequest />
        </p>
      </div>
    </section>
  );
}
