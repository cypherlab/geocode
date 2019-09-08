import { should, expect, assert } from 'chai'
import { geocode, inRadius, LLToObject } from '../src'

should()
const apikey = process.env.APIKEY



describe('@cypherlab/geocode', () => {

  before(done => done())

  describe('geocode', () => {

    it('geocode("1060 West Addison Street")', async () => {
      const place = await geocode('1060 West Addison Street', apikey)
      place.should.have.property('place_id')
      expect(place.latlng).to.equal('41.9474473,-87.6560538')     
    })

    it('geocode("43.5262719, 5.4484675")', async () => {
      const place = await geocode('43.5262719, 5.4484675', apikey)
      place.should.have.property('place_id')
      expect(place.address).to.equal('20 Cours Mirabeau, 13100 Aix-en-Provence, France')   
    })

    // it('timeout', done => setTimeout(done, 3000))

  })

  describe('inRadius', () => {

    it('inRadius(center, marker, radius)', done => {
      const center = '43.5262719, 5.4484675'
      const marker = '43.5418485, 5.463309499999999'
      const isInRadius = inRadius(center, marker, 2.2)
      expect(isInRadius).to.equal(true)
      done()
    })

  })

})


