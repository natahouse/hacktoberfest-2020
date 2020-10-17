import data from "../people/data.js";

it("should not pass the characters limit", () => {
  const fields = data.filter((e) =>
    Object.values(e).some((i) => i.length > 150)
  );

  expect(fields.length).toBe(0);
});
