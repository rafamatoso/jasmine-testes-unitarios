describe("Testes do objeto Spy", () => {
  let calculadora = {
    somar: (n1, n2) => {
      return n1 + n2;
    },
  };

  beforeAll(() => {
    // Cria um objeto spy de calculadora e um spy do método do objeto
    spyOn(calculadora, "somar");
  });

  // caso o objeto spy não seja instanciado, o expect testaria
  // a instância do objeto definido no início da suite
  it("deve possuir o método somar como não definido", () => {
    expect(calculadora.somar(1, 1)).toBeUndefined();
  });
});
