import Link from "next/link";
import Image from "next/image";

interface PremiumProductCardProps {
  title: string;
  description: string;
  href: string;
  features?: string[];
  badge?: string;
  image?: string;
}

export default function PremiumProductCard({ title, description, href, features, badge, image }: PremiumProductCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Gradient Border Emulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50 transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-[1px] rounded-2xl bg-white" />

      <div className="relative h-full p-6 flex flex-col">
        {badge && (
          <div className="absolute top-0 right-0 z-10">
             <span className="inline-block rounded-bl-xl bg-gradient-to-r from-accent to-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
              {badge}
            </span>
          </div>
        )}
        
        {/* Product Image Area with Glow */}
        <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-8 pb-6">
            {/* Subtle glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
            
          {image ? (
            <div className="relative h-56 w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
              />
            </div>
          ) : (
            <div className="flex h-56 items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-dark to-gray-700 shadow-xl">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <h3 className="mb-3 text-2xl font-bold text-dark transition-colors group-hover:text-accent">
          {title}
        </h3>
        
        <p className="mb-6 text-sm leading-relaxed text-gray-500">
          {description}
        </p>

        {features && features.length > 0 && (
          <ul className="mb-6 space-y-3 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4 border-t border-gray-100">
             <span className="flex items-center gap-2 text-sm font-bold text-accent group-hover:gap-3 transition-all">
            View Details
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            </span>
        </div>
      </div>
    </Link>
  );
}
