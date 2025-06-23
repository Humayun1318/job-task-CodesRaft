import {
  BoltIcon,
  CurrencyDollarIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export const features = [
  {
    title: "Innovative Ideas",
    description:
      "Because each project is different, we adapt to your business model.",
    icon: <BoltIcon className="w-10 h-10 text-blue-600" />,
    aosDelay: "100",
  },
  {
    title: "Honest Pricing",
    description:
      "Pricing on projects are based on various analyses and are cost effective.",
    icon: <CurrencyDollarIcon className="w-10 h-10 text-green-600" />,

    aosDelay: "200",
  },
  {
    title: "Dedicated Support",
    description:
      "We provide 24/7 support for all our clients and serve them professionally.",
    icon: <LifebuoyIcon className="w-10 h-10 text-purple-600" />,
    aosDelay: "300",
  },
];
