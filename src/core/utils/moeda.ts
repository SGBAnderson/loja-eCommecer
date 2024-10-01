export default class Moeda {
    static formatar(
        valor: number,
        Localizacao: string = 'pt-Br',
        moeda: string = 'BRL'
    ): string {
        return (valor ?? 0).toLocaleString(Localizacao, {
            currency: moeda,
        })
    }
}