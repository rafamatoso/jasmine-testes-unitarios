// toBe compara todo o objeto

describe("Comparador toBe", () => {
  it("Deve validar o uso do toBe", () => {
    expect(true).toBe(true);
    expect("Teste").toBe("Teste");
  });

  it("Deve comparar o obj1 e obj2 com toBe", () => {
    let obj1 = { valor: true };
    let obj2 = { valor: true };
    expect(obj1).toBe(obj2);
  });

  it("Deve comparar se o obj1 não é igual ao obj2 com not.toBe", () => {
    let obj1 = { valor: true };
    let obj2 = { valor: true };
    expect(obj1).not.toBe(obj2);
  });
});
