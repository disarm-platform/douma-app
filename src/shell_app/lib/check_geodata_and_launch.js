import {configure_spatial_helpers} from 'lib/instance_data/spatial_hierarchy_helper'
import {launch_main_app} from 'config/launch_main_app'
import {geodata_required} from 'shell_app/models/geodata/controller'
import {hydrate_geodata_cache_from_idb} from 'lib/models/geodata/local.geodata_store'
import {geodata_in_cache_and_valid} from 'lib/models/geodata/geodata.valid'

async function launch_from_instance_config_id(store, router) {
  const instance_config = store.state.instance_config
  const user = store.state.user
  const personalised_instance_id = store.state.personalised_instance_id

  if (!geodata_required(user.permissions, instance_config.instance_id)) {
    return launch_main_app({instance_config, user, personalised_instance_id})
  } else {
    configure_spatial_helpers(instance_config)

    await hydrate_geodata_cache_from_idb(instance_config.instance_id)
    const valid = geodata_in_cache_and_valid()

    if (valid) {
      return launch_main_app({instance_config, user, personalised_instance_id})
    } else {
      return router.push('/geodata')
    }
  }
}

export {launch_from_instance_config_id}