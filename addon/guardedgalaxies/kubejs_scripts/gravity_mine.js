StartupEvents.registry('block', e => {
    e.create('guardedgalaxies:gravity_mine')
    .displayName('Gravity Mine')
    
    .mapColor('light_grey')
    .model('kubejs:block/gravity_mine')
    .fullBlock(false)
    .hardness(0.5)
    .requiresTool(false)
    .resistance(50)
    .lightLevel(0)
    .opaque(true)
    .renderType('translucent')
    .notSolid()
    .noCollision();
});

// Set the max stack size for the item form of the block
ItemEvents.modification(event => {
    event.modify('guardedgalaxies:gravity_mine', item => {
        item.maxStackSize = 1; // Set max stack size to 1
    });
});