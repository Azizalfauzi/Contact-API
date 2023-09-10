import {
  createTestUser,
  createTestContact,
  removeTestContact,
  removeTestUser,
  removeTestAddresses,
  createTestAddress,
  getTestAddress,
} from "../test-util.js";
import supertest from "supertest";
import { web } from "../../src/app/web.js";
import { getTestContact } from "../test-util.js";

describe("GET LIST /api/contacts/:contactId/", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createTestAddress();
  });

  afterEach(async () => {
    await removeTestAddresses();
    await removeTestContact();
    await removeTestUser();
  });

  it("should  can list address ", async () => {
    const testContact = await getTestContact();
    const result = await supertest(web)
      .get("/api/contacts/" + testContact.id + "/addresses")
      .set("Authorization", "test");

    expect(result.status).toBe(200);
    expect(result.body.data.length).toBe(1);
  });

  it("should  reject is contact is not found! ", async () => {
    const testContact = await getTestContact();
    const result = await supertest(web)
      .get("/api/contacts/" + (testContact.id + 1) + "/addresses")
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });
});
