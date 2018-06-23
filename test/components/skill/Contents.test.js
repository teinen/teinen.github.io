import Contents from '@/components/skill/Contents'

describe('about contents', () => {
  test('has data', () => {
    expect(typeof Contents.data).toBe('function')
  })

  test('has dafault data', () => {
    const contents = Contents.data().contents

    // contents
    // Front-end
    expect(contents[0].id).toBe(1)
    expect(contents[0].title).toBe('Front-end')

    const frontSkills = contents[0].skills
    expect(frontSkills[0]).toEqual({id: 1, name: 'html5'})
    expect(frontSkills[1]).toEqual({id: 2, name: 'css3'})
    expect(frontSkills[2]).toEqual({id: 3, name: 'sass'})
    expect(frontSkills[3]).toEqual({id: 4, name: 'javascript'})
    expect(frontSkills[4]).toEqual({id: 5, name: 'react'})


    // Back-end
    expect(contents[1].id).toBe(2)
    expect(contents[1].title).toBe('Back-end')

    const backSkills = contents[1].skills
    expect(backSkills[0]).toEqual({id: 1, name: 'java'})
    expect(backSkills[1]).toEqual({id: 2, name: 'ruby'})
    expect(backSkills[2]).toEqual({id: 3, name: 'python'})
    expect(backSkills[3]).toEqual({id: 4, name: 'swift'})
    expect(backSkills[4]).toEqual({id: 5, name: 'ruby_on_rails'})
    expect(backSkills[5]).toEqual({id: 6, name: 'mysql'})
    expect(backSkills[6]).toEqual({id: 7, name: 'postgresql'})

    // Platform
    expect(contents[2].id).toBe(3)
    expect(contents[2].title).toBe('Platform')

    const platformSkills = contents[2].skills
    expect(platformSkills[0]).toEqual({id: 1, name: 'aws'})
    expect(platformSkills[1]).toEqual({id: 2, name: 'docker'})
    expect(platformSkills[2]).toEqual({id: 3, name: 'linux'})
    expect(platformSkills[3]).toEqual({id: 4, name: 'atlassian'})

    // Dev tool
    expect(contents[3].id).toBe(4)
    expect(contents[3].title).toBe('Dev tool')

    const devToolSkills = contents[3].skills
    expect(devToolSkills[0]).toEqual({id: 1, name: 'git'})
    expect(devToolSkills[1]).toEqual({id: 2, name: 'jira'})
    expect(devToolSkills[2]).toEqual({id: 3, name: 'eclipse'})
    expect(devToolSkills[3]).toEqual({id: 4, name: 'visualstudio'})
    expect(devToolSkills[4]).toEqual({id: 5, name: 'photoshop'})
    expect(devToolSkills[5]).toEqual({id: 6, name: 'illustrator'})
  })
})