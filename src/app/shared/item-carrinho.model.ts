class ItemCarrinho {
    constructor(
        public id: number,
        public img: object,
        public titulo: object,
        public descricao_oferta: object,
        public valor: object,
        public quantidade?: number
    ) { }
}

export { ItemCarrinho }