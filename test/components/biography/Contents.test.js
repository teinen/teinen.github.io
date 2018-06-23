import Contents from '@/components/biography/Contents'

describe('about contents', () => {
  test('has data', () => {
    expect(typeof Contents.data).toBe('function')
  })

  test('has dafault data', () => {
    const defaultData = Contents.data()

    // educations
    expect(defaultData.educations[0].id).toBe(1)
    expect(defaultData.educations[0].term).toBe('2012.03')
    expect(defaultData.educations[0].title).toBe('福島県立 福島高等学校 卒業')

    expect(defaultData.educations[1].id).toBe(2)
    expect(defaultData.educations[1].term).toBe('2012.04')
    expect(defaultData.educations[1].title).toBe('東北大学 教育学部 教育科学科 入学')

    expect(defaultData.educations[2].id).toBe(3)
    expect(defaultData.educations[2].term).toBe('2016.03')
    expect(defaultData.educations[2].title).toBe('東北大学 教育学部 教育科学科 卒業')

    // works
    expect(defaultData.works[0].id).toBe(1)
    expect(defaultData.works[0].term).toBe('2016.08')
    expect(defaultData.works[0].title).toBe('不動産向け BtoBシステム開発')

    expect(defaultData.works[1].id).toBe(2)
    expect(defaultData.works[1].term).toBe('2017.10')
    expect(defaultData.works[1].title).toBe('社内向け 人材管理システム開発')

    expect(defaultData.works[2].id).toBe(3)
    expect(defaultData.works[2].term).toBe('2018.04')
    expect(defaultData.works[2].title).toBe('社内向け 開発ツール導入')
  })
})