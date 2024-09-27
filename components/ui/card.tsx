"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ThumbsUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CommunityCardProps {
  thumbnail: string;
  type: "event" | "issue" | "blog";
  title: string;
  dateTime: string;
  description: string;
  thumbsUp: number;
  signups: number;
  primaryCTA: {
    label: string;
    action: () => void;
  };
  secondaryCTA?: {
    label: string;
    action: () => void;
  };
}

export function Card({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CommunityCard({
  thumbnail,
  type,
  title,
  dateTime,
  description,
  thumbsUp,
  signups,
  primaryCTA,
  secondaryCTA,
}: CommunityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeIcon = (type: string) => {
    // Implement logic to return the appropriate icon based on type
    // For now, we'll just return the type as a string
    return type;
  };

  return (
    <div
      className="group flex w-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden sm:h-40 sm:w-40">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 bg-white rounded-full p-1">
          {getTypeIcon(type)}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="text-sm font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-600 sm:text-base">
          {title}
        </h3>
        <div className="mb-2 flex items-center justify-between text-xs text-gray-500 sm:text-sm">
          <div className="flex items-center space-x-1">
            <button
              className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 hover:bg-gray-100 hover:scale-110"
              onClick={(e) => e.stopPropagation()}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous day</span>
            </button>
            <span>{dateTime}</span>
            <button
              className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 hover:bg-gray-100 hover:scale-110"
              onClick={(e) => e.stopPropagation()}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next day</span>
            </button>
          </div>
        </div>
        <p
          className={`mb-2 text-xs text-gray-600 sm:text-sm ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {description}
        </p>
        <div className="flex items-center space-x-4">
          <motion.div
            className="flex items-center space-x-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ThumbsUp className="h-3 w-3 text-blue-500 sm:h-4 sm:w-4" />
            <span className="text-xs text-gray-500 sm:text-sm">{thumbsUp}</span>
          </motion.div>
          <motion.div
            className="flex items-center space-x-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Users className="h-3 w-3 text-green-500 sm:h-4 sm:w-4" />
            <span className="text-xs text-gray-500 sm:text-sm">{signups}</span>
          </motion.div>
        </div>
        <div className="mt-4 flex w-full space-x-2">
          <button
            className="flex-1 rounded-md bg-blue-500 px-4 py-2 text-xs text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-md sm:text-sm"
            onClick={(e) => {
              e.stopPropagation();
              primaryCTA.action();
            }}
          >
            {primaryCTA.label}
          </button>
          {secondaryCTA && (
            <button
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-xs transition-all duration-300 hover:bg-gray-100 hover:shadow-md sm:text-sm"
              onClick={(e) => {
                e.stopPropagation();
                secondaryCTA.action();
              }}
            >
              {secondaryCTA.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Export CommunityCard as the default export
export default CommunityCard;
