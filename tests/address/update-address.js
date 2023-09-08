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

describe("PUT /api/contacts/:contactId/addresses/:addressId", () => {
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

  it("should  can update address", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .put("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
      .set("Authorization", "test")
      .send({
        street: "jalan",
        city: "kota",
        province: "provinsi",
        country: "indonesia",
        postal_code: "1212",
      });
    // console.info(result.body);
    // console.info(result.status);
    expect(result.status).toBe(200);
    expect(result.body.data.id).toBe(testAddress.id);
    expect(result.body.data.street).toBe("jalan");
    expect(result.body.data.city).toBe("kota");
    expect(result.body.data.province).toBe("provinsi");
    expect(result.body.data.country).toBe("indonesia");
    expect(result.body.data.postal_code).toBe("1212");
  });

  it("should reject if request is not valid", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .put("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
      .set("Authorization", "test")
      .send({
        street: "",
        city: "",
        province: "",
        country: "indonesia",
        postal_code: "2121",
      });
    // console.info(result.body);
    // console.info(result.status);
    expect(result.status).toBe(400);
  });

  it("should reject if address is not found", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .put(
        "/api/contacts/" + testContact.id + "/addresses/" + (testAddress.id + 1)
      )
      .set("Authorization", "test")
      .send({
        street: "jalan",
        city: "kota",
        province: "provinsi",
        country: "indonesia",
        postal_code: "123123",
      });
    console.info(result.body);
    console.info(result.status);
    expect(result.status).toBe(404);
  });

  it("should reject if contact is not found", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .put(
        "/api/contacts/" + (testContact.id + 1) + "/addresses/" + testAddress.id
      )
      .set("Authorization", "test")
      .send({
        street: "jalan",
        city: "kota",
        province: "provinsi",
        country: "indonesia",
        postal_code: "123123",
      });
    console.info(result.body);
    console.info(result.status);
    expect(result.status).toBe(404);
  });
});
