import supertest from "supertest";
import { web } from "../src/app/web.js";
import { logger } from "../src/app/logging.js";
import { createTestUser, removeTestUser } from "./test-util.js";

describe("Register POST /api/users", () => {
  // afterEach(async () => {
  //   await removeTestUser();
  // });
  // failed double data  test
  // it("should reject if user already registered ", async () => {
  //   let result = await supertest(web).post("/api/users").send({
  //     username: "test",
  //     password: "rahasia123",
  //     name: "test",
  //   });
  //   expect(result.status).toBe(200);
  //   expect(result.body.data.username).toBe("test");
  //   expect(result.body.data.name).toBe("test");
  //   expect(result.body.data.password).toBeUndefined();
  //   result = await supertest(web).post("/api/users").send({
  //     username: "test",
  //     password: "rahasia123",
  //     name: "test",
  //   });
  //   console.info(result.body);
  //   console.info(result.status);
  //   expect(result.status).toBe(400);
  //   expect(result.body.errors).toBeDefined();
  // });
  // failed  test
  // it("should error register new user", async () => {
  //   const result = await supertest(web).post("/api/users").send({
  //     username: "",
  //     password: "",
  //     name: "",
  //   });
  //   console.info(result.body);
  //   console.info(result.status);
  //   expect(result.status).toBe(400);
  //   expect(result.body.errors).toBeDefined();
  // });
  //  success test
  // it("should can register new user", async () => {
  //   const result = await supertest(web).post("/api/users").send({
  //     username: "test",
  //     password: "rahasia",
  //     name: "test",
  //   });
  //   console.info(result.status);
  //   console.info(result.body);
  //   // expect(result.status).toBe(200);
  //   // expect(result.body.data.username).toBe("test");
  //   // expect(result.body.data.name).toBe("test");
  //   // expect(result.body.data.password).toBeUndefined();
  // });
});
