import {
  BuildingOfficeIcon,
  UserGroupIcon,
  SparklesIcon,
  HeartIcon,
  LightBulbIcon,
  UserIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "15+ years in digital design and strategy",
    icon: <AcademicCapIcon className="w-10 h-10 text-blue-600" />,
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    bio: "Specializes in brand storytelling",
    icon: <PaintBrushIcon className="w-10 h-10 text-purple-600" />,
  },
  {
    name: "Marcus Lee",
    role: "Lead Developer",
    bio: "Full-stack wizard with security focus",
    icon: <CodeBracketIcon className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Priya Patel",
    role: "UX Researcher",
    bio: "Human-centered design advocate",
    icon: <UserGroupIcon className="w-10 h-10 text-amber-600" />,
  },
];

export const values = [
  {
    title: "Innovation",
    description: "We push boundaries and explore new possibilities",
    icon: <LightBulbIcon className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Integrity",
    description: "Honest communication and ethical practices",
    icon: <HeartIcon className="w-8 h-8 text-red-600" />,
  },
  {
    title: "Excellence",
    description: "Never settling for good enough",
    icon: <SparklesIcon className="w-8 h-8 text-amber-500" />,
  },
];
