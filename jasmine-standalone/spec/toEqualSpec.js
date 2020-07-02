// toEqual compara os valores dos objetos

describe("Teste do toEqual", () => {
  it("Deve validar o uso do toEqual", () => {
    let obj1 = { valor: true };
    let obj2 = { valor: true };

    expect(true).toEqual(true);
    expect(obj1).toEqual(obj2);
  });
});
