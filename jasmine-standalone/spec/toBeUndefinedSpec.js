describe("Teste do toBeUndefined", () => {
  it("Deve demonstrar o uso do toBeUndefined", () => {
    let n1;
    let n2 = undefined;
    let n3 = false;

    expect(n1).toBeUndefined();
    expect(n2).toBeUndefined();

    expect(n3).not.toBeUndefined();
    expect(null).not.toBeUndefined();
  });
});
