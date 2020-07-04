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
    // spyOn(calculadora, "somar").and.returnValue(10);
    spyOn(calculadora, "somar").and.returnValues(1, 5);
    spyOn(calculadora, "subtrair");
  });

  it("deve retornar 10 para o método somar", () => {
    pending("desabilitado para testar outros métodos nesta suite");
    expect(calculadora.somar(1, 2)).toEqual(1);
  });

  it("deve retornar valores distintos para cada chamada do método somar", () => {
    expect(calculadora.somar(3, 4)).toEqual(1);
    expect(calculadora.somar(1, 2)).toEqual(5);
    expect(calculadora.somar(4, 4)).toBeUndefined();
  });
});
