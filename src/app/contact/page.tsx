"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  Github,
  ExternalLink,
  Package,
  Globe,
  Sparkles,
  ShieldCheck,
  Zap,
  HelpCircle,
  PhoneCall,
  Clock,
  ArrowRight
} from "lucide-react";
import { DiamondIcon } from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "General Inquiry & Overview",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-28 pb-24 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold">
            <Mail className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>GET IN TOUCH WITH OUR MAINTAINERS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Contact NovaServe Engineering
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Have questions about multi-cloud AST compilation, enterprise support, security disclosures, or provider integration? We're here to help.
          </p>
        </div>

        {/* 2-Column Grid: Form + Maintainer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
            <div className="space-y-1 pb-4 border-b border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Send us a message</h2>
              <p className="text-xs sm:text-sm font-semibold text-gray-600">
                Fill out the form below and our maintainers will respond to your email within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900">Message Received!</h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-sm mx-auto">
                  Thank you, <span className="font-bold text-gray-900">{formData.name || "Developer"}</span>! Your inquiry regarding <span className="font-bold text-emerald-800">{formData.topic}</span> has been sent to our core maintainers. We'll reply to <span className="font-bold text-gray-900">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", topic: "General Inquiry & Overview", message: "" });
                  }}
                  className="px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-mono font-bold hover:bg-black transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-gray-700 uppercase">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#FFB020] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-gray-700 uppercase">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#FFB020] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Topic Select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-gray-700 uppercase">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-mono text-gray-900 outline-none focus:border-[#FFB020] transition-all cursor-pointer font-medium"
                  >
                    <option value="General Inquiry & Overview">General Inquiry & Overview</option>
                    <option value="Enterprise Support">Enterprise Support & Custom SLAs</option>
                    <option value="Security Disclosure">Security & Vulnerability Disclosure</option>
                    <option value="Provider Integration">Cloud Provider Adapter Integration</option>
                    <option value="Partnership">SaaS & Open-Source Partnership</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-gray-700 uppercase">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your cloud architecture, team requirements, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-xs sm:text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#FFB020] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#FFB020] hover:bg-[#FFC44D] text-black font-extrabold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      <span>Send Message to Team</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Maintainers Info & SLA (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Maintainer 1: Md Shadab Azam Ansari */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md space-y-4">
              <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                <div className="w-11 h-11 rounded-full bg-[#FFB020] text-black flex items-center justify-center font-black text-lg shadow-md">
                  MA
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Md Shadab Azam Ansari</h3>
                  <p className="text-xs text-amber-900 font-bold font-mono">Author & Lead Compiler Architect</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-700">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#FFB020] shrink-0" />
                  <a href="mailto:md.shadab.azam.ansari@gmail.com" className="hover:text-amber-600 font-bold truncate">
                    md.shadab.azam.ansari@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a href="https://md-shadab-azam-ansari.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 font-bold flex items-center gap-1">
                    <span>Author Portfolio</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4 text-[#FFB020] shrink-0" />
                  <a href="https://www.npmjs.com/package/novaserve" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 font-bold flex items-center gap-1">
                    <span>NPM: novaserve@2.1.6</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-gray-900 shrink-0" />
                  <a href="https://github.com/novaserve-cloud/novaserve" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 font-bold flex items-center gap-1">
                    <span>GitHub: novaserve-cloud/novaserve</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Maintainer 2: Mustakim Shaikh */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md space-y-4">
              <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                <div className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-lg shadow-md">
                  MS
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Mustakim Shaikh</h3>
                  <p className="text-xs text-emerald-700 font-bold font-mono">Co-Maintainer & Open Source Core Contributor</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-700">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a href="mailto:Mustakimshaikhprof@gmail.com" className="hover:text-amber-600 font-bold truncate">
                    Mustakimshaikhprof@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-gray-900 shrink-0" />
                  <a href="https://github.com/MustakimShaikh01" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 font-bold flex items-center gap-1">
                    <span>GitHub: MustakimShaikh01</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-bold text-gray-900">Domain: novaserve.cloud</span>
                </div>
              </div>
            </div>

            {/* Support Response Time Banner */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 shadow-xl">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#FFB020] font-bold">
                <Clock className="w-4 h-4" />
                <span>RESPONSE TIME & SLA</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                General inquiries and GitHub issues are typically reviewed within 24 hours. For critical security disclosures, review our guidelines in <span className="text-white font-mono font-bold">SECURITY.md</span>.
              </p>
            </div>

            {/* Quick Links Card */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-3">
              <div className="text-xs font-mono uppercase font-black text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FFB020]" />
                <span>EXPLORE DOCUMENTATION</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed font-normal">
                Want to view CLI command specs, provider support matrices, or type definitions?
              </p>
              <Link
                href="/docs"
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-black hover:text-amber-800 transition-colors"
              >
                <span>Go to NovaServe Docs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-16 pt-12 border-t border-gray-200 space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xs text-gray-500 font-semibold">
              Quick answers about NovaServe licensing, support, and enterprise features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h3 className="text-sm font-bold text-gray-900">Is NovaServe free for commercial use?</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Yes! NovaServe is open-source under the Apache License 2.0. You can build and commercialize projects freely without restrictions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h3 className="text-sm font-bold text-gray-900">How do I report a security issue?</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Please email security vulnerability reports directly to maintainers at <span className="font-mono text-gray-900 font-bold">md.shadab.azam.ansari@gmail.com</span> or <span className="font-mono text-gray-900 font-bold">Mustakimshaikhprof@gmail.com</span> for private disclosure.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <h3 className="text-sm font-bold text-gray-900">How do I get started with the CLI?</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Simply run <span className="font-mono text-amber-900 font-bold">npm i -g novaserve</span> and run <span className="font-mono text-gray-900 font-bold">nova init</span> to scaffold your app.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
