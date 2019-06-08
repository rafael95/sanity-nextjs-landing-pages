export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cfc46c3d90e03af4ca9ced3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yvkr9mws',
                  apiId: '5d07dca6-03db-46d2-8529-6e0548df3cc3'
                },
                {
                  buildHookId: '5cfc46c3ccb6ac4853020885',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-katop2g6',
                  apiId: '5c0902b3-46b4-467f-a0d7-dfbaeddc4228'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rafael95/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-katop2g6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
