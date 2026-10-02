import { NextResponse } from "next/server";

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string[]>;
  timestamp: string;
}

export function successResponse<T>(data: T, message?: string, status = 200) {
  const responseBody: ApiResponse<T> = {
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  };
  return NextResponse.json(responseBody, { status });
}

export function errorResponse(message: string, status = 400, errors?: Record<string, string[]>) {
  const responseBody: ApiResponse = {
    success: false,
    message,
    errors,
    timestamp: new Date().toISOString(),
  };
  return NextResponse.json(responseBody, { status });
}
