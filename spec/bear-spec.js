import { Bear } from '../src/Bear';

describe('Bear', function() {
  let fuzzy = new Bear("Fuzzy");
  beforeEach(function() {
    jasmine.clock().install();
  });
  //I used to put the setHunger function in the beforeEach as well, but it was causing problems later
  afterEach(function() {
    jasmine.clock().uninstall();
  });
  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    fuzzy.setHunger(fuzzy.interval);
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.wasPlayerEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    fuzzy.setHunger(fuzzy.interval);
    jasmine.clock().tick(10001);
    expect(fuzzy.wasPlayerEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    fuzzy.setHunger(fuzzy.interval);
    jasmine.clock().tick(9001);
    fuzzy.feed(10);
    expect(fuzzy.foodLevel).toEqual(10);
  });
  it('should change how much time it takes for the food level to fall if the user  selects another difficulty (example will use easy)', function() {
    fuzzy.interval = 5000;
    fuzzy.setHunger(fuzzy.interval);
    jasmine.clock().tick(10001);
    expect(fuzzy.foodLevel).toEqual(8);
  });

})