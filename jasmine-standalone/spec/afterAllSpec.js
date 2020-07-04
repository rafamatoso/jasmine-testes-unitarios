describe("Teste do afterAll", () => {
  let cont;

  beforeAll(() => {
    cont = 10;
  });

  afterAll(() => {
    cont = 0;
  });

  it("deve exibir o contador com valor 10", () => {
    expect(cont).toEqual(10);
  });

  it("deve manter o contador com valor 10", () => {
    expect(cont).toEqual(10);
  });
});
