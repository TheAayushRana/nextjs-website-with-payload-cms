import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { HeroBlock } from './HeroBlock'
import TestimonialBlock from './TestimonialBlock'
import FeaturesBlock from './FeaturesBlock'
import CTASection from './CTASection'
import ContactFormBlock from './ContactFormBlock'

const blockComponents = {
  hero: HeroBlock,
  testimonials: TestimonialBlock,
  features: FeaturesBlock,
  'cta-section': CTASection,
  'contact-form': ContactFormBlock,
}

export const BlockRenderer: React.FC<{
  blocks: Page['blocks']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block data={block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}