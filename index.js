class ValidaCPF {
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        })
    }
}

const validacpf = new ValidaCPF('070.987.720-03')
