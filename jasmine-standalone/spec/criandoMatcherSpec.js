let meuMatcher = {
  toBeValidEmail: (util, customEqualityTesters) => {
    let emailRegex = /\S+@\S+\.\S+/;
    return {
      compare: (actual, expected) => {
        let result = {};
        if (expected === undefined) {
          result.pass = emailRegex.test(actual);
        } else {
          result.pass = expected.test(expected);
        }
        if (result.pass) {
          result.message = actual + " é um email válido";
        } else {
          result.message = actual + " não é um email válido";
        }
        return result;
      },
    };
  },
};

describe("Testes do objeto jasmine.addMatchers", () => {
  beforeEach(() => {
    jasmine.addMatchers(meuMatcher);
  });

  it("deve verificar se um email é válido", () => {
    expect("teste@teste.com").toBeValidEmail();
    expect("email").not.toBeValidEmail();
  });
});
