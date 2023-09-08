import supertest from "supertest";
import {
  createTestContact,
  getTestContact,
  createTestUser,
  removeTestContact,
  removeTestUser,
  createManyTestContact,
} from "../test-util";
import { web } from "../../src/app/web";

describe("Get /api/contacts", () => {
  beforeEach(async () => {
    await createTestUser();
    await createManyTestContact();
  });

  afterEach(async () => {
    await removeTestContact();
    await removeTestUser();
  });

  it("should can without parameter", async () => {
    const result = await supertest(web)
      .get("/api/contacts")
      .set("Authorization", "test");
    expect(result.status).toBe(200);
    expect(result.body.data.length).toBe(10);
    expect(result.body.paging.page).toBe(1);
    expect(result.body.paging.total_page).toBe(2);
    expect(result.body.paging.total_item).toBe(15);
  });

  it("should can with to page 2 ", async () => {
    const result = await supertest(web)
      .get("/api/contacts")
      .query({
        page: 2,
      })
      .set("Authorization", "test");
    console.log(result.body.data);
    console.log(result.body.paging);
    expect(result.status).toBe(200);
    expect(result.body.data.length).toBe(5);
    expect(result.body.paging.page).toBe(2);
    expect(result.body.paging.total_page).toBe(2);
    expect(result.body.paging.total_item).toBe(15);
  });

  it("should can search using name ", async () => {
    const result = await supertest(web)
      .get("/api/contacts")
      .query({
        name: "test 1",
      })
      .set("Authorization", "test");

    console.log(result.body.data);

    expect(result.status).toBe(200);
    expect(result.body.data.length).toBe(6);
    expect(result.body.paging.page).toBe(1);
    expect(result.body.paging.total_page).toBe(1);
    expect(result.body.paging.total_item).toBe(6);
  });

  it("should can search using email ", async () => {
    const result = await supertest(web)
      .get("/api/contacts")
      .query({
        email: "test1",
      })
      .set("Authorization", "test");

    console.log(result.body.data);

    expect(result.status).toBe(200);
    expect(result.body.data.length).toBe(6);
    expect(result.body.paging.page).toBe(1);
    expect(result.body.paging.total_page).toBe(1);
    expect(result.body.paging.total_item).toBe(6);
  });

  it("should can search using phone ", async () => {
    const result = await supertest(web)
      .get("/api/contacts")
      .query({
        phone: "0823341",
      })
      .set("Authorization", "test");

    console.log(result.body.data);

    expect(result.status).toBe(200);
    expect(result.body.data.length).toBe(6);
    expect(result.body.paging.page).toBe(1);
    expect(result.body.paging.total_page).toBe(1);
    expect(result.body.paging.total_item).toBe(6);
  });
});
