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

describe("DELETE /api/contacts/:contactId/addresses/:addressId", () => {
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

  it("should can be remove address ", async () => {
    const testContact = await getTestContact();
    let testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete(
        "/api/contacts/" + testContact.id + "/addresses/" + testAddress.id
      )
      .set("Authorization", "test");
    expect(result.status).toBe(200);
    expect(result.body.data).toBe("OK");

    testAddress = await getTestAddress();
    expect(testAddress).toBeNull();
  });

  it("should can reject if address is not found ", async () => {
    const testContact = await getTestContact();
    let testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete(
        "/api/contacts/" + testContact.id + "/addresses/" + (testAddress.id + 1)
      )
      .set("Authorization", "test");
    expect(result.status).toBe(404);
  });

  it("should can reject if contact is not found ", async () => {
    const testContact = await getTestContact();
    let testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete(
        "/api/contacts/" + (testContact.id + 1) + "/addresses/" + testAddress.id
      )
      .set("Authorization", "test");
    expect(result.status).toBe(404);
  });
});
