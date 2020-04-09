import { api } from "./client";

export const getPosts = (params: any = {}) => api.get<any>("/posts", params);

export const getPost = (id: string) => api.get<any>(`/posts/${id}`);

export const getComments = (entityType: string, entityId: string) =>
  api.get<any>(`/${entityType}/${entityId}/comments`);

export const postPay = (params: any) => api.post<any>(`/payments`, params);

export const getAllPayments = () => api.get<any>(`/payments`);
