import map_image from "../assets/Blogs/map.png";
import profiles from "../assets/Blogs/expert_profile.jpeg";
import finance_trends from "../assets/Blogs/finance_trends.jpeg";
import market_trends from "../assets/Blogs/market_trends.jpeg";
import metro from "../assets/Blogs/Metro.jpeg";

const BLOG_API_URL = "https://devprath-backend-latest.onrender.com/api/blogs/fetch-all-blogs";
export const BLOG_STORAGE_KEY = "devprath_blogs";
export let dynamicBlogs = [];

export function cleanHtmlContent(content) {
  return content ? content.replaceAll('\\\\"', '"').replaceAll('\\"', '"') : "";
}

export function parseBlog(item) {
  if (!item) return null;
  const cleanContent = cleanHtmlContent(item.content || "");
  const plainText = cleanContent.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return {
    ...item,
    id: item.id || item.slug,
    image: item.imageUrl || item.image || "",
    imageUrl: item.imageUrl || item.image || "",
    category: item.category || item.keywords?.[0] || "",
    excerpt: item.excerpt || plainText,
    content: cleanContent,
    date: item.createdAt
      ? new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      : item.date || "",
    author: item.author || "By Devprath Constructions, Nagpur",
  };
}

export const getStoredBlogs = () => {
  try {
    const raw = localStorage.getItem(BLOG_STORAGE_KEY);
    return raw ? JSON.parse(raw).map(parseBlog).filter(Boolean) : dynamicBlogs;
  } catch {
    return dynamicBlogs;
  }
};

export const setStoredBlogs = (list = []) => {
  dynamicBlogs = (Array.isArray(list) ? list : list?.content || []).map(parseBlog).filter(Boolean);
  try { localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(dynamicBlogs)); } catch { }
  return dynamicBlogs;
};

export const upsertStoredBlog = (b) =>
  setStoredBlogs([b, ...getStoredBlogs().filter((x) => x.id !== b.id && x.slug !== b.slug)]);

export const deleteStoredBlog = (id) =>
  setStoredBlogs(getStoredBlogs().filter((x) => x.id !== id && x.slug !== id));

// 1. Chunk all blogs into pages of 5
export const chunkBlogsIntoPages = (blogs = [], size = 5) => {
  const pages = [];
  for (let i = 0; i < blogs.length; i += size) pages.push(blogs.slice(i, i + size));
  return pages;
};

// 2. Cache-first load + background sync (deletes old storage, renders new)
export async function loadBlogsWithCacheSync(onUpdate) {
  const cached = getStoredBlogs();
  const fetchFresh = async () => {
    try {
      const res = await fetch(BLOG_API_URL);
      const data = await res.json();
      const fresh = setStoredBlogs(data);
      if (onUpdate) onUpdate(fresh);
      return fresh;
    } catch {
      return cached;
    }
  };

  if (cached.length > 0) {
    fetchFresh();
    return cached;
  }
  return await fetchFresh();
}

export const fetchAllBlogs = (force = false) =>
  !force && getStoredBlogs().length ? Promise.resolve(getStoredBlogs()) : loadBlogsWithCacheSync();

export const getBlogBySlug = (slug) => {
  if (!slug) return null;
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, "");
  const all = [...old_blogs.map(parseBlog), ...(dynamicBlogs.length ? dynamicBlogs : getStoredBlogs())];
  return all.find((p) => p.slug === clean) || null;
};

export const getRelatedBlogs = (currentSlug, limit = 4) => {
  const all = [...old_blogs.map(parseBlog), ...(dynamicBlogs.length ? dynamicBlogs : getStoredBlogs())];
  const unique = Array.from(new Map(all.map((b) => [b.slug, b])).values());
  return unique.filter((p) => p.slug !== currentSlug).slice(0, limit);
};

