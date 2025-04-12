// import { TestimonialsSection } from "@/components/blocks/testimonial-with-marque"


// const testimonials = [
//   {
//     author: {
//       name: "Rajesh Verma",
//       handle: "",
//       avatar: "https://via.placeholder.com/150", // Replace with actual avatar if available
//     },
//     text: "Absolutely seamless! I didn’t have to lift a finger—everything was managed from their end. Their doorstep documentation service is a game-changer, and having an embassy-authorized agent handle everything made it incredibly smooth. If you want a VIP visa experience, this is it!",
//     href: "", // Insert a link if available
//   },
//   {
//     author: {
//       name: "Priya Sharma",
//       handle: "",
//       avatar: "https://via.placeholder.com/150", // Replace with actual avatar if available
//     },
//     text: "I was nervous about my first Schengen visa, but this team made it unbelievably easy. From paperwork to submission, I didn’t have to move an inch. Their process is well-structured, and the personalized support made me feel confident throughout. Highly recommended for stress-free travel!",
//     href: "",
//   },
//   {
//     author: {
//       name: "Arjun Nair",
//       handle: "",
//       avatar: "https://via.placeholder.com/150", // Replace with actual avatar if available
//     },
//     text: "Never imagined getting a Schengen visa could be this simple! Their expert team handled everything at my doorstep, and the best part? An embassy-authorized agent ensured my application was flawless. No queues, no confusion—just a perfectly smooth process!",
//     href: "",
//   },
// ]

// export function TestimonialsSectionDemo() {
//   return (
//     <TestimonialsSection
//       title="Trusted by people across india"
//       description="Get your visa at your home without any hassle just like 12k+ happy customers"
//       testimonials={testimonials}
//     />
//   )
// }

import { TestimonialsSection } from "@/components/blocks/testimonial-with-marque"

