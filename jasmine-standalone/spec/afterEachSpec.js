describe("Teste do afterEach", () => {
    let cont = 0;
  
    beforeEach(() => {
      cont++;
    });

    afterEach(() => {
        cont = 0
    });
  
    it("deve incrementar o contador para 1", () => {
      expect(cont).toEqual(1);
    });
  
    it("deve incrementar o contador para 1 novamente", () => {
      expect(cont).toEqual(1);
    });
  });
  