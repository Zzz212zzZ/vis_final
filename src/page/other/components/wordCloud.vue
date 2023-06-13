<template>
    <div :id="id"></div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud';


export default {


    name: 'WordCloud',
    props: ['id', 'extent', 'options'],



    methods: {
        initMap() {

            const element = document.getElementById(this.id);
            if (!element) {
                console.error(`Element with id ${this.id} does not exist.`);
                return;
            }
            const myChart = echarts.init(element);
            console.log(myChart)
            var data = [];
            for (let i = 0; i < 10; ++i) {
                data.push({
                    name: (i % 2 ? 'WordCloud' : 'WWWWWWWWWWordCloud') + i,
                    value: (30 - i) * (30 - i)
                });
            }

            var option = {
                // backgroundColor: '#fff', // canvas背景颜色
                // canvas标题配置项
                tooltip: {},
                series: [

                    {
                        type: 'wordCloud',
                        // left: '-5%',                 // X轴偏移量
                        // top: '20%',                  // Y轴偏移量
                        width: '80%',               // canvas宽度大小
                        height: '80%',              // canvas高度大小
                        sizeRange: [12, 50],         //  词典字体大小范围配置
                        rotationRange: [0, 20],       // 词典字体旋转角度配置，默认不旋转
                        gridSize: 15,                // 词典字体间距配置
                        layoutAnimation: true,       // 为false词典过度会阻塞
                        textStyle: {                 // 词典样式配置
                            normal: {
                                color() {
                                    // 颜色随机渐变
                                    let colors = ['#fe9a8bb3', '#fe9a8bb3', '#fe9a8b03', '#9E87FFb3', '#9E87FFb3', '#9E87FFb3', '#fe9a8bb3', '#fe9a8bb3', '#fe9a8bb3', '#73DDFF', '#58D5FF']
                                    return colors[parseInt(Math.random() * 10)]
                                }
                            }
                        },
                        // 渲染词典数据
                        shape: 'square',
                        data: [
                            { value: '100', name: '新冠疫情' },
                            { value: '90', name: '防疫工作' },
                            { value: '80', name: '口罩' },
                            { value: '70', name: '社区防控' },
                            { value: '30', name: '社区防控' },
                            { value: '60', name: '疫苗接种' },
                            { value: '50', name: '医护人员' },
                            { value: '45', name: '隔离' },
                            { value: '40', name: '核酸检测' },
                            { value: '35', name: '公共卫生' },
                            { value: '30', name: '疫情防控措施' },
                            { value: '20', name: '社会团结' },
                            { value: '55', name: '志愿者' },
                            { value: '60', name: '科研攻关' },
                            { value: '20', name: '在线教育' },
                            { value: '15', name: '居家办公' },
                            { value: '60', name: '科研攻关' },
                            { value: '9', name: '疫情数据' },
                            { value: '8', name: '社会责任' },
                            { value: '7', name: '公共卫生应急' },
                            { value: '6', name: '疫情通报' },
                            { value: '5', name: '健康码' },
                            { value: '4', name: '社会团结' },
                            { value: '30', name: '抗疫英雄' },
                            { value: '10', name: '健康码' },
                            { value: '9', name: '社会团结' },
                            { value: '8', name: '抗疫英雄' },
                            { value: '7', name: '疫情更新' },
                            { value: '6', name: '防护知识' },
                            { value: '5', name: '健康建议' },
                            { value: '4', name: '疫情支持' },
                            { value: '3', name: '疫情援助' },
                            { value: '2', name: '防疫政策' },
                            { value: '1', name: '疫情影响' },
                            { value: '75', name: '医护人员' },
                            { value: '70', name: '隔离' },
                            { value: '65', name: '核酸检测' },
                            { value: '60', name: '公共卫生' },
                            { value: '55', name: '疫情防控措施' },
                            { value: '50', name: '志愿者' },
                            { value: '45', name: '在线教育' },
                            { value: '40', name: '居家办公' },
                            { value: '35', name: '科研攻关' },
                            { value: '30', name: '疫情数据' },
                        ]

                    }]
            };

            console.log(data)
            myChart.setOption(option);

        }
    },


    mounted() {


        this.initMap();
    }
}
</script>




<style lang="less" scoped>
//设置容器的宽高
#myWordCloud {
    width: 100%;
    height: 100%;
}
</style>