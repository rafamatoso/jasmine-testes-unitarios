describe("Teste do toBeLessThan", () => {
  it("Deve demonstrar o uso do toBeLessThan", () => {
    const PI = 3.1415;

    expect(3).toBeLessThan(PI);
    expect(3.5).not.toBeLessThan(PI);
  });
});
