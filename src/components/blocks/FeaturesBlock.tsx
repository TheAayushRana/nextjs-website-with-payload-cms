import React from 'react'
import { FeaturesSectionDemo } from '../ui/features-sections';
import type { FeaturesBlock } from '@/payload-types';

const FeaturesBlock = ({ data }: { data: FeaturesBlock }) => {
  const { title, features } = data;

  if(!features || features.length === 0) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-xl md:text-5xl font-bold text-center mb-4">{title}</h2>
      <FeaturesSectionDemo features={features} />
    </div>
  )
}

export default FeaturesBlock