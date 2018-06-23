import Contents from '@/components/about/Contents'

describe('about contents', () => {
  test('has data', () => {
    expect(typeof Contents.data).toBe('function')
  })

  test('has dafault data', () => {
    const items = Contents.data().items

    expect(items[0].id).toBe(1)
    expect(items[0].title).toBe('Name')
    expect(items[0].content).toBe('諦念(teinen)')
    expect(items[0].class).toBe('wow animated bounceInLeft')

    expect(items[1].id).toBe(2)
    expect(items[1].title).toBe('Job')
    expect(items[1].content).toBe('Server Side Engineer')
    expect(items[1].class).toBe('wow animated bounceInRight')

    expect(items[2].id).toBe(3)
    expect(items[2].title).toBe('Hobby')
    expect(items[2].content).toBe('ゲーム, 漫画, アニメ, プログラミング')
    expect(items[2].class).toBe('wow animated bounceInLeft')
  })
})