<template>
    <Navbar page="dashboard" />
    
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-3 gap-8 mt-5">
               <h1>Hello SIGAMMA!!</h1>
            </div>

        
        
    </div>
</template>

<script setup>
   
    definePageMeta({
        middleware: 'auth'
    })
  
</script>