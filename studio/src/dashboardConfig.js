export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fffb6f605b5e721f4b4d661',
                  title: 'Sanity Studio',
                  name: 'project-sanity-gatsby-cfo-studio',
                  apiId: 'f1545bb6-39e9-485e-a51c-38b46fc6fa9f'
                },
                {
                  buildHookId: '5fffb6f635154c25787b58ee',
                  title: 'Blog Website',
                  name: 'project-sanity-gatsby-cfo',
                  apiId: 'fc1b3ae3-f6dc-4d81-a445-62d77cc928e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darmo1/project-sanity-gatsby-cfo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://project-sanity-gatsby-cfo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
