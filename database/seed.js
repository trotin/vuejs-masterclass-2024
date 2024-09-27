/* eslint-env node  */
import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.VITE_SUPBASE_URL, process.env.SERVICE_ROLE_KEY)

const logStep = (stepMessage) => {
  console.log(stepMessage)
}

const seedProjects = async (numEntries) => {
  logStep('Seeding projects...')
  const projects = []
  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3)

    projects.push({
      name: name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3])
    })
  }
  const { data, error } = await supabase.from('projects').insert(projects).select()

  if (error) return console.error('Projects', error)

  console.log('Projects seeded successfully.', data)

  return data
}

const seedTasks = async (numEntries, projectsIds) => {
  logStep('Seeding tasks...')
  const tasks = []

  for (let i = 0; i < numEntries; i++) {
    tasks.push({
      name: faker.lorem.words(3),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      description: faker.lorem.paragraph(),
      due_date: faker.date.future(),
      project_id: faker.helpers.arrayElement(projectsIds),
      collaborators: faker.helpers.arrayElements([1, 2, 3])
    })
  }

  const { data, error } = await supabase.from('tasks').insert(tasks).select('id')

  if (error) return console.error('Tasks', error)

  logStep('Tasks seeded successfully.')

  return data
}

// populate tables
const numEntriesPerTable = 10

const projects = await seedProjects(numEntriesPerTable)
console.log(projects)

const projectIds = projects.map((p) => p.id)
await seedTasks(numEntriesPerTable, projectIds)
