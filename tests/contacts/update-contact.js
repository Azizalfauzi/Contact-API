import {
  createTestUser,
  createTestContact,
  removeTestContact,
  removeTestUser,
} from "../test-util.js";
import supertest from "supertest";
import { web } from "../../src/app/web.js";
import { getTestContact } from "../test-util.js";

describe("PUT /api/contacts/:contactsId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
  });

  afterEach(async () => {
    await removeTestContact();
    await removeTestUser();
  });

  // it("should can update exisiting contact", async () => {
  //   const testContact = await getTestContact();

  //   const result = await supertest(web)
  //     .put("/api/contacts/" + testContact.id)
  //     .set("Authorization", "test")
  //     .send({
  //       first_name: "Aziz",
  //       last_name: "Alfa",
  //       email: "aziz@gmail.com",
  //       phone: "082334",
  //     });
  //   expect(result.status).toBe(200);
  //   expect(result.body.data.id).toBe(testContact.id);
  //   expect(result.body.data.first_name).toBe("Aziz");
  //   expect(result.body.data.last_name).toBe("Alfa");
  //   expect(result.body.data.email).toBe("aziz@gmail.com");
  //   expect(result.body.data.phone).toBe("082334");
  // });

  // it("should can reject request is invalid", async () => {
  //   const testContact = await getTestContact();

  //   const result = await supertest(web)
  //     .put("/api/contacts/" + testContact.id)
  //     .set("Authorization", "test")
  //     .send({
  //       first_name: "",
  //       last_name: "",
  //       email: "aziz@gmail",
  //       phone: "",
  //     });
  //   expect(result.status).toBe(400);
  // });

  it("should reject if contact is not found", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .put("/api/contacts/" + testContact.id)
      .set("Authorization", "test")
      .send({
        first_name: "Aziz",
        last_name: "Alfa",
        email: "aziz@gmail.com",
        phone: "082334",
      });
    
    expect(result.status).toBe(404);
  });
});
