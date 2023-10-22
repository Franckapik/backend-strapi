'use strict';

/**
 * progression service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::progression.progression');
