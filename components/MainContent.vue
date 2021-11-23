<template>
    <div class="main-container">
        <GroupButton />
        <h1 class="main-heading" > Drei einfache Schritte zu deinem neuen Job</h1>
    </div>
</template>

<script>
import GroupButton from './GroupButton.vue'

export default {
    
}
</script>

<style>
    .main-container {
        background: white;
        flex-direction: column;
        display: flex;
        align-items: center;
    }
    .main-heading {
        width: 280px;
        font-size: 21px;
        text-align: center;
        font: normal normal medium 21px/25px Lato;
        letter-spacing: 0px;
        color: #4A5568;
        opacity: 1;
    }
</style>