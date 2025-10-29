import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, rating, message, service, to } = await request.json()

    // Validate required fields
    if (!name || !email || !rating || !message || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Global Immigration <onboarding@resend.dev>',
      to: to || process.env.ADMIN_EMAIL || 'aadityachauhan6395@gmail.com',
      replyTo: email, // Fixed: changed from reply_to to replyTo
      subject: `New Feedback from ${name} - Global Immigration`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Feedback Received</title>
          </head>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🌟 New Feedback Received</h1>
            </div>
            
            <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
              <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #1e293b; margin-top: 0;">Client Feedback Details</h2>
                
                <div style="display: grid; gap: 15px;">
                  <div>
                    <strong style="color: #64748b;">Name:</strong>
                    <div style="color: #1e293b; font-size: 16px;">${name}</div>
                  </div>
                  
                  <div>
                    <strong style="color: #64748b;">Email:</strong>
                    <div style="color: #1e293b; font-size: 16px;">
                      <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                    </div>
                  </div>
                  
                  <div>
                    <strong style="color: #64748b;">Service Used:</strong>
                    <div style="color: #1e293b; font-size: 16px; text-transform: capitalize;">${service.replace('-', ' ')}</div>
                  </div>
                  
                  <div>
                    <strong style="color: #64748b;">Rating:</strong>
                    <div style="color: #f59e0b; font-size: 18px;">
                      ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} 
                      <span style="color: #64748b; font-size: 14px; margin-left: 8px;">(${rating}/5)</span>
                    </div>
                  </div>
                  
                  <div>
                    <strong style="color: #64748b;">Message:</strong>
                    <div style="background: #f1f5f9; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6; margin-top: 8px;">
                      <p style="margin: 0; color: #475569; line-height: 1.6; font-style: italic;">"${message}"</p>
                    </div>
                  </div>
                </div>
                
                <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                  <p style="color: #64748b; font-size: 14px; margin: 0;">
                    This feedback was submitted through the Global Immigration website.
                  </p>
                </div>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
              <p style="color: #94a3b8; font-size: 12px;">
                © ${new Date().getFullYear()} Global Immigration. All rights reserved.
              </p>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Feedback submitted successfully',
      data 
    })

  } catch (error) {
    console.error('Error in send-feedback API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: Add other HTTP methods if needed
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}