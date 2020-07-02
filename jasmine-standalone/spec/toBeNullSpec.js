// null é um tipo, é usado para dizer que uma variável não possui valor

describe("Teste do toBeNull", () => {
  it("Deve demonstrar o uso do toBeNull", () => {
    let n1 = null;
    let n2 = undefined;
    let n3;
    let n4 = NaN;
    let n5 = "teste";

    expect(n1).toBeNull();

    expect(n2).not.toBeNull();
    expect(n3).not.toBeNull();
    expect(n4).not.toBeNull();
    expect(n5).not.toBeNull();
  });
});
