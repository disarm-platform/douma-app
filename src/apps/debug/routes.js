import debug from './pages/debug.vue'
import location from './pages/location_debug.vue'
import building from './pages/building_debug.vue'
import fake_data from './pages/fake_data_debug.vue'
import validate_data from './pages/validate_data.vue'
import instance_config_view from './pages/instance_config_view.vue'

export default [
  {
    path: '/debug',
    component: debug,
    name: 'debug',
    meta: {
      can: 'read debug',
      fail: '/meta/home'
    }
  }, {
    path: '/debug/location',
    component: location,
    name: 'debug:location',
    meta: {
      can: 'read debug',
      fail: '/meta/home'
    }
  }, {
    path: '/debug/building',
    component: building,
    name: 'debug:building',
    meta: {
      can: 'read debug',
      fail: '/meta/home'
    }
  },  {
    path: '/debug/fake_data',
    component: fake_data,
    name: 'debug:fake_data',
    meta: {
      can: 'read debug',
      fail: '/meta/home'
    }
  }, {
    path: '/debug/validate_data',
    component: validate_data,
    name: 'debug:validate_data',
    meta: {
      can: 'read debug',
      fail: '/meta/home'
    }
  }, {
    path: '/debug/instance_config_view',
    component: instance_config_view,
    name: 'debug:instance_config_view',
    meta: {
      can: 'read debug',
      fail: '/meta/home'
    }
  }
]