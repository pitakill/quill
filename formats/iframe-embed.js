import { BlockEmbed } from '../blots/block';

class IframeEmbed extends BlockEmbed {
  static create(iframeCode) {
    let node = super.create();
    node.dataset.id = 'iframe-embed-' + (new Date()).getTime();
    node.innerHTML = iframeCode;
    return node;
  }

  static value(domNode) {
    return domNode.dataset.id;
  }
}
IframeEmbed.blotName = 'iframe-embed';
IframeEmbed.className = 'ql-iframe-embed';
IframeEmbed.tagName = 'DIV';

export default IframeEmbed;
