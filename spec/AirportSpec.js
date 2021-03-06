'use strict'

describe('Airport', function(){
  var airport
  var plane

  beforeEach(function(){
    airport = new Airport()
    plane = jasmine.createSpy('plane')
  })

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([])
  })

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane)
    expect(airport.planes()).toContain(plane)
  })

  it('can clear planes for takeoff', function() {
    airport.clearForLanding(plane)
    airport.clearForTakeOff(plane)
    expect(airport.planes()).not.toContain(plane)
  })
})
