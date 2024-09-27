<script setup lang='ts'>
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';

const projects = ref()

const getProjects = async () => {
    const { data, error } = await supabase.from('projects').select()
    if (error) {
        console.error(error)
    }
    return data
}

(async () => {
    projects.value = await getProjects()
})()

</script>

<template>
    <div>
        <h1>Projects Page</h1>
        <RouterLink to="/">Back to home</RouterLink>
        <hr />
        <ul>
            <li v-for="project in projects" :key="project.id">
                <RouterLink :to="{ name: '/projects/[id]', params: { id: project.id } }">
                    {{ project.name }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>