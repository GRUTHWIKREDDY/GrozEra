import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Download, Mail } from 'lucide-react';

const mockPosts = [
  {
    id: '1',
    title: 'The Ultimate Guide to Company Registration in 2024',
    excerpt: 'Navigate the complexities of incorporating your startup with our step-by-step guide on Private Limited and LLP structures.',
    author: 'GrozEra Insights',
    date: 'Oct 12, 2024',
    category: 'Incorporation',
  },
  {
    id: '2',
    title: 'Why Trademark Registration is Crucial for Modern MSMEs',
    excerpt: 'Protecting your IP isn’t just for enterprise giants. Learn how defending your brand name early saves millions down the line.',
    author: 'Legal Team',
    date: 'Sep 28, 2024',
    category: 'Intellectual Property',
  },
  {
    id: '3',
    title: 'Demystifying ISO 9001: Getting Your Business Certified',
    excerpt: 'A comprehensive breakdown of the gap analysis and preparation required to achieve ISO 9001 quality management certification.',
    author: 'Compliance Experts',
    date: 'Sep 15, 2024',
    category: 'Certifications',
  }
];

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Lead Magnet Section */}
      <section className="bg-olive-900 border-b border-olive-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-olive-800 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-olive-700 opacity-50 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-900 text-olive-200 text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm border border-olive-700">
                  <Download className="w-4 h-4" /> Free Download
                </span>
                <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl mb-4">
                  The 2024 Essential Startup Compliance Checklist
                </h2>
                <p className="text-lg text-olive-100 mb-0 leading-relaxed max-w-2xl">
                  Don't let legal blind spots ruin your growth. Download our comprehensive free checklist designed to help Indian startups navigate incorporation, taxation, and employee compliance.
                </p>
              </div>
              <div className="lg:col-span-2">
                <form className="bg-white rounded-xl p-6 shadow-xl" onSubmit={(e) => e.preventDefault()}>
                  <h3 className="text-gray-900 font-bold text-lg mb-4">Where should we send your copy?</h3>
                  <div className="space-y-4">
                    <div>
                      <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-olive-500 text-gray-900 outline-none" required />
                    </div>
                    <div>
                      <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-olive-500 text-gray-900 outline-none" required />
                    </div>
                    <button type="submit" className="w-full bg-olive-700 text-white font-semibold py-3 rounded-md hover:bg-olive-800 transition-colors flex items-center justify-center gap-2">
                       <Mail className="w-5 h-5"/> Send me the Guide
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-gray-900 sm:text-5xl mb-4">
              Insights & Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert resources on business growth, legal compliance, and strategic structuring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mockPosts.map((post) => (
              <article key={post.id} className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-[16/9] bg-olive-100 relative overflow-hidden flex items-center justify-center">
                   <span className="text-olive-500 font-bold tracking-widest uppercase opacity-50 block group-hover:scale-105 transition-transform duration-500">
                     GrozEra Blog
                   </span>
                </div>
                <div className="flex-1 p-8 flex flex-col">
                  <div className="flex items-center text-sm text-olive-600 font-medium mb-3">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-olive-700 transition-colors">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1.5" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1.5" />
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
