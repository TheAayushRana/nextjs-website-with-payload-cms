import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getPayload } from 'payload'
import config from '@/payload.config'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const validation = contactFormSchema.safeParse(body)

    const { success, data, error } = validation

    if (!success) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = data

    const payload = await getPayload({ config })

    const submission = await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        email,
        subject,
        message,
        submittedAt: new Date().toISOString(),
      }
    })

    return NextResponse.json(
      {
        message: 'Contact form submitted successfully',
        submissionId: submission.id
      },
      { status: 200 }
    )

  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again.' },
      { status: 500 }
    )
  }
}