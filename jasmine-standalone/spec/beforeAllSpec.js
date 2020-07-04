describe("Teste do beforeAll", () => {
  let cont = 0;

  beforeAll(() => {
    cont = 10;
  });

  beforeEach(() => {
    cont++;
  });

  it("deve garantir o valor 11 para o contador", () => {
    expect(cont).toEqual(11);
  });

  it("deve garantir o valor 12 para o contador", () => {
    expect(cont).toEqual(12);
  });
});
