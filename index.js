var Chunk = require('prismarine-chunk');

var layer = function(chunk, y, block) {
    for(var x=0; x<16; x++)
        for(var z=0; z<16; z++)
            chunk.setBlock(x, y, z, block);
};

module.exports.generate = function(x, y, seed) {
    var chunk = new Chunk();

    var y = 0;

    layer(chunk, y++, { id: 7, data: 0 });
    layer(chunk, y++, { id: 3, data: 0 });
    layer(chunk, y++, { id: 3, data: 0 });
    layer(chunk, y++, { id: 3, data: 0 });
    layer(chunk, y++, { id: 2, data: 0 });

    return chunk;
};
