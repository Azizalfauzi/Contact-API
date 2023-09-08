import { createTestUser, removeTestContact, removeTestUser } from "./test-util";
import supertest from "supertest";
import { web } from "../../src/app/web.js";
describe("POST /api/contacts", () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestContact();
    await removeTestUser();
  });

  it("should can create new contact", async () => {
    const result = await supertest(web)
      .post("/api/contacts")
      .set("Authorization", "test")
      .send({
        first_name: "test",
        last_name: "test",
        email: "test@gmail.com",
        phone: "098212",
      });
    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.first_name).toBe("test");
    expect(result.body.data.last_name).toBe("test");
    expect(result.body.data.email).toBe("test@gmail.com");
    expect(result.body.data.phone).toBe("098212");
  });

  it("should reject request is not valid", async () => {
    const result = await supertest(web)
      .post("/api/contacts")
      .set("Authorization", "test")
      .send({
        first_name: "",
        last_name: "test",
        email: "test.com",
        phone: "09821211111111111111111111",
      });
    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});
