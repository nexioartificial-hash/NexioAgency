import { Router, Request, Response } from 'express';
import { z } from 'zod';

const router = Router();

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const validatedData = contactSchema.parse(req.body);

        // Log the submission (in a real app, this would send an email or save to DB)
        console.log('New Contact Form Submission:', validatedData);

        // Simulate a small delay for premium feel
        await new Promise((resolve) => setTimeout(resolve, 800));

        res.status(200).json({
            success: true,
            message: 'Signal received. We will contact you shortly.',
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                errors: error.issues.map((err: z.ZodIssue) => ({
                    field: err.path[0],
                    message: err.message,
                })),
            });
        }

        console.error('Contact submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal transmission error. Please try again or use direct contact.',
        });
    }
});

export default router;
