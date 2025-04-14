'use server';
/**
 * @fileOverview Provides a summary of an e-book.
 *
 * - summarizeBook - A function that handles the book summarization process.
 * - SummarizeBookInput - The input type for the summarizeBook function.
 * - SummarizeBookOutput - The return type for the summarizeBook function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeBookInputSchema = z.object({
  bookContent: z.string().describe('The content of the e-book to summarize.'),
});
export type SummarizeBookInput = z.infer<typeof SummarizeBookInputSchema>;

const SummarizeBookOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the e-book content.'),
});
export type SummarizeBookOutput = z.infer<typeof SummarizeBookOutputSchema>;

export async function summarizeBook(input: SummarizeBookInput): Promise<SummarizeBookOutput> {
  return summarizeBookFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBookPrompt',
  input: {
    schema: z.object({
      bookContent: z.string().describe('The content of the e-book to summarize.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A concise summary of the e-book content.'),
    }),
  },
  prompt: `Summarize the following e-book content in a concise and informative manner:\n\n{{{bookContent}}}`, // Changed template string
});

const summarizeBookFlow = ai.defineFlow<
  typeof SummarizeBookInputSchema,
  typeof SummarizeBookOutputSchema
>({
  name: 'summarizeBookFlow',
  inputSchema: SummarizeBookInputSchema,
  outputSchema: SummarizeBookOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
