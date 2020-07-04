describe("Testes do objeto Spy", () => {
  let calculadora = {
    somar: (n1, n2) => {
      return n1 + n2;
    },

    subtrair: (n1, n2) => {
      return n1 - n2;
    },
  };

  beforeAll(() => {
    spyOn(calculadora, "somar").and.returnValue(10);
    spyOn(calculadora, "subtrair");
  });

  it("deve retornar 10 para o método somar", () => {
    expect(calculadora.somar(1, 2)).toEqual(10);
  });
});
