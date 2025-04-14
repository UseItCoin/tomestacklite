'use client';

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const EReader = () => {
  const bookContent = `
      This is a placeholder for the e-book content.
      In a real application, you would load the content
      from an EPUB or PDF file using a library like epub.js or pdf.js.
    `;

  return (
    <Card>
      <CardHeader>
        <CardTitle>E-Reader</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose">
          {bookContent.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default function Reader() {
  return (
    <div className="container mx-auto py-10">
      <EReader/>
    </div>
  );
}
