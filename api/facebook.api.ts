import { LinkInfo } from '@/app/facebook/find-post-info/store';
import http from './http';

export const getInfoFbLink = (url: string) =>
  http.post<LinkInfo>(`/facebook/get-info`, { url });
export const getCommentFb = (url: string) =>
  http.post<LinkInfo>(`/facebook/get-comment`, { url });
