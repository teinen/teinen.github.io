import Contents from '@/components/about/Contents'

describe('about contents', () => {
  test('has data', () => {
    expect(typeof Contents.data).toBe('function')
  })

  test('has dafault data', () => {
    const defaultData = Contents.data()

    expect(defaultData.items[0].id).toBe(1)
    expect(defaultData.items[0].title).toBe('Name')
    expect(defaultData.items[0].content).toBe('諦念(teinen)')
    expect(defaultData.items[0].class).toBe('wow animated bounceInLeft')

    expect(defaultData.items[1].id).toBe(2)
    expect(defaultData.items[1].title).toBe('Job')
    expect(defaultData.items[1].content).toBe('Server Side Engineer')
    expect(defaultData.items[1].class).toBe('wow animated bounceInRight')

    expect(defaultData.items[2].id).toBe(3)
    expect(defaultData.items[2].title).toBe('Hobby')
    expect(defaultData.items[2].content).toBe('ゲーム, 漫画, アニメ, プログラミング')
    expect(defaultData.items[2].class).toBe('wow animated bounceInLeft')
  })
})