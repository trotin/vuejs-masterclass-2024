<script setup lang='ts'>

</script>

<template>
    <div>
        <h1>Projects Page</h1>
        <RouterLink to="/">Back to home</RouterLink>
        <hr />
        <ul>
            <li>
                <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Project 1</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: '/projects/[id]', params: { id: 2 } }">Project 2</RouterLink>
            </li>
        </ul>
    </div>
</template>