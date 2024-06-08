class ValidaCPF {
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        })
    }

    Sequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfInicial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfInicial);
        const digito2 = ValidaCPF.geraDigito(cpfInicial + digito1);
        this.novoCPF = cpfInicial + digito1 + digito2;
        
    }

    static geraDigito(cpfInicial){
        let total = 0;
        let reverso = cpfInicial.length + 1;

        for(let stringNumerica of cpfInicial){
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.Sequencia()) return false;
        this.geraNovoCpf();
        console.log(this.novoCPF);

        return this.novoCPF === this.cpfLimpo;
    }
}

const validacpf = new ValidaCPF('070.987.720-03')
console.log(validacpf.valida());

if(valida()){
    console.log('CPF VÁLIDO');
}else {
    console.log('CPF INVÁLIDO');
}