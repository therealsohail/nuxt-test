<template>
    <div class="content-container">
        <img class="content-image" src="../assets/undraw_Profile_data_re_v81r.svg" height="144" width="220" alt="pic" >
        <div class="content-description">
            <h1 class="pointer-index" >1.</h1>
            <p class="pointer-content">Erstellen dein Lebenslauf</p>
        </div>
        <div class="background-container">
            <div class="content-description">
                <h1 class="pointer-index" >2.</h1>
                <p class="pointer-content">Erstellen dein Lebenslauf</p>
            </div>
            <img class="content-image" src="../assets/undraw_task_31wc.svg" height="144" width="220" alt="pic" >
        </div>
        <div class="content-description">
                <h1 class="pointer-index" >3.</h1>
                <p class="pointer-content">Mit nur einem Klick bewerben</p>
         </div>
        <img class="content-image" src="../assets/undraw_personal_file_222m.svg" height="144" width="220" alt="pic" >
    </div>
</template>

<script>
export default {
    props: ['pointer']
}
</script>

<style>
    .content-container {
        padding-top: 20px;
        background: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .content-image {
        margin-left: 81px;
    }
    .content-description {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .pointer-index {
        font: normal normal normal 130px/156px Lato;
        letter-spacing: 0px;
        color: #718096;
    }
    .pointer-content {
        font: normal normal normal 16px/19px Lato;
        letter-spacing: 0.47px;
        color: #718096;
        padding-left: 21px;
        margin-bottom: 25px;
    }
    .background-container {
        top: 1088px;
        left: -63.47837829589844px;
        width: 520px;
        height: 370px;
        background: transparent linear-gradient(134deg, #E6FFFA 0%, #EBF4FF 100%) 0% 0% no-repeat padding-box;
        opacity: 1;
  }
 
</style>