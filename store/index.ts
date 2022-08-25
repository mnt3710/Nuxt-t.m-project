export const state = () => ({
  tabList: ['about', 'work', 'private', 'other'],
  subTitle: ['profile', 'skills'],
  aboutContents: {
    profile: {
      left: [
        { title: 'name', text: 'Takahashi minato' },
        { title: 'univ', text: 'University of Aizu' },
      ],
      right: [
        { title: 'from', text: 'Yamagata' },
        { title: 'age', text: '20' },
      ],
    },
    skills: {
      left: [
        { title: 'vue.js', text: 'A little' },
        { title: 'TypeScript', text: 'A little' },
      ],
      right: [
        { title: 'Go Lang', text: 'will' },
        { title: 'Kotlin', text: 'will' },
      ],
    },
  },
  skills: ['vue.js', 'nuxt.js', 'TypeScript'],
  phoneNum: '070-2032-3710',
  mailAddress: 'tomatomnt@gmail.com',
})

export const mutation = {}
