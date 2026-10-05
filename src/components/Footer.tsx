import Image from 'next/image';
import Link from 'next/link';

const linkClass = 'hover:text-brand-navy transition-colors';

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-brand-border bg-white">
      <div className="section-container">
        <div className="grid gap-10 border-b border-brand-border pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <Image src="/user-icon.png" alt="" width={36} height={36} />
              <span className="text-2xl font-bold text-brand-navy">AnimalCare<span className="text-brand-primary">360</span></span>
            </div>
            <p className="max-w-md text-sm leading-6 text-brand-muted">Cattle fattening management software for controlling animal cost, feed, weight performance, health, inventory, and profitability from purchase to sale.</p>
            <a href="https://app.animalcare360.com" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-bold text-brand-primary">Open the AnimalCare360 portal</a>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase text-brand-navy">Cattle economics</h2>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><Link href="/cattle-fattening-software" className={linkClass}>Fattening software</Link></li>
              <li><Link href="/cattle-fattening-profit-calculator" className={linkClass}>Profit calculator</Link></li>
              <li><Link href="/solutions/cattlepro" className={linkClass}>CattlePro</Link></li>
              <li><Link href="/solutions/cattle-management" className={linkClass}>Cattle management</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase text-brand-navy">Company</h2>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><Link href="/pricing" className={linkClass}>Pricing</Link></li>
              <li><Link href="/demo" className={linkClass}>Book a demo</Link></li>
              <li><Link href="/customers" className={linkClass}>Customer outcomes</Link></li>
              <li><Link href="/resources" className={linkClass}>Resources</Link></li>
              <li><Link href="/blog" className={linkClass}>Blog</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase text-brand-navy">Other products</h2>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><Link href="/solutions/feed-retail" className={linkClass}>Feed retail</Link></li>
              <li><Link href="/solutions/animal-trading" className={linkClass}>Animal trading</Link></li>
              <li><Link href="/solutions/pet-hospital" className={linkClass}>Veterinary & pet hospital</Link></li>
              <li><a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className={linkClass}>WhatsApp sales</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-center text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} AnimalCare360. All rights reserved.</p>
          <div className="flex justify-center gap-5"><Link href="/privacy" className={linkClass}>Privacy</Link><Link href="/terms" className={linkClass}>Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
