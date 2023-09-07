import supertest from "supertest";
import { web } from "../src/app/web.js";
import { logger } from "../src/app/logging.js";
import { createTestUser, removeTestUser } from "./test-util.js";

describe("Login POST /api/users/login", () => {
  beforeEach(async () => {
    await createTestUser();
  });
  afterEach(async () => {
    await removeTestUser();
  });
  // test success
  it("should can login", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "rahasia",
    });

    console.info(result.body);
    console.info(result.status);
    expect(result.status).toBe(200);
    expect(result.body.data.token).toBeDefined();
    expect(result.body.data.token).not.toBe("test");
  });

  // test failed one
  it("should reject login if request is invalid", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "",
      password: "",
    });

    console.info(result.body);
    console.info(result.status);
    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  // test failed two
  it("should reject login if password wrong", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "hello",
    });

    console.info(result.body);
    console.info(result.status);
    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });

  // test failed three
  it("should reject login if username wrong", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "allo",
      password: "rahasia",
    });

    console.info(result.body);
    console.info(result.status);
    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });
});
