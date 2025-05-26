import type { UserResponseDto } from "@/app/swagger/Api";

export type User = Omit<UserResponseDto, "accessToken">;
