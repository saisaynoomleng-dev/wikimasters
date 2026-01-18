'use server';

import { stackServerApp } from '@/stack/server';

export type CreateArticleInput = {
  title: string;
  content: string;
  authorId: string;
  imageUrl?: string;
};

export type UpdateArticleInput = {
  title?: string;
  content?: string;
  imageUrl?: string;
};

export async function createArticle(data: CreateArticleInput) {
  const user = await stackServerApp.getUser();
  if (!user) {
    throw new Error('Unauthorized');
  }

  console.log('create article called', data);
  return { success: true, message: 'article created' };
}

export async function updateArticle(data: UpdateArticleInput) {
  const user = await stackServerApp.getUser();
  if (!user) {
    throw new Error('Unauthorized');
  }

  const authorId = user.id;

  console.log('updated article called', data, authorId);
  return { success: true, message: 'Article created' };
}

export async function deleteArticle(id: string) {
  const user = await stackServerApp.getUser();
  if (!user) {
    throw new Error('Unauthorized');
  }

  const authorId = user.id;

  console.log('updated article called', id, authorId);
  return { success: true, message: 'Article created' };
}
