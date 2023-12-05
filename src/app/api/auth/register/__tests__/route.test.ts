/**
 * @jest-environment node
 */
import { POST as handler } from "../route";

describe("/api/auth/register", () => {
  it("should create a user", async () => {
    const res = await handler();
    const body = await res.json();
    const { email, password } = body;
    
    const user = {
      email,
      password,
    }

    expect(res).toHaveProperty("status", 201);
    expect(user).toEqual({email: "example@example.com", password: "password123"});
  });
});
