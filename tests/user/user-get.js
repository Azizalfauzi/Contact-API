import supertest from "supertest";
import { web } from "../src/app/web.js";
import { logger } from "../src/app/logging.js";
import { createTestUser, removeTestUser } from "../test-util.js";

describe("GET /api/users/current", () => {
  beforeEach(async () => {
    await createTestUser();
  });
  afterEach(async () => {
    await removeTestUser();
  });


  it("should can if token is invalid", async () => {
    const result = await supertest(web)
      .get("/api/users/current")
      .set("Authorization", "salah");

    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });

    it("should can get current user", async () => {
      const result = await supertest(web)
        .get("/api/users/current")
        .set("Authorization", "test");

      console.info(result.status);
      console.info(result.body);
      console.info(result.body.data.username);
      console.info(result.body.data.name);

      expect(result.status).toBe(200);
      expect(result.body.data.username).toBe("test");
      expect(result.body.data.name).toBe("test");
    });
});
