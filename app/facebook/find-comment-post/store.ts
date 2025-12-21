'use client'

import { create } from "zustand";

export interface Comment {
  type: string;        // ví dụ: "public"
  name: string;        // tên profile/page
  postId: string;      // ID bài viết
  content: string;     // nội dung bài viết
}

interface Commenttate {
  isGetComment: boolean,
  setIsGetComment: (isGetCommentdata: boolean) => void;
  result: Comment | null;
  setResult: (data: Comment | null) => void;
}

export const useUidStore = create<Commenttate>((set) => ({
  result: null,
  setResult: (data) => set({ result: data }),
  isGetComment: false,
  setIsGetComment: (isGetComment) => set({ isGetComment }),
}));
