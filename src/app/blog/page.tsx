import Link from "next/link";
import { BookOpen, Calendar, Clock, User, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { NovaFeedSection } from "@/components/NovaFeedSection";

export default function BlogPage() {
  const posts = [
    {
      slug: "compiling-infrastructure-ast-vs-hcl",
      title: "Why Compiling Infrastructure from TypeScript AST Outperforms HCL & Raw YAML",
      excerpt: "An in-depth analysis of static code analysis versus imperative cloud API scripting. Discover how NovaServe extracts least-privilege IAM policies, detects missing env bindings at build time, and eliminates runtime provisioning surprises.",
      date: "August 14, 2026",
      readTime: "6 min read",
      author: "Md Shadab Azam Ansari, Lead Compiler Architect",
      category: "COMPILER ARCHITECTURE",
      summary: "In traditional DevOps, infrastructure code is isolated in separate YAML files or HCL scripts. When application logic changes—such as adding an S3 write call or sending a message to SQS—the developer must manually update Terraform manifests. NovaServe's static AST parser detects function calls directly inside TypeScript and provisions required cloud infrastructure automatically."
    },
    {
      slug: "multi-cloud-sharding-aws-cloudflare-gcp",
      title: "Zero-Latency Multi-Cloud Sharding: Combining AWS Lambdas with Cloudflare Edge KV",
      excerpt: "How NovaServe routes latency-sensitive read operations to 320+ Cloudflare Edge PoPs while keeping heavy compute workloads running on AWS Arm64 Graviton instances.",
      date: "August 10, 2026",
      readTime: "8 min read",
      author: "Mustakim Shaikh, Co-Maintainer & Open Source Core Contributor",
      category: "MULTI-CLOUD ENGINE",
      summary: "Global web applications often suffer from sub-optimal database latency. By compiling TypeScript application routes into a hybrid state graph, NovaServe deploys read-heavy cached endpoints to Cloudflare Workers KV and transaction processing pipelines to AWS Lambda, cutting global cold start latency from 450ms down to sub-15ms."
    },
    {
      slug: "automated-iam-least-privilege-generation",
      title: "Automated Least-Privilege IAM: Eliminating Wildcard Permissions Forever",
      excerpt: "How NovaServe's parser infers exact AWS IAM policies at build time, preventing over-privileged security credentials and accidental credential leakage.",
      date: "August 2, 2026",
      readTime: "5 min read",
      author: "Md Shadab Azam Ansari, Lead Compiler Architect",
      category: "SECURITY & COMPLIANCE",
      summary: "One of the most common causes of cloud security breaches is the use of wildcard IAM policies ('s3:*', 'dynamodb:*'). NovaServe analyzes the exact API method invocations in your TypeScript handler and generates granular IAM policy JSON with exact ARN scoping during compilation."
    },
    {
      slug: "sub-second-local-emulation-hono-dev-sandbox",
      title: "Sub-Second Local Emulation: Developing Cloud Apps at the Speed of Light",
      excerpt: "Why waiting 10 minutes for cloud deployment pipelines kills developer velocity, and how `nova dev` emulates AWS SQS, S3, and API Gateway locally in under 200ms.",
      date: "July 24, 2026",
      readTime: "7 min read",
      author: "Mustakim Shaikh, Co-Maintainer & Open Source Core Contributor",
      category: "DEVELOPER EXPERIENCE",
      summary: "Local developer experience is paramount. NovaServe includes a built-in emulator powered by Hono and local filesystem storage. When you run `nova dev`, your HTTP routes, event queues, and storage buckets run instantly on your workstation with instant hot-reloading."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-gray-900 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Blog Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <BookOpen className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>OPEN SOURCE ENGINEERING BLOG & ECOSYSTEM FEEDS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            NovaServe Engineering Insights
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Technical deep-dives on compiler theory, multi-cloud sharding, zero-trust security, plus live official NovaServe Cloud RSS stream.
          </p>
        </div>

        {/* Featured Post Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border-2 border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#FFB020] text-black font-mono font-black text-xs">
              FEATURED ENGINEERING ESSAY
            </span>
            <span className="text-gray-400 font-bold">{posts[0].date} • {posts[0].readTime}</span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              {posts[0].title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              {posts[0].excerpt}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-gray-200 font-sans leading-relaxed border-l-4 border-l-[#FFB020]">
            <strong className="text-white block mb-1">Key Takeaway:</strong>
            {posts[0].summary}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="text-gray-400 font-bold">By {posts[0].author}</span>
            <Link
              href="/docs"
              className="px-5 py-2.5 rounded-xl bg-[#FFB020] hover:bg-[#FFC44D] text-black font-extrabold flex items-center space-x-2 transition-all cursor-pointer shadow-md"
            >
              <span>Read Full Documentation Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* NovaServe Live Official RSS Feed Stream */}
        <div className="pt-4">
          <NovaFeedSection />
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {posts.slice(1).map((post, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:border-amber-400 transition-all space-y-5 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-extrabold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 font-bold">{post.date} • {post.readTime}</span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 leading-tight">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {post.excerpt}
                </p>

                <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-800 font-normal leading-relaxed border-l-4 border-l-amber-500">
                  {post.summary}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-700 font-bold truncate max-w-[240px]">By {post.author}</span>
                <Link
                  href="/docs"
                  className="text-black font-extrabold flex items-center space-x-1.5 hover:text-amber-700 transition-colors"
                >
                  <span>Explore Docs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
