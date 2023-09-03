import Link from 'next/link';

function Footer() {
  return (
    <div>
      <div className="bg-base-300 flex justify-center">
        <footer className="footer p-8 max-w-5xl  text-base-content">
          <div>
           <h1>Google For Developers Indore</h1>

            <br />
            <div className="flex gap-4 flex-wrap">

              <Link href="/gdgindore/about-us">About GDG Program</Link>
              <Link href="/gdgcloudindore/about-us">About GDG Cloud Program</Link>
              <Link href="/wtmindore/about-us">About WTM Program</Link>
              <Link href="/tensorflowindore/about-us">About Tensorflow Program</Link>
              <Link href="/tensorflowindore/faq">FAQ</Link>
              <Link href="/code-of-conduct">Code of conduct</Link>
              <Link href="/community-guidelines">Community Guidelines</Link>

</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
