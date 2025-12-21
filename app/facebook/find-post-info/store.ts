'use client'

import { create } from "zustand";

export interface LinkInfo {
  type: string;        // ví dụ: "public"
  name: string;        // tên profile/page
  postId: string;      // ID bài viết
  content: string;     // nội dung bài viết
}

interface LinkInfotate {
  isGetInfo: boolean,
  setIsGetInfo: (isGetInfodata: boolean) => void;
  result: LinkInfo | null;
  setResult: (data: LinkInfo | null) => void;
}

export const useUidStore = create<LinkInfotate>((set) => ({
  result: null,
  setResult: (data) => set({ result: data }),
  isGetInfo: false,
  setIsGetInfo: (isGetInfo) => set({ isGetInfo }),
}));
