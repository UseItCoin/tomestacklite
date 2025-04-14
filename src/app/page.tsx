'use client';

import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const featuredBooks = [
  {
    id: '1',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    description: 'A novella about a pilot stranded in the desert who meets a young prince fallen to Earth from a tiny asteroid.',
    coverImage: 'https://picsum.photos/200/300',
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian novel set in a totalitarian regime where independent thinking is brutally punished.',
    coverImage: 'https://picsum.photos/201/300',
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'A romantic novel that explores the societal expectations and class dynamics of 19th-century England.',
    coverImage: 'https://picsum.photos/202/300',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured E-books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBooks.map((book) => (
            <Card key={book.id}>
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={book.coverImage} alt={book.title} className="mb-4 rounded-md"/>
                <p className="text-sm text-muted-foreground">{book.description}</p>
                <Button className="mt-4">Read Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">E-book Search and Discovery</h2>
        <div className="flex items-center">
          <Input type="text" placeholder="Search for e-books..." className="mr-2"/>
          <Button><Search className="mr-2" /> Search</Button>
        </div>
      </section>
    </div>
  );
}
