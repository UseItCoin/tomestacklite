'use client';

import React, {useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {summarizeBook} from "@/ai/flows/summarize-book";
import {toast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";

interface BookProps {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  content: string;
}

const bookData: BookProps = {
  id: '1',
  title: 'The Art of War',
  author: 'Sun Tzu',
  description: 'A timeless classic on military strategy and leadership.',
  coverImage: 'https://picsum.photos/200/300',
  content: `
      The Art of War is an ancient Chinese military treatise dating from the Late Spring and Autumn period (roughly 5th century BC).
      The work, which is attributed to the Chinese military strategist Sun Tzu (also referred to as "Sunzi"), contains insights and doctrines
      that have resonated across military and philosophical thinking since its creation.
    `,
};

export default function BookDetail({params}: { params: { id: string } }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSummarize = async () => {
    setIsLoading(true);
    try {
      const result = await summarizeBook({bookContent: bookData.content});
      setSummary(result.summary);
    } catch (error: any) {
      console.error('Failed to generate summary:', error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem generating the book summary.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false);
    }
  };

  const handleReadNow = () => {
    router.push('/reader');
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>{bookData.title}</CardTitle>
          <CardDescription>By {bookData.author}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-8">
          <img src={bookData.coverImage} alt={bookData.title} className="md:w-1/3 rounded-md"/>
          <div className="md:w-2/3">
            <p className="text-sm text-muted-foreground mb-4">{bookData.description}</p>

            <div className="flex flex-col gap-4">
              <Button onClick={handleReadNow}>Read Now</Button>
              <Button variant="secondary" onClick={handleSummarize} disabled={isLoading}>
                {isLoading ? 'Summarizing...' : 'Generate AI Summary'}
              </Button>
              {summary && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">AI-Powered Summary</h3>
                  <p className="text-sm text-muted-foreground">{summary}</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