const testimonials = [
  {
    author: {
      name: "Rajesh Verma",
      handle: "",
      avatar: "https://originui.com/avatar-80-03.jpg", // Replace with actual avatar if available
    },
    rating: 5,
    destination: "Mumbai, Maharashtra → Paris, France 🇫🇷",
    text: "Absolutely seamless! I didn’t have to lift a finger—everything was managed from their end. Their doorstep documentation service is a game-changer, and having an embassy-authorized agent handle everything made it incredibly smooth. If you want a VIP visa experience, this is it!",
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "",
      avatar: "https://originui.com/avatar-80-03.jpg", // Replace with actual avatar if available
    },
    rating: 5,
    destination: "New Delhi, India → Rome, Italy 🇮🇹",
    text: "I was nervous about my first Schengen visa, but this team made it unbelievably easy. From paperwork to submission, I didn’t have to move an inch. Their process is well-structured, and the personalized support made me feel confident throughout. Highly recommended for stress-free travel!",
  },
  {
    author: {
      name: "Arjun Nair",
      handle: "",
      avatar: "https://originui.com/avatar-80-03.jpg", // Replace with actual avatar if available
    },
    rating: 5,
    destination: "Bangalore, Karnataka → Amsterdam, Netherlands 🇳🇱",
    text: "Never imagined getting a Schengen visa could be this simple! Their expert team handled everything at my doorstep, and the best part? An embassy-authorized agent ensured my application was flawless. No queues, no confusion—just a perfectly smooth process!",
  },
  {
    author: {
      name: "Anjali Mehta",
      handle: "",
      avatar: "https://originui.com/avatar-80-02.jpg",
    },
    rating: 5,
    destination: "Pune, Maharashtra → Vienna, Austria 🇦🇹",
    text: "I’ve used visa services before, but this was on another level! Their expert came home, sat with me, explained everything, and ensured my documents were flawless. The doorstep support is top-tier—no queues, no confusion. Just pure convenience. Truly the best in the business!",
  },
  {
    author: {
      name: "Karan Malhotra",
      handle: "",
      avatar: "https://originui.com/avatar-80-04.jpg",
    },
    rating: 5,
    destination: "Chandigarh, Punjab → Berlin, Germany 🇩🇪",
    text: "From the very first call, I knew I was in good hands. The visa expert not only explained every step clearly but also handled all my documents personally at home. I felt like I had an entire embassy team working for me. The smoothest visa experience I’ve ever had.",
  },
  {
    author: {
      name: "Ritesh Iyer",
      handle: "",
      avatar: "https://originui.com/avatar-80-06.jpg",
    },
    rating: 5,
    destination: "Hyderabad, Telangana → Brussels, Belgium 🇧🇪",
    text: "They call it 'visa at your doorstep,' but it felt more like first-class visa concierge. The professionalism, punctuality, and accuracy were beyond expectations. If you're serious about getting your visa without the stress, this team is your best bet.",
  },
  {
    author: {
      name: "Neha Bansal",
      handle: "",
      avatar: "https://originui.com/avatar-80-05.jpg",
    },
    rating: 5,
    destination: "Jaipur, Rajasthan → Madrid, Spain 🇪🇸",
    text: "The way their visa expert handled my application was pure excellence. I didn’t have to worry about a single thing—they managed everything, right from documentation to final submission. And yes, all from the comfort of my home. Premium service, perfectly executed!",
  },
  {
    author: {
      name: "Sameer Kulkarni",
      handle: "",
      avatar: "https://originui.com/avatar-80-01.jpg",
    },
    rating: 5,
    destination: "Mumbai, Maharashtra → Rome, Italy 🇮🇹",
    text: "I was dreading the visa process until I found this team. They literally brought the embassy to my living room. Super professional, super clear, and not a single document missed. Got my visa approved without a hitch. Highly recommend!",
  },
  {
    author: {
      name: "Priya Deshmukh",
      handle: "",
      avatar: "https://originui.com/avatar-80-07.jpg",
    },
    rating: 5,
    destination: "Nagpur, Maharashtra → Zurich, Switzerland 🇨🇭",
    text: "This service redefines convenience. I didn’t even have to leave my house once—the agent came, helped sort everything, and even tracked my application after submission. They truly care about your journey. So grateful!",
  },
  {
    author: {
      name: "Vikram Sethi",
      handle: "",
      avatar: "https://originui.com/avatar-80-08.jpg",
    },
    rating: 5,
    destination: "New Delhi, Delhi → Paris, France 🇫🇷",
    text: "Five stars aren’t enough. I’ve applied for visas multiple times, but never this easily. No paperwork headaches, no jargon—just smooth, simple, and insanely efficient. And the fact that it all happened at home? Game changer.",
  },
]

export function TestimonialsSectionDemo() {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 pt-4">
      <TestimonialsSection
        title="Trusted by people across India"
        description="Get your visa at your home without any hassle just like 12k+ happy customers"
        testimonials={testimonials}
      />
      
      <div className="flex items-center rounded-full border border-border bg-background px-4 py-2 shadow shadow-black/5">
        <div className="flex -space-x-2">
          <img
            className="w-8 h-8 rounded-full ring-2 ring-background"
            src="https://originui.com/avatar-80-03.jpg"
            alt="Avatar 01"
          />
          <img
            className="w-8 h-8 rounded-full ring-2 ring-background"
            src="https://originui.com/avatar-80-04.jpg"
            alt="Avatar 02"
          />
          <img
            className="w-8 h-8 rounded-full ring-2 ring-background"
            src="https://originui.com/avatar-80-05.jpg"
            alt="Avatar 03"
          />
          <img
            className="w-8 h-8 rounded-full ring-2 ring-background"
            src="https://originui.com/avatar-80-06.jpg"
            alt="Avatar 04"
          />
        </div>
        <p className="ml-3 text-sm text-muted-foreground">
          Trusted by <strong className="font-semibold text-foreground">60K+</strong> travelers.
        </p>
      </div>
    </div>
  )
}
