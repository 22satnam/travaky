"use client";

import Carousel from "@/components/ui/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Ireland",
      button: "Learn More",
      src: "https://source.unsplash.com/random/800x600?ireland,vacation",
      link: "https://en.wikipedia.org/wiki/Ireland",
    },
    {
      title: "Australia",
      button: "Learn More",
      src: "https://source.unsplash.com/random/800x600?australia,vacation",
      link: "https://en.wikipedia.org/wiki/Australia",
    },
    {
      title: "United States",
      button: "Learn More",
      src: "https://source.unsplash.com/random/800x600?usa,vacation",
      link: "https://en.wikipedia.org/wiki/United_States",
    },
    {
      title: "Brazil",
      button: "Learn More",
      src: "https://source.unsplash.com/random/800x600?brazil,vacation",
      link: "https://en.wikipedia.org/wiki/Brazil",
    },
    {
      title: "Japan",
      button: "Learn More",
      src: "https://source.unsplash.com/random/800x600?japan,vacation",
      link: "https://en.wikipedia.org/wiki/Japan",
    },
    {
      title: "South Korea",
      button: "Learn More",
      src: "https://source.unsplash.com/random/800x600?south+korea,vacation",
      link: "https://en.wikipedia.org/wiki/South_Korea",
    },
    {
      title: "Russia",
      button: "Learn More",
      src: "https://source.unsplash.com/random/800x600?russia,vacation",
      link: "https://en.wikipedia.org/wiki/Russia",
    },
    {
      title: "United Arab Emirates",
      button: "Learn More",
      src: "https://source.unsplash.com/random/800x600?dubai,vacation",
      link: "https://en.wikipedia.org/wiki/United_Arab_Emirates",
    },
    {
      title: "South Africa",
      button: "Learn More",
      src: "https://source.unsplash.com/random/800x600?south+africa,vacation",
      link: "https://en.wikipedia.org/wiki/South_Africa",
    },
    {
      title: "Thailand",
      button: "Learn More",
      src: "https://source.unsplash.com/random/800x600?thailand,vacation",
      link: "https://en.wikipedia.org/wiki/Thailand",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
