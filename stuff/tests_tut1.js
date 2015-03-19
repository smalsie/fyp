QUnit.test( "Namee test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Name test", function( assert ) {
  assert.ok( game.getName() == document.title, "Passed!" );
});

QUnit.test( "Phaser Test", function( assert ) {
  assert.ok( game.world instanceof Phaser.Game, "Passed!" );
});
