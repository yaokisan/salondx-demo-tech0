'use client';

interface InvitationSectionProps {
  invitationMessage: string;
  xAccountUrl: string;
}

export default function InvitationSection({ invitationMessage, xAccountUrl }: InvitationSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            THANK YOU !!
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            {invitationMessage}
          </p>
          
          <a
            href={xAccountUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg 
              className="w-6 h-6 mr-3" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            @sc_fas_cod
          </a>
          
          <div className="mt-8 text-sm text-gray-500">
            折角のご縁なので、気軽にDMください😍
          </div>
        </div>
      </div>
    </section>
  );
}