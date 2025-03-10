export default class Money {
    readonly value: number;

    private constructor(money: number) {
        this.value = money;
    }

    static create(money: number) {
        return new Money(money);
    }

    formattedPriceBRL() {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(this.value / 100);
    }
}
