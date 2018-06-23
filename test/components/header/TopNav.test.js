import TopNav from '@/components/header/TopNav'

describe('TopNav component', () => {
  test('has data function', () => {
    expect(typeof TopNav.data).toBe('function')
  })

  test('has default data', () => {
    const items = TopNav.data().items

    expect(items[0]).toEqual({id: 0, title: 'About', link: '#about'})
    expect(items[1]).toEqual({id: 1, title: 'Biography', link: '#biography'})
    expect(items[2]).toEqual({id: 2, title: 'Skill', link: '#skill'})
    expect(items[3]).toEqual({id: 3, title: 'Work', link: '#work'})
  })

})
