<template>
    <div class="section">


      <div class="augs" data-augmented-ui>


        <div class="section-title">
            <P>
              {{title}}
            </P>

            <slot name="extra"></slot>
        </div>


        <div class="section-body" :style="{height: height ? `calc(${height} - 20px)` : 'auto'}" >
            <slot></slot>
        </div>


      </div>


    </div>



</template>

<script>
    // import "./augmented-ui-main/aug-core.min.css"
    // import 'augmented-ui/aug-core.min.css';
    // <link rel='stylesheet' href='https://unpkg.com/augmented-ui@2.0.0/aug-core.min.css' />
   

    export default {
        name: 'Section',
        props: ['title', 'height'],
    }
</script>

<style lang="less" scoped>





    .section:not(.section-body){


        padding: 20px;
        padding-top: 0px;
        position: relative;
        margin-bottom: 20px;
        width: 100%;
        --glow-margin: 10px;



        .section-title{
          text-align: center;

          color: rgb(255 200 255 / 0.5);
          text-shadow: 0 0 12px rebeccapurple;
          letter-spacing: 0.1em;

          --glow: drop-shadow(0 0 1px violet);
          filter: var(--glow) brightness(1.5) drop-shadow(0 0 10px violet);
        }



        .augs {
        --aug-clip-tr1: initial;
        --aug-tr1-alt-join-out: initial;
        --aug-tr1: 5px;
        --aug-clip-tr2: initial;
        --aug-tr2: 5px;
        --aug-tr-extend1: 50px;

        --aug-round-tl1: initial;
        --aug-tl1: 8px;
        --aug-round-br1: initial;
        --aug-br1: 8px;

        --aug-border: initial;
        --aug-border-all: 2px;





        margin: auto;
        width: calc(100% - var(--glow-margin) * 2);
        height: calc(100% - var(--glow-margin) * 2);




      }

      .section-body{
          min-height: 100px;
          overflow: auto;
          --glow: none;
          //filter: var(--glow) brightness(1.5) drop-shadow(0 0 10px violet);
      }


      .bg {
        background: repeating-linear-gradient(
            to top,
            rgba(255, 255, 255, 0.03),
            transparent 2px
          ),
          linear-gradient(to bottom, #200933 75%, #3d0b43);
      }
    }



    .augs::after{
      --aug-border-bg: linear-gradient(to bottom left, rebeccapurple, orange);
      z-index: -1;
      --glow: drop-shadow(0 0 1px violet);
      filter: var(--glow) brightness(1.5) drop-shadow(0 0 10px violet);
      --aug-border: initial;
      --aug-border-all: 5px;

    }




    * {
      font: normal 1em sans-serif;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }









</style>