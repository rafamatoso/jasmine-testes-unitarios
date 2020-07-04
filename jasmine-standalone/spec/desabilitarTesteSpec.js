describe("Teste do beforeEach", () => {
  let cont = 0;

  beforeEach(() => {
    cont++;
  });

  it("deve incrementar o contador para 1", () => {
    expect(cont).toEqual(1);
  });

  xit("deve incrementar o contador para 2", () => {
    expect(cont).toEqual(5);
  });

  it("deve incrementar o contador para 2", () => {
    expect(cont).toEqual(5);
    pending("implementar...");
  });

  it("deve incrementar o contador para 2");
});
