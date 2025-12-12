export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-secure-apis-nodejs",
    title: "Building Secure APIs with Node.js: Best Practices",
    excerpt: "Learn essential security practices for building robust and secure REST APIs with Node.js, from authentication to rate limiting.",
    date: "2024-12-01",
    readTime: "8 min read",
    tags: ["Node.js", "Security", "API", "Backend"],
    content: `
# Building Secure APIs with Node.js: Best Practices

Security should never be an afterthought when building APIs. In this post, I'll share the essential practices I follow to ensure my Node.js APIs are secure from the ground up.

## 1. Authentication & Authorization

Always implement proper authentication. JWT (JSON Web Tokens) is a popular choice, but ensure you:
- Store tokens securely (httpOnly cookies)
- Implement token expiration and refresh mechanisms
- Use strong secret keys (minimum 256-bit)

## 2. Input Validation

Never trust user input. Use libraries like Joi or express-validator to:
- Validate all incoming data
- Sanitize inputs to prevent injection attacks
- Set strict schemas for API endpoints

## 3. Rate Limiting

Protect your API from abuse by implementing rate limiting:
- Use Redis for distributed rate limiting
- Set appropriate limits per endpoint
- Return meaningful error messages

## 4. HTTPS Everywhere

Always use HTTPS in production. It's non-negotiable for:
- Protecting data in transit
- Preventing man-in-the-middle attacks
- Building user trust

## 5. Security Headers

Use helmet.js to set security headers automatically:
- X-Frame-Options
- Content-Security-Policy
- X-Content-Type-Options

## Conclusion

Security is a journey, not a destination. Keep learning, stay updated with latest vulnerabilities, and always test your APIs thoroughly.

Happy coding, and stay secure! 🔒
    `
  },
  {
    slug: "my-journey-into-cybersecurity",
    title: "My Journey into Cybersecurity: From Curious Student to Ethical Hacker",
    excerpt: "A personal story about discovering cybersecurity, the challenges I faced, and what drives my passion for protecting digital systems.",
    date: "2024-11-15",
    readTime: "6 min read",
    tags: ["Cybersecurity", "Career", "Personal"],
    content: `
# My Journey into Cybersecurity

It all started with a simple question: "How do hackers break into systems?"

## The Beginning

As an Electronics and Communication Engineering student, I was always fascinated by how things work under the hood. But it wasn't until I watched a documentary about ethical hacking that something clicked.

## First Steps

My journey began with:
- Learning Linux fundamentals
- Understanding networking protocols
- Practicing on platforms like TryHackMe and HackTheBox
- Reading about famous security breaches

## The Challenges

The learning curve was steep. Some of the biggest challenges I faced:
- Overwhelming amount of information
- Imposter syndrome
- Balancing studies with self-learning
- Finding quality resources

## What Keeps Me Going

What drives my passion for cybersecurity?
- The thrill of solving puzzles
- Protecting people and organizations
- Constant learning and evolution
- The amazing community

## Advice for Beginners

If you're starting your cybersecurity journey:
1. Start with the fundamentals (networking, OS, programming)
2. Practice on legal platforms
3. Join communities and attend CTF competitions
4. Never stop learning
5. Stay ethical, always

## Looking Forward

I'm excited about the future of cybersecurity and my role in it. Whether it's contributing to open-source security tools or helping organizations build secure systems, I'm ready for the challenge.

The journey continues... 🛡️
    `
  },
  {
    slug: "lessons-from-first-backend-project",
    title: "Lessons from My First Backend Project: What I Wish I Knew",
    excerpt: "Reflections on building my first production-ready backend application, the mistakes I made, and the valuable lessons I learned.",
    date: "2024-10-20",
    readTime: "10 min read",
    tags: ["Backend", "Node.js", "Learning", "Best Practices"],
    content: `
# Lessons from My First Backend Project

Building your first backend project is exciting, terrifying, and incredibly educational. Here's what I learned from mine.

## The Project

I built a real-time chat application with:
- Node.js and Express
- Socket.io for WebSockets
- MongoDB for data persistence
- JWT authentication

## Mistake #1: Over-engineering

I tried to build everything from scratch, including:
- Custom authentication system
- My own ORM
- Hand-rolled validation

**Lesson:** Use established libraries and frameworks. They exist for a reason.

## Mistake #2: Ignoring Error Handling

My early code had minimal error handling. One unhandled promise rejection could crash the entire server.

**Lesson:** Implement comprehensive error handling from day one:
- Try-catch blocks
- Global error handlers
- Proper logging
- Graceful shutdowns

## Mistake #3: Poor Database Design

I didn't think through my schema design, leading to:
- Inefficient queries
- Data redundancy
- Difficult migrations

**Lesson:** Spend time on database design. Draw diagrams, normalize data, think about queries you'll need.

## Mistake #4: No Testing

I deployed without proper tests, leading to bugs in production.

**Lesson:** Write tests. Start with integration tests, add unit tests for critical logic.

## What I Did Right

Despite the mistakes, I did some things well:
- Used environment variables for configuration
- Implemented logging from the start
- Documented my API
- Used version control effectively

## The Biggest Takeaway

The most important lesson? **Just start building.** You'll make mistakes, but that's how you learn. Every error is a lesson, every bug is a teacher.

## Moving Forward

These lessons shaped how I approach backend development now:
- Plan before coding
- Use established patterns
- Test thoroughly
- Learn from others' experiences
- Keep security in mind

What were your lessons from your first project? I'd love to hear! 🚀
    `
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}
