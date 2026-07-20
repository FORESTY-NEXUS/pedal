"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { cn } from "@/lib/utils";

interface FacilityCardProps {
  index: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export function FacilityCard({
  index,
  title,
  description,
  cta,
  image,
  imageAlt,
  reverse = false,
}: FacilityCardProps) {
  return (
    <div className={`flex flex-col gap-8 lg:flex-row lg:items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:w-1/2">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center lg:w-1/2">
        <span className="text-sm font-semibold text-muted-foreground">{index}</span>
        <h3 className="mt-2 text-2xl font-bold">{title}</h3>
        <p className="mt-4 text-muted-foreground">{description}</p>
        <div className="mt-6">
          <button className="font-semibold underline underline-offset-4">{cta}</button>
        </div>
      </div>
    </div>
  );
}
