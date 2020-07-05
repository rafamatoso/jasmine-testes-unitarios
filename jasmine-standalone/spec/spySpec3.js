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

  it("deve demonstrar o uso do calls.any", () => {
    pending("desabilitado para testar outros métodos nesta suite");
    calculadora.somar(1, 1);
    expect(calculadora.somar.calls.any()).toBeTruthy();
  });

  it("deve demonstrar o uso do calls.count", () => {
    pending("desabilitado para testar outros métodos nesta suite");
    calculadora.somar(1, 2);
    calculadora.somar(2, 2);
    // calls.count se assemelha ao toHaveBeenCalled
    expect(calculadora.somar.calls.count()).toEqual(2);
  });

  it("deve demonstrar o uso do calls.argsFor", () => {
    calculadora.somar(1, 2);
    calculadora.somar(3, 1);
    expect(calculadora.somar.calls.argsFor(0)).toEqual([1, 2]);
    expect(calculadora.somar.calls.argsFor(1)).toEqual([3, 1]);
  });
});
