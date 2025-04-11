"use client";
import { WorldMap } from '@/components/ui/world-map'
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Visa {" "}
          <span className="text-neutral-400">
            {"Availablity ".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
        Break free from visa hassles. Explore the world with ease and live life on your own terms
        Perfect for vacation, work and business.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 52.7019, lng: -8.9241 }, // Shannon, Ireland
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 52.3676, lng: 4.9041 }, // Amsterdam, Netherlands
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 49.6117, lng: 6.1319 }, // Luxembourg City, Luxembourg
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 46.9481, lng: 7.4474 }, // Bern, Switzerland
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 1.3521, lng: 103.8198 }, // Singapore
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: -36.8485, lng: 174.7633 }, // Auckland, New Zealand
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 45.4215, lng: -75.6972 }, // Ottawa, Canada
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 39.9042, lng: 116.4074 }, // Beijing, China (TikTok/ByteDance HQ)
            end: { lat: 28.6139, lng: 77.209 },
          },
          { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } }, // New Delhi → Vladivostok
          { start: { lat: 52.7019, lng: -8.9241 }, end: { lat: 28.6139, lng: 77.209 } }, // Ireland
          { start: { lat: 52.3676, lng: 4.9041 }, end: { lat: 28.6139, lng: 77.209 } }, // Netherlands
          { start: { lat: 49.6117, lng: 6.1319 }, end: { lat: 28.6139, lng: 77.209 } }, // Luxembourg
          { start: { lat: 46.9481, lng: 7.4474 }, end: { lat: 28.6139, lng: 77.209 } }, // Switzerland
          { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 28.6139, lng: 77.209 } }, // Singapore
          { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 28.6139, lng: 77.209 } }, // Australia
          { start: { lat: -36.8485, lng: 174.7633 }, end: { lat: 28.6139, lng: 77.209 } }, // New Zealand
          { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 28.6139, lng: 77.209 } }, // USA (West)
          { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 28.6139, lng: 77.209 } }, // USA (East)
          { start: { lat: 45.4215, lng: -75.6972 }, end: { lat: 28.6139, lng: 77.209 } }, // Canada
          { start: { lat: 39.9042, lng: 116.4074 }, end: { lat: 28.6139, lng: 77.209 } }, // China
          { start: { lat: 55.7558, lng: 37.6173 }, end: { lat: 28.6139, lng: 77.209 } }, // Russia (Moscow)
          { start: { lat: -23.5505, lng: -46.6333 }, end: { lat: 28.6139, lng: 77.209 } }, // Brazil (São Paulo)
          { start: { lat: 24.7136, lng: 46.6753 }, end: { lat: 28.6139, lng: 77.209 } }, // Saudi Arabia
          { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 28.6139, lng: 77.209 } }, // UAE (Dubai)
          { start: { lat: 35.6895, lng: 139.6917 }, end: { lat: 28.6139, lng: 77.209 } }, // Japan
          { start: { lat: 37.5665, lng: 126.9780 }, end: { lat: 28.6139, lng: 77.209 } }, // South Korea
          { start: { lat: 39.0392, lng: 125.7625 }, end: { lat: 28.6139, lng: 77.209 } }, // North Korea
          { start: { lat: 33.6844, lng: 73.0479 }, end: { lat: 28.6139, lng: 77.209 } }, // Pakistan
          { start: { lat: 23.8103, lng: 90.4125 }, end: { lat: 28.6139, lng: 77.209 } }, // Bangladesh
          { start: { lat: 3.1390, lng: 101.6869 }, end: { lat: 28.6139, lng: 77.209 } }, // Malaysia
          { start: { lat: 13.7563, lng: 100.5018 }, end: { lat: 28.6139, lng: 77.209 } }, // Thailand
          { start: { lat: -6.2088, lng: 106.8456 }, end: { lat: 28.6139, lng: 77.209 } }, // Indonesia
          { start: { lat: -33.9249, lng: 18.4241 }, end: { lat: 28.6139, lng: 77.209 } }, // South Africa
          { start: { lat: 41.0082, lng: 28.9784 }, end: { lat: 28.6139, lng: 77.209 } }, // Turkey
          { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 28.6139, lng: 77.209 } }, // France
          { start: { lat: 52.5200, lng: 13.4050 }, end: { lat: 28.6139, lng: 77.209 } },
        ]}
      />
    </div>
  );
}
