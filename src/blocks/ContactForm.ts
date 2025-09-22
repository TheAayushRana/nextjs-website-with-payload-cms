import type { Block } from 'payload'

export const ContactForm: Block = {
  slug: 'contact-form',
  interfaceName: 'ContactFormBxlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      admin: {
        description: 'Form section title (optional)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Form description or instructions (optional)',
      },
    },
    {
      name: 'submitButtonText',
      type: 'text',
      localized: true,
      defaultValue: 'Send Message',
      admin: {
        description: 'Text for the submit button',
      },
    },
    {
      name: 'successMessage',
      type: 'text',
      localized: true,
      defaultValue: 'Thank you! Your message has been sent successfully.',
      admin: {
        description: 'Message shown after successful form submission',
      },
    },
    {
      name: 'errorMessage',
      type: 'text',
      localized: true,
      defaultValue: 'Sorry, there was an error sending your message. Please try again.',
      admin: {
        description: 'Message shown when form submission fails',
      },
    },
  ],
}