export const old_blogs =
  [
    {
      "content": "<p>The Real Estate (Regulation and Development) Act, or RERA, has revolutionized the Indian real estate market by enhancing transparency, accountability, and buyer protection. For investors in Nagpur, this regulatory framework makes now the perfect time to invest.</p><h2>Transparency and Accountability</h2><p>RERA requires developers to disclose complete project details, ensuring buyers are well informed. This level of transparency allows investors to track construction progress and verify the fulfilment of promises made by developers.</p><h2>Timely Project Completion</h2><p>RERA ensures strict deadlines on developers for continuous respective project development/construction, reducing delays and ensuring timely project delivery. This is crucial for investors looking to start earning returns on their investments sooner.</p><h2>Boosted Market Confidence</h2><p>With RERA providing a reliable legal framework for dispute resolution, market confidence has surged. This has increased trust and attracted more investors, driving demand for quality real estate projects.</p><h2>Nagpur: The Ideal Investment Destination</h2><p>Nagpur’s strategic central location, excellent connectivity, and rapid industrial growth along with roads and infrastructural developments, make it a prime real estate hotspot. The city offers affordable property prices compared to other metros, with significant potential for capital appreciation.</p><h2>Conclusion</h2><p>RERA’s regulatory framework, combined with Nagpur’s growing real estate market, makes this an ideal time to invest. Devprath Constructions is committed in delivering premium living experience, RERA-compliant properties, ensuring secure and profitable investments for buyers.</p>",
      "createdAt": "2026-09-22T13:30:44.596094",
      "id": "1c62bc63-0886-4b28-8133-1eaab21a8496",
      "imageUrl": finance_trends,
      "keywords": [
        "RERA",
        "Real Estate Regulation and Development Act",
        "Nagpur real estate",
        "real estate investment",
        "property investment",
        "buyer protection",
        "RERA compliant projects",
        "Nagpur property"
      ],
      "slug": "rera-and-why-its-the-perfect-time-to-invest-now",
      "title": "RERA and Why It’s the Perfect Time to Invest Now",
      "updatedAt": "2026-09-22T13:30:44.596094"
    },
    {
      "content": "<p>The Nagpur Metro has become a game-changer for the city’s real estate market. Launched with the vision of improving urban mobility and reducing traffic congestion, the Metro project has not only enhanced connectivity but also significantly impacted property values and development patterns across Nagpur.</p><h2>Boosting Property Values</h2><p>The introduction of the Nagpur Metro has led to a notable increase in property values, particularly in areas close to metro stations. Enhanced connectivity and reduced travel time have made these locations more attractive to both homebuyers and investors. Properties within a 1-2 km radius of metro stations have seen price appreciation of 15-20% since the project’s inception.</p><h2>Revitalizing Underdeveloped Areas</h2><p>Previously overlooked neighborhoods are experiencing a surge in development due to the Metro’s influence. Areas that were once considered remote or poorly connected are now becoming prime real estate spots. This revitalization has led to new residential and commercial projects, transforming the city’s landscape.</p><h2>Increased Demand for Residential and Commercial Spaces</h2><p>The Metro has made commuting more convenient, prompting more people to move to Nagpur. This increased demand for housing has driven developers to launch new residential projects, catering to various segments of buyers. Similarly, commercial spaces near metro stations are in high demand, with businesses keen to capitalize on the increased footfall and improved accessibility.</p><h2>Enhanced Quality of Life</h2><p>The Metro has significantly improved the quality of life for Nagpur’s residents. Reduced travel times and the convenience of public transport have made daily commutes easier, leading to a more balanced work-life dynamic. This improvement in lifestyle is another factor driving people to invest in properties near metro lines.</p><h2>Conclusion</h2><p>The Nagpur Metro has had a profound impact on the city’s real estate market, driving up property values, revitalizing underdeveloped areas, and increasing demand for residential and commercial spaces. As the Metro network expands, its influence on real estate prices is expected to grow, making now an excellent time to invest in properties along the Metro corridors. Devprath Constructions is committed to developing high-quality projects that align with this new wave of urban growth, ensuring that investors reap the benefits of Nagpur’s evolving infrastructure.</p>",
      "createdAt": "2026-09-22T13:27:18.427912",
      "id": "25391652-087d-4482-be26-fabbec73cc1b",
      "imageUrl": metro,
      "keywords": [
        "Nagpur Metro",
        "Nagpur real estate",
        "real estate prices",
        "property investment",
        "Metro connectivity",
        "Nagpur property market"
      ],
      "slug": "the-impact-of-nagpur-metro-on-real-estate-prices",
      "title": "The Impact of Nagpur Metro on Real Estate Prices",
      "updatedAt": "2026-09-22T13:27:18.428912"
    },
    {
      "content": "<p>Nagpur’s real estate market is on an upward trajectory, driven by strategic infrastructural developments and a burgeoning economy. To gain a deeper understanding of the current trends and future prospects, we spoke with Prateek Khandelwal, a prominent real estate expert and Managing Director of Khandelwal Builders, known for their significant contributions to Nagpur’s skyline.</p><h2>Current Market Trends</h2><blockquote>“Nagpur is witnessing a surge in real estate demand due to major projects like the Nagpur Metro and MIHAN (Multi-modal International Cargo Hub and Airport at Nagpur). These projects are not only enhancing the city’s connectivity but also attracting businesses and residents, leading to a robust real estate market.”</blockquote><p><strong>Prateek Khandelwal</strong></p><h2>Key Investment Areas</h2><blockquote>“Areas like Civil Lines, Dharampeth, and Wardha Road are experiencing increased demand due to their strategic locations and proximity to major infrastructure projects. These neighborhoods offer excellent connectivity, top-notch amenities, and significant potential for capital appreciation.”</blockquote><p><strong>Prateek Khandelwal</strong></p><h2>Future Prospects</h2><blockquote>“With the Smart City initiative, we can expect a more organized urban development approach, focusing on sustainable living and advanced infrastructure. This will further boost the real estate market, making Nagpur a prime investment destination.”</blockquote><p><strong>Prateek Khandelwal</strong></p><h2>Advice for Buyers and Investors</h2><blockquote>“It’s crucial to do thorough research and choose projects that are RERA-compliant. This ensures transparency and accountability, protecting your investment. Additionally, look for properties that offer modern amenities and are situated in areas with high growth potential.”</blockquote><p><strong>Prateek Khandelwal</strong></p><h2>Conclusion</h2><p>Prateek Khandelwal’s insights shed light on the promising future of Nagpur’s real estate market. With strategic investments in key areas and a focus on sustainable growth, the city is poised for substantial development. Khandelwal Builders, along with other leading developers like Devprath Constructions, are at the forefront of this transformation, delivering high-quality projects that meet the aspirations of modern buyers and investors.</p>",
      "createdAt": "2026-09-22T13:30:04.437267",
      "id": "6b3c429b-d552-4175-a2ad-5ec3a8f18321",
      "imageUrl": profiles,
      "keywords": [
        "Nagpur real estate",
        "Prateek Khandelwal",
        "Khandelwal Builders",
        "real estate growth",
        "Nagpur Metro",
        "MIHAN",
        "Civil Lines",
        "Dharampeth",
        "Wardha Road",
        "RERA"
      ],
      "slug": "insights-from-prateek-khandelwal-on-nagpurs-real-estate-growth",
      "title": "Insights from Prateek Khandelwal on Nagpur’s Real Estate Growth",
      "updatedAt": "2026-09-22T13:30:04.437267"
    },
    {
      "content": "<p>Nagpur’s real estate market is booming with opportunities in both residential and commercial sectors. Here’s a quick comparison to guide your investment decision.</p><h2>Residential Real Estate</h2><p><strong>Stability and Growth:</strong> Affordable housing in areas like Wardha Road and Civil Lines offers steady appreciation.</p><p><strong>Rental Income:</strong> High demand for quality housing ensures reliable rental income from apartments and gated communities.</p><p><strong>Investment Horizon:</strong> Suited for long-term investments with stable returns.</p><p><strong>Liquidity:</strong> Easier to sell due to consistent demand.</p><p><strong>Maintenance:</strong> Less demanding in terms of management and costs.</p><h2>Commercial Real Estate</h2><p><strong>Economic Growth:</strong> Projects like MIHAN boost demand for office spaces and retail outlets.</p><p><strong>Higher Returns:</strong> Offers higher rental income and capital appreciation but with greater volatility.</p><p><strong>Investment Horizon:</strong> Offers quicker, higher returns but requires understanding market trends.</p><p><strong>Liquidity:</strong> Can take longer to sell, especially in downturns.</p><p><strong>Maintenance:</strong> Requires more intensive management and higher costs.</p><h2>Conclusion</h2><p>Residential real estate is ideal for stable, long-term growth, while commercial real estate suits those seeking higher returns despite greater risks. Devprath Constructions ensures informed investment choices in Nagpur’s vibrant market.</p>",
      "createdAt": "2026-09-22T13:29:15.584255",
      "id": "85bb3ca1-ca94-4bcf-a6b3-fc10cf97e28c",
      "imageUrl": market_trends,
      "keywords": [
        "Nagpur real estate",
        "residential real estate",
        "commercial real estate",
        "real estate investment",
        "Nagpur property",
        "Wardha Road",
        "MIHAN",
        "property investment"
      ],
      "slug": "investment-trends-residential-vs-commercial-real-estate-in-nagpur",
      "title": "Investment Trends: Residential vs. Commercial Real Estate in Nagpur",
      "updatedAt": "2026-09-22T13:29:15.584255"
    },
    {
      "content": "<h2><strong>By Devprath Constructions, Nagpur</strong></h2><p>Nagpur’s real estate market is booming, offering numerous opportunities for homebuyers and investors like. Among the city’s many neighbourhoods and Pandey Layout and Parsodi, Wardha Road stand out as top residential areas to invest in, thanks to the excellent amenities, strategic location, and their potential for growth.</p><p>Our project in Parsodi is ideally situated on a 24-meter cement road, just 300 meters from Wardha Road and close to the MIHAN Bridge. The location also benefits from proximity to the renowned Midas Hospital, a well-equipped private hospital, only 200 meters away from our site.</p><h2><strong>Pandey Layout: A Blend of Convenience and Comfort</strong></h2><p>Pandey Layout is rapidly emerging as a preferred residential destination in Nagpur. Known for its well-planned infrastructure and serene environment, this area offers a perfect blend of convenience and comfort.</p><ul><li><p><strong>Connectivity:</strong> Pandey Layout is well-connected to major parts of the city, including educational institutions, healthcare facilities, and commercial hubs. The proximity to key roads and the Metro line enhances its accessibility.</p></li><li><p><strong>Amenities: </strong>The area boasts a range of amenities, including shopping complexes, parks, and recreational centers, catering to the needs of families and young professionals.</p></li><li><p><strong>Quality of Life:</strong> The peaceful ambience, coupled with the availability of modern facilities, makes Pandey Layout an ideal place for those seeking a high quality of life.</p></li></ul><h2><strong>Parsodi: The Rising Star of Nagpur</strong></h2><p>Parsodi is too amongst another prime location in Nagpur that is gaining popularity among real estate investors. Its strategic location and ongoing development projects make it a hotspot for varied investments.</p><ul><li><p><strong>Strategic Location: </strong>Parsodi’s location provides easy access to key areas like the Central Business District, educational institutions, and major transport hubs. This makes it an attractive option for professionals working in and around Nagpur.</p></li><li><p><strong>Development Projects:</strong> The area is witnessing significant development, with new residential complexes and commercial establishments. This growth is expected to drive property values higher in the near future.</p></li></ul><blockquote><p><strong>Conclusion</strong></p><p>Pandey Layout and Parsodi are amongst the most promising residential areas in Nagpur, offering excellent connectivity, modern amenities, and significant growth potential. Investing in such neighborhoods not only promises substantial returns but also ensures a high quality living experience of life. Devprath Constructions is proud to present its projects in these prime locations, designed to meet the aspirations of modern homebuyers and investors.</p></blockquote><p></p>",
      "createdAt": "2026-09-22T13:28:26.513922",
      "id": "b491c4c6-14d5-4f12-8c2c-5aed2ddd7941",
      "imageUrl": map_image,
      "keywords": [
        "Nagpur real estate",
        "residential areas in Nagpur",
        "Pandey Layout",
        "Parsodi",
        "Wardha Road",
        "real estate investment",
        "property investment",
        "Nagpur property"
      ],
      "slug": "top-residential-areas-to-invest-in-nagpur",
      "title": "Top Residential Areas to Invest in Nagpur",
      "updatedAt": "2026-09-23T22:43:55.469895"
    }
  ]