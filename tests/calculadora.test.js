const {somar, subtrair, multiplicar, 
    dividir} = require('../src/calculadora.js')

describe('Testes para calculadora', ()=> {
    test('Deve somar dois números', ()=> {
        // Aqui acontece o teste
        expect(somar(5,5)).toBe(10)
    })
    test('Deve subtrair dois números', ()=> {
        // Aqui acontece o teste
        expect(subtrair(15,5)).toBe(10)
    })
    test('Deve multiplicar dois números', ()=> {
        // Aqui acontece o teste
        expect(multiplicar(5,5)).toBe(25)
    })
    test('Deve dividir dois números', ()=> {
        // Aqui acontece o teste
        expect(dividir(15,5)).toBe(3)
    })
    test('Deve lançar erro ao dividir por zero', ()=> {
        expect(() => dividir(10,0)).toThrow()
    })

})