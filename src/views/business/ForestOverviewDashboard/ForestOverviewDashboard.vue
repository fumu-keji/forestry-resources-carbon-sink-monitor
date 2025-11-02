<template>
  <div id="page_1" class="page_1">
    <normal-component id="normal_1" ref="normal_1" class="normal_1">
      <normal-component id="normal_2" ref="normal_2" class="normal_2">
        <normal-component id="normal_3" ref="normal_3" class="normal_3">
          <text-component
            id="text_1"
            ref="text_1"
            class="text_1"
            letterSpacing="6"
            text=" 林业资源与碳汇监测系统 "
          />
          <flex-component id="flex_1" ref="flex_1" class="flex_1">
            <text-component
              id="text_2"
              ref="text_2"
              class="text_2"
              rowAlign="center"
              text=" 全景视图 "
              @click="text2Click"
            />
            <text-component
              id="text_3"
              ref="text_3"
              class="text_3"
              rowAlign="center"
              text="智能核算 "
              @click="text3Click"
            />
          </flex-component>
          <flex-component id="flex_2" ref="flex_2" class="flex_2">
            <text-component
              id="text_4"
              ref="text_4"
              class="text_4"
              rowAlign="center"
              text="动态监管 "
              @click="text4Click"
            />
            <text-component
              id="text_5"
              ref="text_5"
              class="text_5"
              rowAlign="center"
              text="决策分析 "
              @click="text5Click"
            />
          </flex-component>
        </normal-component>
        <flex-component id="flex_3" ref="flex_3" class="flex_3">
          <normal-component id="normal_4" ref="normal_4" class="normal_4">
            <normal-component id="normal_5" ref="normal_5" class="normal_5">
              <text-component
                id="text_6"
                ref="text_6"
                class="text_6"
                letterSpacing="2"
                text=" 核心指标统计 "
              />
              <normal-component id="normal_6" ref="normal_6" class="normal_6">
                <flex-component id="flex_4" ref="flex_4" class="flex_4">
                  <flex-component id="flex_5" ref="flex_5" class="flex_5">
                    <image-component
                      id="image_1"
                      ref="image_1"
                      class="image_1"
                      fit=""
                      src="8319594141843494.png"
                    />
                    <flex-component id="flex_6" ref="flex_6" class="flex_6">
                      <text-component
                        id="text_7"
                        ref="text_7"
                        class="text_7"
                        text="森林总面积"
                      />
                      <text-component
                        id="text_8"
                        ref="text_8"
                        class="text_8"
                        text="1256.8万公顷 "
                      />
                    </flex-component>
                  </flex-component>
                  <flex-component id="flex_7" ref="flex_7" class="flex_7">
                    <image-component
                      id="image_2"
                      ref="image_2"
                      class="image_2"
                      fit=""
                      src="8319594141843494.png"
                    />
                    <flex-component id="flex_8" ref="flex_8" class="flex_8">
                      <text-component
                        id="text_9"
                        ref="text_9"
                        class="text_9"
                        text="总蓄积量"
                      />
                      <text-component
                        id="text_10"
                        ref="text_10"
                        class="text_10"
                        text="8.65亿立方米 "
                      />
                    </flex-component>
                  </flex-component>
                </flex-component>
                <flex-component id="flex_9" ref="flex_9" class="flex_9">
                  <flex-component id="flex_10" ref="flex_10" class="flex_10">
                    <image-component
                      id="image_3"
                      ref="image_3"
                      class="image_3"
                      fit=""
                      src="8319594141843494.png"
                    />
                    <flex-component id="flex_11" ref="flex_11" class="flex_11">
                      <text-component
                        id="text_11"
                        ref="text_11"
                        class="text_11"
                        text="总碳储量"
                      />
                      <text-component
                        id="text_12"
                        ref="text_12"
                        class="text_12"
                        text="4.32亿吨 "
                      />
                    </flex-component>
                  </flex-component>
                  <flex-component id="flex_12" ref="flex_12" class="flex_12">
                    <image-component
                      id="image_4"
                      ref="image_4"
                      class="image_4"
                      fit=""
                      src="8319594141843494.png"
                    />
                    <flex-component id="flex_13" ref="flex_13" class="flex_13">
                      <text-component
                        id="text_13"
                        ref="text_13"
                        class="text_13"
                        text="年碳汇量"
                      />
                      <text-component
                        id="text_14"
                        ref="text_14"
                        class="text_14"
                        text="1250万吨 "
                      />
                    </flex-component>
                  </flex-component>
                </flex-component>
              </normal-component>
            </normal-component>
            <normal-component id="normal_7" ref="normal_7" class="normal_7">
              <text-component
                id="text_15"
                ref="text_15"
                class="text_15"
                letterSpacing="2"
                text=" 监测网络状态 "
              />
              <flex-component id="flex_14" ref="flex_14" class="flex_14">
                <flex-component id="flex_15" ref="flex_15" class="flex_15">
                  <flex-component id="flex_16" ref="flex_16" class="flex_16">
                    <image-component
                      id="image_5"
                      ref="image_5"
                      class="image_5"
                      fit=""
                      src="8319594252992550.png"
                    />
                    <text-component
                      id="text_16"
                      ref="text_16"
                      class="text_16"
                      text="卫星监测"
                    />
                    <text-component
                      id="text_17"
                      ref="text_17"
                      class="text_17"
                      text="在线 "
                    />
                  </flex-component>
                  <flex-component id="flex_17" ref="flex_17" class="flex_17">
                    <image-component
                      id="image_6"
                      ref="image_6"
                      class="image_6"
                      fit=""
                      src="8319594252992550.png"
                    />
                    <text-component
                      id="text_18"
                      ref="text_18"
                      class="text_18"
                      text="无人机"
                    />
                    <text-component
                      id="text_19"
                      ref="text_19"
                      class="text_19"
                      text="85% "
                    />
                  </flex-component>
                </flex-component>
                <flex-component id="flex_18" ref="flex_18" class="flex_18">
                  <flex-component id="flex_19" ref="flex_19" class="flex_19">
                    <image-component
                      id="image_7"
                      ref="image_7"
                      class="image_7"
                      fit=""
                      src="8319594252992550.png"
                    />
                    <text-component
                      id="text_20"
                      ref="text_20"
                      class="text_20"
                      text="地面站"
                    />
                    <text-component
                      id="text_21"
                      ref="text_21"
                      class="text_21"
                      text="92% "
                    />
                  </flex-component>
                  <flex-component id="flex_20" ref="flex_20" class="flex_20">
                    <image-component
                      id="image_8"
                      ref="image_8"
                      class="image_8"
                      fit=""
                      src="8319594252992550.png"
                    />
                    <text-component
                      id="text_22"
                      ref="text_22"
                      class="text_22"
                      text="数据覆盖率"
                    />
                    <text-component
                      id="text_23"
                      ref="text_23"
                      class="text_23"
                      text="88% "
                    />
                  </flex-component>
                </flex-component>
              </flex-component>
            </normal-component>
            <normal-component id="normal_8" ref="normal_8" class="normal_8">
              <text-component
                id="text_24"
                ref="text_24"
                class="text_24"
                letterSpacing="2"
                text=" 行政区资源排名 "
              />
              <custom-1 class="custom_1" />
            </normal-component>
          </normal-component>
          <flex-component id="flex_21" ref="flex_21" class="flex_21">
            <map-component
              id="map_1"
              class="map_1"
              ref="map_1"
              :mapAttribute="map1Mapattribute"
              :baseLayer="map1BaseLayer"
            />
            <normal-component id="normal_9" ref="normal_9" class="normal_9">
              <text-component
                id="text_25"
                ref="text_25"
                class="text_25"
                letterSpacing="2"
                text=" 碳汇密度分布 "
              />
              <custom-2 class="custom_2" />
            </normal-component>
          </flex-component>
          <normal-component id="normal_10" ref="normal_10" class="normal_10">
            <normal-component id="normal_11" ref="normal_11" class="normal_11">
              <text-component
                id="text_26"
                ref="text_26"
                class="text_26"
                letterSpacing="2"
                text=" 资源变化趋势 "
              />
              <custom-3 class="custom_3" />
            </normal-component>
            <normal-component id="normal_12" ref="normal_12" class="normal_12">
              <text-component
                id="text_27"
                ref="text_27"
                class="text_27"
                letterSpacing="2"
                text=" 碳汇增长曲线 "
              />
              <custom-4 class="custom_4" />
            </normal-component>
            <normal-component id="normal_13" ref="normal_13" class="normal_13">
              <text-component
                id="text_28"
                ref="text_28"
                class="text_28"
                letterSpacing="2"
                text=" 实时监测动态 "
              />
              <normal-component
                id="normal_14"
                ref="normal_14"
                class="normal_14"
              >
                <flex-component id="flex_22" ref="flex_22" class="flex_22">
                  <flex-component id="flex_23" ref="flex_23" class="flex_23">
                    <flex-component id="flex_24" ref="flex_24" class="flex_24">
                      <flex-component
                        id="flex_25"
                        ref="flex_25"
                        class="flex_25"
                      >
                        <text-component
                          id="text_29"
                          ref="text_29"
                          class="text_29"
                          text="森林覆盖率提升至65.2% "
                        />
                        <text-component
                          id="text_30"
                          ref="text_30"
                          class="text_30"
                          text="正常 "
                        />
                      </flex-component>
                    </flex-component>
                    <text-component
                      id="text_31"
                      ref="text_31"
                      class="text_31"
                      text=" 2025-01-15"
                    />
                  </flex-component>
                  <text-component
                    id="text_32"
                    ref="text_32"
                    class="text_32"
                    text="北方林区监测数据更新完成 "
                  />
                </flex-component>
                <flex-component id="flex_26" ref="flex_26" class="flex_26">
                  <flex-component id="flex_27" ref="flex_27" class="flex_27">
                    <flex-component id="flex_28" ref="flex_28" class="flex_28">
                      <flex-component
                        id="flex_29"
                        ref="flex_29"
                        class="flex_29"
                      >
                        <text-component
                          id="text_33"
                          ref="text_33"
                          class="text_33"
                          text="碳汇量同比增长12.5% "
                        />
                        <text-component
                          id="text_34"
                          ref="text_34"
                          class="text_34"
                          text="良好 "
                        />
                      </flex-component>
                    </flex-component>
                    <text-component
                      id="text_35"
                      ref="text_35"
                      class="text_35"
                      text=" 2025-01-14"
                    />
                  </flex-component>
                  <text-component
                    id="text_36"
                    ref="text_36"
                    class="text_36"
                    text="南方碳汇示范区建设进展顺利 "
                  />
                </flex-component>
                <flex-component id="flex_30" ref="flex_30" class="flex_30">
                  <flex-component id="flex_31" ref="flex_31" class="flex_31">
                    <flex-component id="flex_32" ref="flex_32" class="flex_32">
                      <flex-component
                        id="flex_33"
                        ref="flex_33"
                        class="flex_33"
                      >
                        <text-component
                          id="text_37"
                          ref="text_37"
                          class="text_37"
                          text="监测设备离线率超过阈值 "
                        />
                        <text-component
                          id="text_38"
                          ref="text_38"
                          class="text_38"
                          text="警告 "
                        />
                      </flex-component>
                    </flex-component>
                    <text-component
                      id="text_39"
                      ref="text_39"
                      class="text_39"
                      text=" 2025-01-13"
                    />
                  </flex-component>
                  <text-component
                    id="text_40"
                    ref="text_40"
                    class="text_40"
                    text="西部山区3个监测站需要维护 "
                  />
                </flex-component>
                <flex-component id="flex_34" ref="flex_34" class="flex_34">
                  <flex-component id="flex_35" ref="flex_35" class="flex_35">
                    <flex-component id="flex_36" ref="flex_36" class="flex_36">
                      <flex-component
                        id="flex_37"
                        ref="flex_37"
                        class="flex_37"
                      >
                        <text-component
                          id="text_41"
                          ref="text_41"
                          class="text_41"
                          text="新增造林面积达标 "
                        />
                        <text-component
                          id="text_42"
                          ref="text_42"
                          class="text_42"
                          text="完成 "
                        />
                      </flex-component>
                    </flex-component>
                    <text-component
                      id="text_43"
                      ref="text_43"
                      class="text_43"
                      text=" 2025-01-12"
                    />
                  </flex-component>
                  <text-component
                    id="text_44"
                    ref="text_44"
                    class="text_44"
                    text="年度造林任务完成率102% "
                  />
                </flex-component>
              </normal-component>
            </normal-component>
          </normal-component>
        </flex-component>
      </normal-component>
    </normal-component>
  </div>
