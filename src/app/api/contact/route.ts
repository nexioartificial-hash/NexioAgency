import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = contactSchema.parse(body);

        // Log the submission (in a real app, this would send an email or save to DB)
        console.log('New Contact Form Submission:', validatedData);

        // Simulate a small delay for premium feel
        await new Promise((resolve) => setTimeout(resolve, 800));

        return NextResponse.json({
            success: true,
            message: 'Signal received. We will contact you shortly.',
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    errors: error.issues.map((err) => ({
                        field: err.path[0],
                        message: err.message,
                    })),
                },
                { status: 400 }
            );
        }

        console.error('Contact submission error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Internal transmission error. Please try again or use direct contact.',
            },
            { status: 500 }
        );
    }
}
