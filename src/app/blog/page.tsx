'use client';
import * as motion from 'motion/react-client';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '../data/blogPosts';

export default function BlogPage() {
  return (
    <div className="min-h-screen py-24 px-6 sm:px-8 md:px-20 lg:px-32 bg-slate-300">
      <motion.h1 
        initial={{opacity: 0, y: -50}} 
        animate={{opacity: 1, y: 0}}  
        transition={{duration: 0.5}}
        className="text-6xl sm:text-8xl md:text-9xl lg:text-[150px] font-mono tracking-tighter text-black mb-8"
      >
        BLOG
      </motion.h1>

      <motion.p
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.2}}
        className="text-xl lg:text-2xl text-black/80 font-josefinSlab mb-12 max-w-3xl"
      >
        Thoughts, tutorials, and insights on backend development, cybersecurity, and software engineering.
      </motion.p>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: index * 0.1}}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-400 hover:border-black cursor-pointer">
                <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3 font-josefinSlab hover:text-slate-600 transition-colors">
                  {post.title}
                </h2>

                <div className="flex flex-wrap gap-4 text-slate-600 text-sm mb-4">
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

                <p className="text-slate-700 text-base lg:text-lg mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-black/90 text-white text-sm rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
