/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-template */
/* eslint-disable no-console */
const request = require('supertest')
const app = require('../src/app')

describe('Users endpoints', () => {
  /* POST Create a user */
  it('post request to /users should create a user', async () => {
    const userToCreate = {
      name: 'SomeName' + Date.now(),
      age: 42,
      profession: 'artist',
    }

    const createdUser = (await request(app).post('/users').send(userToCreate)).body
    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
    expect(createdUser.profession).toBe(userToCreate.profession)
  })

  /* GET list of /users */
  it('get request to /users should list users', async () => {
    const userList = (await request(app).get('/users')).body
    const usersExist = userList.length > 0

    expect(usersExist).toBe(true)
  })
  /* _------------------------------------------------------*/

  it('user should be able to like an Artwork', async () => {
    // create an Artwork
    const artwork = (
      await request(app)
        .post('/artworks')
        .send({ artworkName: 'myartname', fileName: 'myfilename.jpg', material: 'wood', year: 2012, price: 3600 })
    ).body
    console.log('artwork:', artwork)

    // create a user
    const userWithArtwork = (
      await request(app)
        .post('/users')
        .send({
          name: 'ArtworkOwnerUser' + Date.now(),
          age: 27,
          profession: 'Artist',
        })
    ).body
    console.log('userWithArtwork:', userWithArtwork)

    // add the artwork to that user
    await request(app).post(`/users/${userWithArtwork._id}/adds`).send({ artworkId: artwork._id })

    // create another user
    const likerUser = {
      name: 'Liker User' + Date.now(),
      age: 36,
      profession: 'Curator',
    }

    const createdLikerUser = (await request(app).post('/users').send(likerUser)).body
    console.log('createdLikerUser:', createdLikerUser)

    // like the artwork with that another user
    await request(app).post(`/users/${createdLikerUser._id}/likes`).send({ artworkId: artwork._id })

    const finalArtworkUser = (await request(app).get(`/users/${userWithArtwork._id}/json`)).body
    console.log('finalArtworkUser:', finalArtworkUser)

    const finalLikerUser = (await request(app).get(`/users/${createdLikerUser._id}/json`)).body
    console.log('finalLikerUser:', finalLikerUser)

    expect(finalArtworkUser.artworksList.length).toBe(1)
    expect(finalLikerUser.likes.length).toBe(1)

    console.log('finalArtworkUser.artworksList[0].likedBy[0]._id: ', finalArtworkUser.artworksList[0].likedBy[0]._id)

    expect(finalArtworkUser.artworksList[0].likedBy[0]._id).toBe(finalLikerUser._id)
    expect(finalLikerUser.likes[0]).toBe(finalArtworkUser.artworksList[0]._id)
  })
})
