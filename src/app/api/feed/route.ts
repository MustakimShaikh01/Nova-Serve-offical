import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const res = await fetch("https://blog.podman.io/feed/", {
      headers: {
        "User-Agent": "NovaServe-Cloud-FeedReader/1.0",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Podman feed: ${res.statusText}`);
    }

    const xmlText = await res.text();

    // Parse RSS XML items using regex for maximum efficiency in Edge/Node runtime
    const items: Array<{
      title: string;
      link: string;
      pubDate: string;
      creator: string;
      description: string;
      category: string;
    }> = [];

    const itemMatches = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];

    for (const itemXml of itemMatches.slice(0, 10)) {
      const titleMatch = itemXml.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/);
      const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/);
      const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const creatorMatch = itemXml.match(/<dc:creator>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/dc:creator>/);
      const descMatch = itemXml.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/);
      const categoryMatch = itemXml.match(/<category>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/category>/);

      const cleanText = (str?: string) =>
        str
          ? str
              .replace(/<!\[CDATA\[|\]\]>/g, "")
              .replace(/<[^>]+>/g, "")
              .replace(/&#8217;/g, "'")
              .replace(/&#8220;|&#8221;/g, '"')
              .replace(/&#8211;/g, "-")
              .replace(/&#8230;/g, "...")
              .replace(/&amp;/g, "&")
              .trim()
          : "";

      const rawDesc = descMatch ? descMatch[1] : "";
      const cleanedDesc = cleanText(rawDesc);

      items.push({
        title: cleanText(titleMatch ? titleMatch[1] : "Podman Update"),
        link: linkMatch ? linkMatch[1].trim() : "https://blog.podman.io",
        pubDate: pubDateMatch ? cleanText(pubDateMatch[1]) : "Recent",
        creator: creatorMatch ? cleanText(creatorMatch[1]) : "Podman Team",
        description: cleanedDesc || "Latest updates from Podman container ecosystem.",
        category: categoryMatch ? cleanText(categoryMatch[1]) : "Podman News",
      });
    }

    return NextResponse.json({
      success: true,
      feedUrl: "https://blog.podman.io/feed/",
      title: "Podman Official Engineering Feed",
      items,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to parse Podman feed",
        feedUrl: "https://blog.podman.io/feed/",
      },
      { status: 500 }
    );
  }
}
