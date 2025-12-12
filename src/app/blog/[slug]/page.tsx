'use client';
import * as motion from 'motion/react-client';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getBlogPost } from '../../data/blogPosts';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen py-24 px-6 sm:px-8 md:px-20 lg:px-32 bg-slate-300">
        <h1 className="text-4xl font-bold text-black">Post not found</h1>
        <Link href="/blog" className="text-black hover:underline mt-4 inline-block">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6 sm:px-8 md:px-20 lg:px-32 bg-slate-300">
      <Link href="/blog">
        <motion.button
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          className="flex items-center gap-2 text-black hover:text-slate-600 transition-colors mb-8 font-josefinSlab"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </motion.button>
      </Link>

      <motion.article
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="bg-white/90 backdrop-blur-sm rounded-lg p-6 lg:p-12 shadow-lg border border-slate-400"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 font-josefinSlab leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-4 text-slate-600 text-sm mb-6 pb-6 border-b border-slate-300">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-black/90 text-white text-sm rounded-full font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg max-w-none text-slate-800">
          <ReactMarkdown
            components={{
              h1: ({ ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-black font-josefinSlab" {...props} />,
              h2: ({ ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3 text-black font-josefinSlab" {...props} />,
              h3: ({ ...props}) => <h3 className="text-xl font-bold mt-4 mb-2 text-black font-josefinSlab" {...props} />,
              p: ({ ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
              ul: ({ ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
              ol: ({ ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
              li: ({ ...props}) => <li className="ml-4" {...props} />,
              strong: ({ ...props}) => <strong className="font-bold text-black" {...props} />,
              code: ({ ...props}) => <code className="bg-slate-200 px-2 py-1 rounded text-sm font-mono" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </motion.article>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.3}}
        className="mt-12 text-center"
      >
        <Link href="/blog">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors font-josefinSlab">
            Read More Articles
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
