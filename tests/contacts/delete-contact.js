import {
  createTestUser,
  createTestContact,
  removeTestContact,
  removeTestUser,
} from "../test-util.js";
import supertest from "supertest";
import { web } from "../../src/app/web.js";
import { getTestContact } from "../test-util.js";

describe("DELETE /api/contacts/:contactsId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
  });

  afterEach(async () => {
    await removeTestContact();
    await removeTestUser();
  });

  it("should can delete contacts", async () => {
    const testContact = await getTestContact();
    const result = await supertest(web)
      .delete("/api/contacts/" + testContact.id)
      .set("Authorization", "test");
    expect(result.status).toBe(200);
    expect(result.body.data).toBe("Ok");

    // testContact = await getTestContact();
  });

  it("should reject is contact not found", async () => {
    const testContact = await getTestContact();
    const result = await supertest(web)
      .delete("/api/contacts/" + (testContact.id + 1))
      .set("Authorization", "test");
    expect(result.status).toBe(404);
    console.info(result.status);
    console.info(result.body);

    // testContact = await getTestContact();
  });
});
