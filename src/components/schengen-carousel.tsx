"use client"

import Carousel from "@/components/ui/schengen-carousel"

export default function SchengenCarousel() {
  const slideData = [
    {
      title: "Germany",
      button: "Explore Country",
      src: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop",
      url: "https://en.wikipedia.org/wiki/Germany",
    },
    {
      title: "France",
      button: "Explore Country",
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
      url: "https://en.wikipedia.org/wiki/France",
    },
    {
      title: "Italy",
      button: "Explore Country",
      src: "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=2076&auto=format&fit=crop",
      url: "https://en.wikipedia.org/wiki/Italy",
    },
    {
      title: "Spain",
      button: "Explore Country",
      src: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop",
      url: "https://en.wikipedia.org/wiki/Spain",
    },
    {
      title: "Netherlands",
      button: "Explore Country",
      src: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=2070&auto=format&fit=crop",
      url: "https://en.wikipedia.org/wiki/Netherlands",
    },
    {
      title: "Switzerland",
      button: "Explore Country",
      src: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop",
      url: "https://en.wikipedia.org/wiki/Switzerland",
    },
    {
      title: "Austria",
      button: "Explore Country",
      src: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop",
      url: "https://en.wikipedia.org/wiki/Austria",
    },
    {
      title: "Belgium",
      button: "Explore Country",
      src: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=2070&auto=format&fit=crop",
      url: "https://en.wikipedia.org/wiki/Belgium",
    },
    {
      title: "Sweden",
      button: "Explore Country",
      src: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=2070&auto=format&fit=crop",
      url: "https://en.wikipedia.org/wiki/Sweden",
    },
    {
      title: "Norway",
      button: "Explore Country",
      src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
      url: "https://en.wikipedia.org/wiki/Norway",
    },
  ]

  return (
    <div className="relative overflow-x-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  )
}
