'use client';

import { useState } from 'react';

export default function AfterwordSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left bg-white hover:bg-gray-50 active:bg-gray-100 active:scale-95 px-6 py-4 rounded-lg transition-all duration-150 flex items-center justify-between shadow-sm border border-gray-200"
          >
            <span className="text-lg font-medium text-gray-900">あとがき</span>
            <svg 
              className={`w-5 h-5 text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isExpanded && (
            <div className="mt-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>あとがき</p>
                <p>
                  実は、発表当日の数日前に、Salon DXの事業がアプリを使わない形にピボットしてしまったので、急遽プレゼンを全部作り直して今回このような形に至りました笑
                </p>
                
                <p>
                  Salon DXは、実はセールスする過程で顧客ペインが「集客」だということに気付き、バックオフィスの業務効率やAIに関心を示すのは"うまく行ってるサロン"だけだということがわかってしまったため、このようなことになってしまいました。
                </p>
                
                <p>
                  なので、現在集客ソリューションに軌道修正しながら、引き続きSalon DXは動き続けています。
                </p>
                
                <p>
                  ちなみに、多分MySQLとAzureのPaaSでデプロイしないといけないルールだったのですが、予定していたプロダクトが急遽なくなってしまったので発表するものがなく、、、
                </p>
                
                <p>
                  結果、このデモ用サイトだけでもAzureでデプロイしたかったのですが、上手くいかず、結局これを書いているいまは当日の夜の3時なのですが、これから諦めてVercelでデプロイすることにします笑
                </p>
                <p>　</p>
                <p>さいごに</p>
                <p>
                  我々は、美容業界向けのDXソリューションを提供する事業、マーケティングプロデュース業、YouTube番組プロデュース業などに取り組んでいます。
                </p>
                <p>少しでも興味を持っていただけた方、ぜひぜひ声をかけてください。食事や飲みのお誘いも大歓迎です！</p>
                <p className="font-medium text-gray-900">
                  本日は、ありがとうございました。
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}