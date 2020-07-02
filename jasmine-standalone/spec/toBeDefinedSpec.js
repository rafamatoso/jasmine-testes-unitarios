describe("Teste do toBeDefined", () => {
  it("Deve demonstrar o uso do toBeDefined", () => {
    let n1 = 10;
    let n2;
    let n3 = undefined;

    expect(n1).toBeDefined();
    expect(null).toBeDefined();
    expect(NaN).toBeDefined();

    expect(n2).not.toBeDefined();
    expect(n3).not.toBeDefined();
  });
});
