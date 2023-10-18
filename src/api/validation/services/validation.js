'use strict';

/**
 * validation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::validation.validation');
