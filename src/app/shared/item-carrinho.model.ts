class ItemCarrinho {
    constructor(
        public id: number,
        public img: any,
        public titulo: any,
        public descricao_oferta: any,
        public valor: any,
        public quantidade?: number
    ) { }
}

export { ItemCarrinho }