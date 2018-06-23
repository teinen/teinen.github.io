import Contents from '@/components/biography/Contents'

describe('about contents', () => {
  test('has data', () => {
    expect(typeof Contents.data).toBe('function')
  })

  test('has dafault data', () => {
    const educations = Contents.data().educations
    const works = Contents.data().works

    // educations
    expect(educations[0].id).toBe(1)
    expect(educations[0].term).toBe('2012.03')
    expect(educations[0].title).toBe('福島県立 福島高等学校 卒業')

    expect(educations[1].id).toBe(2)
    expect(educations[1].term).toBe('2012.04')
    expect(educations[1].title).toBe('東北大学 教育学部 教育科学科 入学')

    expect(educations[2].id).toBe(3)
    expect(educations[2].term).toBe('2016.03')
    expect(educations[2].title).toBe('東北大学 教育学部 教育科学科 卒業')

    // works
    expect(works[0].id).toBe(1)
    expect(works[0].term).toBe('2016.08')
    expect(works[0].title).toBe('不動産向け BtoBシステム開発')

    expect(works[1].id).toBe(2)
    expect(works[1].term).toBe('2017.10')
    expect(works[1].title).toBe('社内向け 人材管理システム開発')

    expect(works[2].id).toBe(3)
    expect(works[2].term).toBe('2018.04')
    expect(works[2].title).toBe('社内向け 開発ツール導入')
  })
})