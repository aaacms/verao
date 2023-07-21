class cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById('section-dicas');
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');
    }

    scrollCards() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        if (posicao >= 100) {
            this.cardEsq.style.transform = `translate(${((-posicao) + 100)/20}%)`;
            this.cardDir.style.transform = `translate(${(posicao - 100)/20}%)`;
        }
    }
}

export { cards }