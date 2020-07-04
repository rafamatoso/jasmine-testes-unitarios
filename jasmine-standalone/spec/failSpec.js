describe("Testedo fail", () => {
  it("deve demonstrar o uso do fail", () => {
    let operacao = (executar, callback) => {
      if (executar) {
        callback();
      }
    };

    operacao(false, () => {
      fail("não deve executar função do callback");
    });
  });
});
