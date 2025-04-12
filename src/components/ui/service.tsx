// import { cn } from "@/lib/utils";
// import {
//   IconAdjustmentsBolt,
//   IconCloud,
//   IconCurrencyDollar,
//   IconEaseInOut,
//   IconHeart,
//   IconHelp,
//   IconRouteAltLeft,
//   IconTerminal2,
// } from "@tabler/icons-react";

// export function FeaturesSectionWithHoverEffects() {
//   const features = [
//     {
//       title: "Built for developers",
//       description:
//         "Built for engineers, developers, dreamers, thinkers and doers.",
//       icon: <IconTerminal2 />,
//     },
//     {
//       title: "Ease of use",
//       description:
//         "It's as easy as using an Apple, and as expensive as buying one.",
//       icon: <IconEaseInOut />,
//     },
//     {
//       title: "Pricing like no other",
//       description:
//         "Our prices are best in the market. No cap, no lock, no credit card required.",
//       icon: <IconCurrencyDollar />,
//     },
//     {
//       title: "100% Uptime guarantee",
//       description: "We just cannot be taken down by anyone.",
//       icon: <IconCloud />,
//     },
//     {
//       title: "Multi-tenant Architecture",
//       description: "You can simply share passwords instead of buying new seats",
//       icon: <IconRouteAltLeft />,
//     },
//     {
//       title: "24/7 Customer Support",
//       description:
//         "We are available a 100% of the time. Atleast our AI Agents are.",
//       icon: <IconHelp />,
//     },
//     {
//       title: "Money back guarantee",
//       description:
//         "If you donot like EveryAI, we will convince you to like us.",
//       icon: <IconAdjustmentsBolt />,
//     },
//     {
//       title: "And everything else",
//       description: "I just ran out of copy ideas. Accept my sincere apologies",
//       icon: <IconHeart />,
//     },
//   ];
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
//       {features.map((feature, index) => (
//         <Feature key={feature.title} {...feature} index={index} />
//       ))}
//     </div>
//   );
// }

// const Feature = ({
//   title,
//   description,
//   icon,
//   index,
// }: {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   index: number;
// }) => {
//   return (
//     <div
//       className={cn(
//         "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
//         (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
//         index < 4 && "lg:border-b dark:border-neutral-800"
//       )}
//     >
//       {index < 4 && (
//         <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
//       )}
//       {index >= 4 && (
//         <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
//       )}
//       <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
//         {icon}
//       </div>
//       <div className="text-lg font-bold mb-2 relative z-10 px-10">
//         <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
//         <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
//           {title}
//         </span>
//       </div>
//       <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
//         {description}
//       </p>
//     </div>
//   );
// };
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  // Updated features array containing all the detailed service information
  const features = [
    {
      title: "Visa Assistance Guarantee",
      description:
        "We are committed to making your visa process anxiety-free and hassle-free with our expert-driven, end-to-end visa assistance. Our guarantee ensures a smooth experience from start to finish!",
      icon: <IconCloud />,
    },
    {
      title: "Tourist Visa",
      description:
        "For individuals traveling abroad for leisure and exploration. Includes quick appointment booking and assistance in travel planning.",
      icon: <IconHeart />,
    },
    {
      title: "Business Visa",
      description:
        "For professionals traveling for work, conferences, or corporate meetings. Benefit from fast-tracked applications and assistance with business invitation letters.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Visitor Visa",
      description:
        "For those visiting family, relatives, or friends abroad. Receive personalized guidance and document verification for smooth approval.",
      icon: <IconHelp />,
    },
    {
      title: "Visa Specialist Call Assistance",
      description:
        "Connect with an expert immediately after payment for assistance until your visa appointment and submission.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Documentation Preparation",
      description:
        "Choose from home service or online assistance, and get your final visa packet delivered to your doorstep.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "End-to-End Support",
      description:
        "From appointment booking to expert document review and final submission, our specialists guide you at every step.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Priority Appointment Booking",
      description:
        "Secure the earliest available appointment date or book on your preferred date with our priority service.",
      icon: <IconRouteAltLeft />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border dark:border-neutral-800 py-10 relative group/feature",
        "transition-all duration-200 hover:shadow-lg"
      )}
    >
      {/*
        Add a hover gradient overlay based on the card position.
        For simplicity, a single overlay effect is applied.
      */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10 flex items-center">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
