/**
 * Logger: example
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
const Logger = require("./../modules/logger"); // in your project use: require("@ptkdev/logger");
const logger = new Logger();

logger.info("your info message", "your tag");
logger.warning("your warning message", "your tag");
logger.error("your error message", "your tag");
logger.debug("your debug message", "your tag");
logger.sponsor("your sponsor message", "your tag");
logger.stackoverflow("your stackoverflow message", "your tag");
logger.docs("your docs message", "https://docs.yoursite.com", "your tag");