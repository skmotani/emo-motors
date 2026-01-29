import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  features?: string[];
  badge?: string;
  image?: string;
}

export default function ProductCard({ title, description, href, features, badge, image }: ProductCardProps) {
  return (
    <Link href={href} className="card group block overflow-hidden">
      {badge && (
        <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {badge}
        </span>
      )}
      
      {/* Product Image */}
      {image ? (
        <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="w-16 h-16 bg-gradient-to-br from-dark to-gray-600 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      )}

      <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      
      <p className="text-muted text-sm mb-4">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-1 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-text flex items-center gap-2">
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
        View Details
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
