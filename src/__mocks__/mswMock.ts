import { HttpResponse, http } from "msw";

import { User } from "@/types/user";

export const handlers = [
  http.get<never, User[]>("/users", async ({ request }) => {
    const users = await request.json();

    if (!users) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(users);
  }),
];
