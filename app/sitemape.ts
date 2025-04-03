export default async function sitemap() {
    const urls = [
      {
        url: `${process.env.NEXT_PUBLIC_URL}`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/about`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/contact`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/projects`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/blog`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/resume`,
        lastModified: new Date(),
      },
    ];
  
    return urls.filter(({ url }) => !url.includes("map"));
  }