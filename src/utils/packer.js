export class Packer {
    constructor(w, h) {
        this.root = { x: 0, y: 0, w, h };
    }

    rotate(blockW, blockH){
      let oldW = blockW;
      let oldH = blockH;
      return {blockW: oldH, blockH: oldW};
    }

    fit(blocks) {
        let node;
        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i];
            const rotateW = this.rotate(block.w, block.h).blockW;
            const rotateH = this.rotate(block.w, block.h).blockH;
            if ((node = this.findNode(this.root, block.w, block.h))) {
                block.fit = this.splitNode(node, block.w, block.h);
            }
            else if((node = this.findNode(this.root, rotateW, rotateH))){
                block.fit = this.splitNode(node, block.w = rotateW, block.h = rotateH);
            }
        }
    }

    findNode(root, blockW, blockH) {
        if (root.used) {
            return (
                this.findNode(root.right, blockW, blockH) ||
                this.findNode(root.down, blockW, blockH)
            );
        } else if (blockW <= root.w && blockH <= root.h) {
            return root;
        } else {
            return null;
        }
    }

    splitNode(node, blockW, blockH) {
        node.used = true;
        node.down = {
            x: node.x,
            y: node.y + blockH,
            w: node.w,
            h: node.h - blockH,
        };
        node.right = {
            x: node.x + blockW,
            y: node.y,
            w: node.w - blockW,
            h: blockH,
        };
        return node;
    }
}