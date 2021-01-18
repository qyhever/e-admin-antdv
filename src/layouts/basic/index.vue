<template>
  <section
    class="basic-layout header-fixed slidebar-fixed tag-fixed"
    :class="{
      mobile,
      collapsed,
      'hidden-tags-nav': !tagsNavVisible
    }"
  >
    <SlideBar></SlideBar>
    <div class="layout-content">
      <HeaderBar></HeaderBar>
      <TagsNav></TagsNav>
      <main class="main">
        <router-view/>
      </main>
      <FooterBar class="footer"></FooterBar>
    </div>
    <BackTop />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderBar from './headerbar'
import SlideBar from './slidebar'
import TagsNav from './tags-nav'
import FooterBar from '@/components/footerbar'
import BackTop from './back-top'
import { isMobile } from '@/utils/system'
import './index.less'
export default {
  name: 'BasicLayout',
  components: {
    HeaderBar,
    SlideBar,
    TagsNav,
    FooterBar,
    BackTop
  },
  data() {
    return {
      mobile: false
    }
  },
  computed: {
    ...mapGetters(['collapsed', 'tagsNavVisible'])
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      const val = isMobile()
      this.mobile = val
      this.$store.commit('app/TOGGLE_SLIDE_BAR', val)
    }
  }
}
</script>
