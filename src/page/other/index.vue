<template>
    <div id="pc">
        <div class="pc-left">
            <Section class="left-map" title="国内主要城市新增确诊趋势" height="100%">
                <div class="part-sz">
                    <!--                    <SzStatic />-->
                    <!--                    <SzMap />-->
                    <!-- <WordCloud id="myWordCloud" /> -->
                    <LineChart />


                </div>
            </Section>
        </div>

        <div class="pc-right">
            <Section class="right-list" title="重庆市各区疫情防控形势" height="100%">
                <div class="part-list">
                    <List />
                </div>
            </Section>
            <Section title="疫情词云" class="right-map" height="100%">
                <div class="part-world">
                    <WordCloud id="myWordCloud" />
                </div>
            </Section>
        </div>

    </div>
</template>

<script>


import Section from '@/components/section'
import List from './components/list'
import LineChart from './components/lineChart'
import WordCloud from './components/wordCloud'


export default {
    name: 'PC',
    components: {
        Section,
        List,
        LineChart,
        WordCloud
    },
};
</script>

<style lang="less" scoped>
#pc {
    display: flex;
    height: 100%;

    .pc-left {
        width: 60%;

        overflow: hidden;

        .left-map {
            height: 100%;
        }

        .part-sz {
            display: flex;
            flex-direction: column;
            height: 100%;

            .map {
                flex: 1;
                width: 100%;
            }
        }
    }

    .pc-right {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        flex: 1;

        .part-list {
            height: 100%;
        }

        .right-list {
            height: calc(50% - 10px);
        }

        .right-map {
            height: calc(50% - 10px);
        }

        .part-world {
            height: 100%;
            display: flex;
            flex-direction: column;

            .world-map {
                height: 50%;
            }

            .world-bar {
                flex: 1;
            }
        }
    }
}
</style>
