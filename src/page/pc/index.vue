<template>
   <div id="pc">
       <div class="pc-left">
            <Section
                class="left-map"
                title="重庆市疫情防控重点区域"
                height="100%"
            >
                <div class="part-sz">
                    <SzStatic />
                    <SzMap />
                </div>
            </Section>
       </div>


   </div>
</template>

<script>


import Section from '@/components/section'
import SzMap from './components/cqMap2'
import SzStatic from './components/cqStatic'


export default {
    name: 'PC',
    components: {
        Section,
        SzMap,
        SzStatic,
    },
};
</script>

<style lang="less" scoped>
    #pc{
        display: flex;
        height: 100%;
        .pc-left {
            width: 100%;
            overflow: hidden;
            .left-map {
                height: 100%;
            }
            .part-sz{
                display: flex;
                flex-direction: column;
                height: 100%;
                .map{
                    flex: 1;
                    width: 100%;
                }
            }
        }

    }
</style>
