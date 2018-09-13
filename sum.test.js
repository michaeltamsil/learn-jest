let axios = require('axios')
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

test('the data star wars is people 762 is error', () => {
    expect.assertions(1);
    return axios.get('https://swapi.co/api/people/762/')
    .catch(function (error) {
        expect(error).toBeDefined()
    })
})