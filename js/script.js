import { cards } from './cards.js'
import { icones } from './icones.js'
import { footer } from './footer.js'

window.onload = () => {
    const animaCards = new cards();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));

    const icons = new icones();
    icons.animaIcones();

    const foot = new footer();
    foot.efeitoOnda();
}