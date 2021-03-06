import Vue from 'vue'
import {
  isEqual,
  get
} from 'lodash'

import {
  set_filter,
  unset_filter
} from './pages/controls/filters/controller'
import CONFIG from 'config/common'


export default {
  namespaced: true,
  state: {
    ui: {
      show_filters: false,
    },
    last_id: null, // ObjectID of most recently synced response, should be kept in store for persistence
    filter: null,
    map_options: {
      show_response_points: true,
      selected_layer: 'normalised_risk'
    },
    responses_last_updated_at: null,
    dashboard_options: {
      // TODO: @config Extract default temporal_aggregation_level
      temporal_aggregation_level: CONFIG.applets.irs_monitor.defaults.temporal_aggregation_level,
      spatial_aggregation_level: null,
      limit_to_plan: true,
      limit_to: '',
      season_start_date: ''
    },

    // Probably data
    filters: [],
    guess_selection_ids: {} //Is this used?
  },
  mutations: {
    // clear storage (called by meta store)
    clear_data_storage: (state) => {
      state.responses_last_updated_at = null
      state.filters = []
      state.last_id = null
    },
    update_responses_last_updated_at: (state) => {
      state.responses_last_updated_at = new Date
    },

    set_filter: (state, {
      filter_name,
      filter_object
    }) => {
      const new_filters = set_filter(state.filters, filter_name, filter_object)
      state.filters = new_filters
    },
    add_filter: (state, field_filter) => {

      const filter_present = state.filters.some(f => isEqual(f, field_filter))
      if (filter_present) return

      // we replace temporal filters with the same comparator
      if (field_filter.name === 'recorded_on') {
        const filter_index = state.filters.findIndex(f => isEqual(f.name, field_filter.name) && isEqual(f.comparator, field_filter.comparator))
        if (filter_index >= 0) {
          state.filters.splice(filter_index, 1, field_filter)
          return
        }
      }

      state.filters.push(field_filter)
    },
    remove_filter: (state, field_filter) => {
      const index = state.filters.findIndex(filter => isEqual(filter, field_filter))
      state.filters.splice(index, 1)
    },
    set_ui: (state, ui) => {
      state.ui = ui
    },
    set_dashboard_options: (state, options) => {
      state.dashboard_options = options
    },
    set_dashboard_option: (state, {
      key,
      value
    }) => {
      Vue.set(state.dashboard_options, key, value)
    },
    set_selected_layer(state, selected_layer) {
      state.map_options.selected_layer = selected_layer
    },
    set_show_response_points(state, show_response_points) {
      state.map_options.show_response_points = show_response_points
    },
    set_last_id(state, last_id) {
      state.last_id = last_id
    }
  },
}