</template>
<script>
import mixin from "./ForestOverviewDashboard";
import mixinConfig from "./ForestOverviewDashboardConfig";
import Custom4 from "./customChartComponent/Custom4.vue";
import Custom3 from "./customChartComponent/Custom3.vue";
import Custom2 from "./customChartComponent/Custom2.vue";
import Custom1 from "./customChartComponent/Custom1.vue";
export default {
  mixins: [mixin, mixinConfig],
  name: "ForestOverviewDashboard",
  components: {
    Custom4,
    Custom3,
    Custom2,
    Custom1,
  },
  data() {
    return {
      modelOption: {},
      map1BaseLayer: {
        terrainNoteUrl:
          "http://t1.tianditu.gov.cn/cta_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
        vectorBaseLayerName: "vec",
        terrainBaseUrl:
          "http://t1.tianditu.gov.cn/ter_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
        vectorNoteLayerName: "cva",
        imageBaseLayerName: "img",
        imageNoteUrl:
          "http://t1.tianditu.gov.cn/cia_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
        vectorBaseUrl:
          "http://t1.tianditu.gov.cn/vec_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
        imageNoteLayerName: "cia",
        terrainNoteLayerName: "cta",
        imageBaseUrl:
          "http://t1.tianditu.gov.cn/img_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
        terrainBaseLayerName: "ter",
        vectorNoteUrl:
          "http://t1.tianditu.gov.cn/cva_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
      },
      map1Mapattribute: {
        mapToggleAttr: {
          bottom: 5,
          show: true,
          right: 1,
        },
        defaultZoom: 10,
        maxZoom: 22,
        baseLayerSource: "mapWorld",
        toolBarAttr: {
          area: true,
          length: true,
          draw: true,
          right: 1,
          fullscreen: true,
          top: 5,
          position: true,
        },
        zoomAttr: {
          show: true,
          right: 1,
          top: 60,
        },
        minZoom: 2,
        suffix: "",
        showBaseLayer: true,
        staticImgUrl: "",
        scaleAttr: {
          bottom: 3,
          show: true,
          left: 35,
        },
        baseLayerToken: "03dd8495c94ffa92a3f1ffe4ed647be8",
        defaultCenterPoint: "114.300894,30.594360",
        coordinateAttr: {
          bottom: 5,
          show: true,
          left: 0,
        },
        projection: "EPSG:4490",
      },
    };
  },
  created() {},
  watch: {},
  mounted() {},
  methods: {
    /**
     * 跳转
     */
    text2Click() {
      // 当前页面跳转
      this.$router.push({ name: "ForestOverviewDashboard" });
    },

    /**
     * 跳转
     */
    text3Click() {
      // 当前页面跳转
      this.$router.push({ name: "CarbonAccountingDashboard" });
    },

    /**
     * 跳转
     */
    text4Click() {
      // 当前页面跳转
      this.$router.push({ name: "DynamicMonitoringDashboard" });
    },

    /**
     * 跳转
     */
    text5Click() {
      // 当前页面跳转
      this.$router.push({ name: "DecisionAnalysisDashboard" });
    },
  },
};
</script>
<style lang="less" scoped>
.page_1 {
  min-width: 1300px;
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  overflow: auto;
  .normal_1 {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    .normal_2 {
      background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594653548582.png");
      width: 100%;
      box-sizing: border-box;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
      .normal_3 {
        background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319593900671014.png");
        width: 100%;
        box-sizing: border-box;
        background-size: 100% 100%;
        position: relative;
        height: 92px;
        .text_1 {
          transform: translateX(-50%);
          color: #dafffd;
          top: 10px;
          left: 50%;
          display: flex;
          box-sizing: border-box;
          font-size: 40px;
          position: absolute;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
          font-weight: bold;
        }
        .flex_1 {
          align-items: center;
          top: 33px;
          flex-wrap: nowrap;
          left: 20px;
          display: flex;
          width: 450px;
          box-sizing: border-box;
          position: absolute;
          justify-content: space-around;
          .text_2 {
            cursor: pointer;
            color: #fff;
            background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594003431462.png");
            display: flex;
            box-sizing: border-box;
            width: 114px;
            font-size: 14px;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
            height: 34px;
          }
          .text_3 {
            cursor: pointer;
            color: #fff;
            background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594013917222.png");
            display: flex;
            box-sizing: border-box;
            width: 114px;
            font-size: 14px;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
            height: 34px;
          }
        }
        .flex_2 {
          align-items: center;
          top: 33px;
          flex-wrap: nowrap;
          display: flex;
          width: 450px;
          box-sizing: border-box;
          right: 20px;
          position: absolute;
          justify-content: space-around;
          .text_4 {
            cursor: pointer;
            color: #fff;
            background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594013917222.png");
            display: flex;
            box-sizing: border-box;
            width: 114px;
            font-size: 14px;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
            height: 34px;
          }
          .text_5 {
            cursor: pointer;
            color: #fff;
            background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594013917222.png");
            display: flex;
            box-sizing: border-box;
            width: 114px;
            font-size: 14px;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
            height: 34px;
          }
        }
      }
      .flex_3 {
        padding: 5px 14px 14px;
        flex-wrap: nowrap;
        display: flex;
        width: 100%;
        box-sizing: border-box;
        justify-content: flex-start;
        height: calc(100% - 92px);
        .normal_4 {
          width: 418px;
          box-sizing: border-box;
          height: 100%;
          .normal_5 {
            width: 100%;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_6 {
              padding: 0px 0px 15px 35px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594099900454.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 15px;
              width: 100%;
              font-size: 18px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 35px;
              font-weight: bold;
              height: 48px;
            }
            .normal_6 {
              width: 100%;
              padding: 15px 15px 0 15px;
              box-sizing: border-box;
              height: calc(100% - 48px);
              .flex_4 {
                flex-wrap: nowrap;
                display: flex;
                gap: 15px;
                width: 100%;
                box-sizing: border-box;
                justify-content: flex-start;
                height: calc(33.333% - 10px);
                .flex_5 {
                  flex-wrap: nowrap;
                  flex: 1;
                  display: flex;
                  box-sizing: border-box;
                  justify-content: flex-start;
                  height: 100%;
                  .image_1 {
                    margin-right: 10px;
                    margin: 0px 10px 0px 0px;
                    box-sizing: border-box;
                    height: 100%;
                  }
                  .flex_6 {
                    padding: 0px 0px 0px 10px;
                    flex-wrap: wrap;
                    background: linear-gradient(
                      180deg,
                      rgba(57, 173, 147, 0) 0%,
                      rgba(57, 173, 147, 0.1) 100%
                    );
                    flex: 1;
                    display: flex;
                    box-sizing: border-box;
                    padding-left: 10px;
                    justify-content: flex-start;
                    .text_7 {
                      width: 100%;
                      font-size: 14px;
                      box-sizing: border-box;
                      color: #fff;
                      display: flex;
                    }
                    .text_8 {
                      color: #fff;
                      display: flex;
                      width: 100%;
                      box-sizing: border-box;
                      font-size: 16px;
                      font-weight: bold;
                    }
                  }
                }
                .flex_7 {
                  flex-wrap: nowrap;
                  flex: 1;
                  display: flex;
                  box-sizing: border-box;
                  justify-content: flex-start;
                  height: 100%;
                  .image_2 {
                    margin-right: 10px;
                    margin: 0px 10px 0px 0px;
                    box-sizing: border-box;
                    height: 100%;
                  }
                  .flex_8 {
                    padding: 0px 0px 0px 10px;
                    flex-wrap: wrap;
                    background: linear-gradient(
                      180deg,
                      rgba(57, 173, 147, 0) 0%,
                      rgba(57, 173, 147, 0.1) 100%
                    );
                    flex: 1;
                    display: flex;
                    box-sizing: border-box;
                    padding-left: 10px;
                    justify-content: flex-start;
                    .text_9 {
                      width: 100%;
                      font-size: 14px;
                      box-sizing: border-box;
                      color: #fff;
                      display: flex;
                    }
                    .text_10 {
                      color: #fff;
                      display: flex;
                      width: 100%;
                      box-sizing: border-box;
                      font-size: 16px;
                      font-weight: bold;
                    }
                  }
                }
              }
              .flex_9 {
                margin: 15px 0;
                flex-wrap: nowrap;
                display: flex;
                gap: 15px;
                width: 100%;
                box-sizing: border-box;
                justify-content: flex-start;
                height: calc(33.333% - 10px);
                .flex_10 {
                  flex-wrap: nowrap;
                  flex: 1;
                  display: flex;
                  box-sizing: border-box;
                  justify-content: flex-start;
                  height: 100%;
                  .image_3 {
                    margin-right: 10px;
                    margin: 0px 10px 0px 0px;
                    box-sizing: border-box;
                    height: 100%;
                  }
                  .flex_11 {
                    padding: 0px 0px 0px 10px;
                    flex-wrap: wrap;
                    background: linear-gradient(
                      180deg,
                      rgba(57, 173, 147, 0) 0%,
                      rgba(57, 173, 147, 0.1) 100%
                    );
                    flex: 1;
                    display: flex;
                    box-sizing: border-box;
                    padding-left: 10px;
                    justify-content: flex-start;
                    .text_11 {
                      width: 100%;
                      font-size: 14px;
                      box-sizing: border-box;
                      color: #fff;
                      display: flex;
                    }
                    .text_12 {
                      color: #fff;
                      display: flex;
                      width: 100%;
                      box-sizing: border-box;
                      font-size: 16px;
                      font-weight: bold;
                    }
                  }
                }
                .flex_12 {
                  flex-wrap: nowrap;
                  flex: 1;
                  display: flex;
                  box-sizing: border-box;
                  justify-content: flex-start;
                  height: 100%;
                  .image_4 {
                    margin-right: 10px;
                    margin: 0px 10px 0px 0px;
                    box-sizing: border-box;
                    height: 100%;
                  }
                  .flex_13 {
                    padding: 0px 0px 0px 10px;
                    flex-wrap: wrap;
                    background: linear-gradient(
                      180deg,
                      rgba(57, 173, 147, 0) 0%,
                      rgba(57, 173, 147, 0.1) 100%
                    );
                    flex: 1;
                    display: flex;
                    box-sizing: border-box;
                    padding-left: 10px;
                    justify-content: flex-start;
                    .text_13 {
                      width: 100%;
                      font-size: 14px;
                      box-sizing: border-box;
                      color: #fff;
                      display: flex;
                    }
                    .text_14 {
                      color: #fff;
                      display: flex;
                      width: 100%;
                      box-sizing: border-box;
                      font-size: 16px;
                      font-weight: bold;
                    }
                  }
                }
              }
            }
          }
          .normal_7 {
            width: 100%;
            margin: 15px 0;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_15 {
              padding: 0px 0px 15px 35px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594099900454.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 15px;
              width: 100%;
              font-size: 18px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 35px;
              font-weight: bold;
              height: 48px;
            }
            .flex_14 {
              padding: 15px 15px 0 15px;
              flex-wrap: nowrap;
              flex-direction: column;
              display: flex;
              gap: 15px;
              width: 100%;
              box-sizing: border-box;
              justify-content: flex-start;
              height: calc(100% - 48px);
              .flex_15 {
                flex-wrap: nowrap;
                flex: 1;
                display: flex;
                gap: 15px;
                width: 100%;
                box-sizing: border-box;
                justify-content: flex-start;
                .flex_16 {
                  align-items: center;
                  flex-wrap: nowrap;
                  background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594261381158.png");
                  flex: 1;
                  display: flex;
                  box-sizing: border-box;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  justify-content: space-around;
                  height: 100%;
                  .image_5 {
                    margin-right: 10px;
                    width: 40px;
                    margin: 0px 10px 0px 0px;
                    box-sizing: border-box;
                    height: 40px;
                  }
                  .text_16 {
                    font-size: 14px;
                    box-sizing: border-box;
                    color: #fff;
                    display: flex;
                  }
                  .text_17 {
                    font-size: 16px;
                    box-sizing: border-box;
                    color: #68ffe6;
                    display: flex;
                  }
                }
                .flex_17 {
                  align-items: center;
                  flex-wrap: nowrap;
                  background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594261381158.png");
                  flex: 1;
                  display: flex;
                  box-sizing: border-box;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  justify-content: space-around;
                  height: 100%;
                  .image_6 {
                    margin-right: 10px;
                    width: 40px;
                    margin: 0px 10px 0px 0px;
                    box-sizing: border-box;
                    height: 40px;
                  }
                  .text_18 {
                    font-size: 14px;
                    box-sizing: border-box;
                    color: #fff;
                    display: flex;
                  }
                  .text_19 {
                    font-size: 16px;
                    box-sizing: border-box;
                    color: #68ffe6;
                    display: flex;
                  }
                }
              }
              .flex_18 {
                flex-wrap: nowrap;
                flex: 1;
                display: flex;
                gap: 15px;
                width: 100%;
                box-sizing: border-box;
                justify-content: flex-start;
                .flex_19 {
                  align-items: center;
                  flex-wrap: nowrap;
                  background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594261381158.png");
                  flex: 1;
                  display: flex;
                  box-sizing: border-box;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  justify-content: space-around;
                  height: 100%;
                  .image_7 {
                    margin-right: 10px;
                    width: 40px;
                    margin: 0px 10px 0px 0px;
                    box-sizing: border-box;
                    height: 40px;
                  }
                  .text_20 {
                    font-size: 14px;
                    box-sizing: border-box;
                    color: #fff;
                    display: flex;
                  }
                  .text_21 {
                    font-size: 16px;
                    box-sizing: border-box;
                    color: #68ffe6;
                    display: flex;
                  }
                }
                .flex_20 {
                  align-items: center;
                  flex-wrap: nowrap;
                  background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594261381158.png");
                  flex: 1;
                  display: flex;
                  box-sizing: border-box;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  justify-content: space-around;
                  height: 100%;
                  .image_8 {
                    margin-right: 10px;
                    width: 40px;
                    margin: 0px 10px 0px 0px;
                    box-sizing: border-box;
                    height: 40px;
                  }
                  .text_22 {
                    font-size: 14px;
                    box-sizing: border-box;
                    color: #fff;
                    display: flex;
                  }
                  .text_23 {
                    font-size: 16px;
                    box-sizing: border-box;
                    color: #68ffe6;
                    display: flex;
                  }
                }
              }
            }
          }
          .normal_8 {
            width: 100%;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_24 {
              padding: 0px 0px 15px 35px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594099900454.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 15px;
              width: 100%;
              font-size: 18px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 35px;
              font-weight: bold;
              height: 48px;
            }
            .custom_1 {
              width: 100%;
              box-sizing: border-box;
              height: calc(100% - 48px);
            }
          }
        }
        .flex_21 {
          padding: 10px 0px 0px 0px;
          margin: 0 17px;
          flex-wrap: nowrap;
          flex-direction: column;
          display: flex;
          gap: 15px;
          width: calc(100% - 870px);
          box-sizing: border-box;
          padding-top: 10px;
          justify-content: flex-start;
          height: 100%;
          .map_1 {
            width: 100%;
            box-sizing: border-box;
            position: relative;
            flex: 2;
          }
          .normal_9 {
            width: 100%;
            box-sizing: border-box;
            flex: 1;
            .text_25 {
              padding: 0px 0px 15px 35px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594374627366.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 15px;
              width: 100%;
              font-size: 18px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 35px;
              font-weight: bold;
              height: 48px;
            }
            .custom_2 {
              width: 100%;
              box-sizing: border-box;
              height: calc(100% - 48px);
            }
          }
        }
        .normal_10 {
          width: 418px;
          box-sizing: border-box;
          height: 100%;
          .normal_11 {
            width: 100%;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_26 {
              padding: 0px 0px 15px 35px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594099900454.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 15px;
              width: 100%;
              font-size: 18px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 35px;
              font-weight: bold;
              height: 48px;
            }
            .custom_3 {
              width: 100%;
              box-sizing: border-box;
              height: calc(100% - 48px);
            }
          }
          .normal_12 {
            width: 100%;
            margin: 15px 0;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_27 {
              padding: 0px 0px 15px 35px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594099900454.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 15px;
              width: 100%;
              font-size: 18px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 35px;
              font-weight: bold;
              height: 48px;
            }
            .custom_4 {
              width: 100%;
              box-sizing: border-box;
              height: calc(100% - 48px);
            }
          }
          .normal_13 {
            width: 100%;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_28 {
              padding: 0px 0px 15px 35px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594099900454.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 15px;
              width: 100%;
              font-size: 18px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 35px;
              font-weight: bold;
              height: 48px;
            }
            .normal_14 {
              width: 100%;
              padding: 15px 15px 0 15px;
              box-sizing: border-box;
              overflow-y: auto;
              height: calc(100% - 48px);
              .flex_22 {
                padding: 0px 0px 0px 10px;
                margin: 0px 0px 8px 0px;
                background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594422861862.png");
                display: flex;
                box-sizing: border-box;
                justify-content: flex-start;
                flex-wrap: wrap;
                width: 100%;
                background-size: 100% 100%;
                margin-bottom: 8px;
                background-position: center;
                background-repeat: no-repeat;
                padding-left: 10px;
                height: 50px;
                .flex_23 {
                  align-items: center;
                  flex-wrap: nowrap;
                  display: flex;
                  width: 100%;
                  box-sizing: border-box;
                  justify-content: flex-start;
                  .flex_24 {
                    align-items: center;
                    flex-wrap: nowrap;
                    display: flex;
                    width: calc(100% - 100px);
                    box-sizing: border-box;
                    justify-content: flex-start;
                    .flex_25 {
                      box-sizing: border-box;
                      align-items: center;
                      flex-wrap: nowrap;
                      justify-content: flex-start;
                      display: flex;
                      .text_29 {
                        font-size: 14px;
                        box-sizing: border-box;
                        color: #fff;
                        display: flex;
                      }
                      .text_30 {
                        box-shadow: inset 0px 0px 16px 0px #39ad93;
                        padding: 0 5px;
                        margin: 0px 0px 0px 10px;
                        color: #e9e3e3;
                        border-radius: 4px 4px 4px 4px;
                        background: #057165;
                        display: flex;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin-left: 10px;
                      }
                    }
                  }
                  .text_31 {
                    font-size: 14px;
                    box-sizing: border-box;
                    color: #fff;
                    display: flex;
                    max-width: 100px;
                  }
                }
                .text_32 {
                  width: 100%;
                  font-size: 14px;
                  box-sizing: border-box;
                  color: #fff;
                  display: flex;
                }
              }
              .flex_26 {
                padding: 0px 0px 0px 10px;
                margin: 0px 0px 8px 0px;
                background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594422861862.png");
                display: flex;
                box-sizing: border-box;
                justify-content: flex-start;
                flex-wrap: wrap;
                width: 100%;
                background-size: 100% 100%;
                margin-bottom: 8px;
                background-position: center;
                background-repeat: no-repeat;
                padding-left: 10px;
                height: 50px;
                .flex_27 {
                  align-items: center;
                  flex-wrap: nowrap;
                  display: flex;
                  width: 100%;
                  box-sizing: border-box;
                  justify-content: flex-start;
                  .flex_28 {
                    align-items: center;
                    flex-wrap: nowrap;
                    display: flex;
                    width: calc(100% - 100px);
                    box-sizing: border-box;
                    justify-content: flex-start;
                    .flex_29 {
                      box-sizing: border-box;
                      align-items: center;
                      flex-wrap: nowrap;
                      justify-content: flex-start;
                      display: flex;
                      .text_33 {
                        font-size: 14px;
                        box-sizing: border-box;
                        color: #fff;
                        display: flex;
                      }
                      .text_34 {
                        box-shadow: inset 0px 0px 16px 0px #39ad93;
                        padding: 0 5px;
                        margin: 0px 0px 0px 10px;
                        color: #e9e3e3;
                        border-radius: 4px 4px 4px 4px;
                        background: #057165;
                        display: flex;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin-left: 10px;
                      }
                    }
                  }
                  .text_35 {
                    font-size: 14px;
                    box-sizing: border-box;
                    color: #fff;
                    display: flex;
                    max-width: 100px;
                  }
                }
                .text_36 {
                  width: 100%;
                  font-size: 14px;
                  box-sizing: border-box;
                  color: #fff;
                  display: flex;
                }
              }
              .flex_30 {
                padding: 0px 0px 0px 10px;
                margin: 0px 0px 8px 0px;
                background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594422861862.png");
                display: flex;
                box-sizing: border-box;
                justify-content: flex-start;
                flex-wrap: wrap;
                width: 100%;
                background-size: 100% 100%;
                margin-bottom: 8px;
                background-position: center;
                background-repeat: no-repeat;
                padding-left: 10px;
                height: 50px;
                .flex_31 {
                  align-items: center;
                  flex-wrap: nowrap;
                  display: flex;
                  width: 100%;
                  box-sizing: border-box;
                  justify-content: flex-start;
                  .flex_32 {
                    align-items: center;
                    flex-wrap: nowrap;
                    display: flex;
                    width: calc(100% - 100px);
                    box-sizing: border-box;
                    justify-content: flex-start;
                    .flex_33 {
                      box-sizing: border-box;
                      align-items: center;
                      flex-wrap: nowrap;
                      justify-content: flex-start;
                      display: flex;
                      .text_37 {
                        font-size: 14px;
                        box-sizing: border-box;
                        color: #fff;
                        display: flex;
                      }
                      .text_38 {
                        box-shadow: inset 0px 0px 16px 0px #ff7a7a;
                        padding: 0 5px;
                        margin: 0px 0px 0px 10px;
                        color: #e9e3e3;
                        border-radius: 4px 4px 4px 4px;
                        background: #260808;
                        display: flex;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin-left: 10px;
                      }
                    }
                  }
                  .text_39 {
                    font-size: 14px;
                    box-sizing: border-box;
                    color: #fff;
                    display: flex;
                    max-width: 100px;
                  }
                }
                .text_40 {
                  width: 100%;
                  font-size: 14px;
                  box-sizing: border-box;
                  color: #fff;
                  display: flex;
                }
              }
              .flex_34 {
                padding: 0px 0px 0px 10px;
                margin: 0px 0px 8px 0px;
                background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594422861862.png");
                display: flex;
                box-sizing: border-box;
                justify-content: flex-start;
                flex-wrap: wrap;
                width: 100%;
                background-size: 100% 100%;
                margin-bottom: 8px;
                background-position: center;
                background-repeat: no-repeat;
                padding-left: 10px;
                height: 50px;
                .flex_35 {
                  align-items: center;
                  flex-wrap: nowrap;
                  display: flex;
                  width: 100%;
                  box-sizing: border-box;
                  justify-content: flex-start;
                  .flex_36 {
                    align-items: center;
                    flex-wrap: nowrap;
                    display: flex;
                    width: calc(100% - 100px);
                    box-sizing: border-box;
                    justify-content: flex-start;
                    .flex_37 {
                      box-sizing: border-box;
                      align-items: center;
                      flex-wrap: nowrap;
                      justify-content: flex-start;
                      display: flex;
                      .text_41 {
                        font-size: 14px;
                        box-sizing: border-box;
                        color: #fff;
                        display: flex;
                      }
                      .text_42 {
                        box-shadow: inset 0px 0px 16px 0px #39ad93;
                        padding: 0 5px;
                        margin: 0px 0px 0px 10px;
                        color: #e9e3e3;
                        border-radius: 4px 4px 4px 4px;
                        background: #057165;
                        display: flex;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin-left: 10px;
                      }
                    }
                  }
                  .text_43 {
                    font-size: 14px;
                    box-sizing: border-box;
                    color: #fff;
                    display: flex;
                    max-width: 100px;
                  }
                }
                .text_44 {
                  width: 100%;
                  font-size: 14px;
                  box-sizing: border-box;
                  color: #fff;
                  display: flex;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
