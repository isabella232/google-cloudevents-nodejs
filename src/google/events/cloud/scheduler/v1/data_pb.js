// source: google/events/cloud/scheduler/v1/data.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.events.cloud.scheduler.v1.SchedulerJobData', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.events.cloud.scheduler.v1.SchedulerJobData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.events.cloud.scheduler.v1.SchedulerJobData.displayName = 'proto.google.events.cloud.scheduler.v1.SchedulerJobData';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData.prototype.toObject = function(opt_includeInstance) {
  return proto.google.events.cloud.scheduler.v1.SchedulerJobData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.events.cloud.scheduler.v1.SchedulerJobData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData.toObject = function(includeInstance, msg) {
  var f, obj = {
    customData: msg.getCustomData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.events.cloud.scheduler.v1.SchedulerJobData}
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.events.cloud.scheduler.v1.SchedulerJobData;
  return proto.google.events.cloud.scheduler.v1.SchedulerJobData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.events.cloud.scheduler.v1.SchedulerJobData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.events.cloud.scheduler.v1.SchedulerJobData}
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCustomData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.events.cloud.scheduler.v1.SchedulerJobData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.events.cloud.scheduler.v1.SchedulerJobData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes custom_data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData.prototype.getCustomData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes custom_data = 1;
 * This is a type-conversion wrapper around `getCustomData()`
 * @return {string}
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData.prototype.getCustomData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCustomData()));
};


/**
 * optional bytes custom_data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCustomData()`
 * @return {!Uint8Array}
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData.prototype.getCustomData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCustomData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.events.cloud.scheduler.v1.SchedulerJobData} returns this
 */
proto.google.events.cloud.scheduler.v1.SchedulerJobData.prototype.setCustomData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


goog.object.extend(exports, proto.google.events.cloud.scheduler.v1);
