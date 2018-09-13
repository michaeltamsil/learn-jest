const axios = require('axios')
const parseJson = require('parse-json')
const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('object assignment', () => {
    const data = { one: 1};
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
})

test('adding positive numbers is not zero', () => {
    for (let a = 1; a< 10; a++) {
        for (let b =1; b < 10; b++) {
            expect(a + b).not.toBe(0)
        }
    }
})

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer'
];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer')
})

test('the data star wars is people 2 named of C-3P0', () => {
    expect.assertions(1);
    return axios.get('https://swapi.co/api/people/2/')
    .then(function (response) {
        expect(response.data.name).toBe("C-3PO")
    })
})

test('the data star wars is people 762 expect error to be defined', () => {
    expect.assertions(1);
    return axios.get('https://swapi.co/api/people/762/')
    .catch(function (error) {
        expect(error).toBeDefined()
    })
})

Async/Await
let name = 'Yavin IV'
test('the data star wars planet id 3 is ' + name, async () => {
    expect.assertions(1);
    const data = await axios.get('https://swapi.co/api/planets/3/').then( response => response.data);
    expect(data.name).toBe(name)
})

test('the data star wars planet id 398 status is 404 ', async () => {
    expect.assertions(1);
    try {
        await axios.get('https://swapi.co/api/planets/398/')
    } catch (e) {
        expect(e.response.status).toBe(404)
    }
})


test('the data star wars planet id 3 is ' + name + ' using async await .resolves', async () => {
    expect.assertions(1);
    await expect(
            axios.get('https://swapi.co/api/planets/3/').then(response => response.data.name )
        )
        .resolves.toBe(name)
})

// this is different ... don't know what the best short answer, it's feels weird if fails use resolves
test('the data star wars planet id 398 status is 404, using async await .rejects', async () => {
    expect.assertions(1);
    await expect(
        axios.get('https://swapi.co/api/planets/398/')
        .catch(e => {
            return e.response.status
        })
    )
    //.rejects.toBe(404)
    .resolves.toBe(404)
})