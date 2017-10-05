import {BlockEmbed} from '../blots/block';

const {warn} = console;

class Instagram extends BlockEmbed {
  static create(match) {
    const [id, html] = match;
    const node = super.create();
    Object.assign(node.dataset, {id, html});

    if (typeof instgrm === 'undefined') {
      warn('There is no Instagram Library. Add it!');
      node.insertAdjacentHTML('afterbegin', '[Tuvimos problemas para desplegar el contenido: ');
      node.insertAdjacentHTML('beforeend', `<a href="https://www.instagram.com/p/${id}">${id}</a>`);
      node.insertAdjacentHTML('beforeend', ' (Aquí se desplegará)]');
      node.setAttribute('style', 'text-align:center;');
    } else {
      node.insertAdjacentHTML('afterbegin', html);
      // eslint-disable-next-line
      instgrm.Embeds.process();
    }

    return node;
  }

  static value(domNode) {
    const {id, html} = domNode.dataset;
    return [id, html];
  }
}

Instagram.blotName = 'instagram';
Instagram.className = 'ql-instagram';
Instagram.tagName = 'DIV';

export default Instagram;
