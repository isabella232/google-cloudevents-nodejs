const {
  quicktype,
  InputData,
  jsonInputForTargetLanguage,
  JSONSchemaInput,
  JSONSchemaStore,
} = require("quicktype-core");

async function quicktypeJSONSchema(targetLanguage: string, typeName: string, jsonSchemaString: string) {
  const schemaInput = new JSONSchemaInput(new JSONSchemaStore());

  // We could add multiple schemas for multiple types,
  // but here we're just making one type from JSON schema.
  await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });

  const inputData = new InputData();
  inputData.addInput(schemaInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
  });
}

async function main() {
  const json = `
  {
    "$schema": "http://json-schema.org/schema",
    "title": "google.events.cloud.audit.v1",
    "goPackage": "auditv1",
    "properties": {
        "AuditLogWrittenEvent": {
            "description": "This event is triggered when a new audit log entry is written.",
            "type": "object",
            "definitions": {
                "MonitoredResource": {
                    "type": "object",
                    "properties": {
                        "type": {
                            "type": "string"
                        },
                        "labels": {
                            "type": "object"
                        }
                    }
                },
                "ResourceLocation": {
                    "type": "object",
                    "properties": {
                        "current_locations": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "original_locations": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                },
                "Status": {
                    "type": "object",
                    "properties": {
                        "code": {
                            "type": "integer"
                        },
                        "message": {
                            "type": "string"
                        },
                        "details": {}
                    }
                },
                "ServiceAccountDelegationInfo": {
                    "type": "object",
                    "oneOf": [
                        {
                            "properties": {
                                "principal_email": {
                                    "type": "string"
                                },
                                "service_metadata": {
                                    "type": "object"
                                }
                            }
                        },
                        {
                            "properties": {
                                "third_party_claims": {
                                    "type": "object"
                                }
                            }
                        }
                    ]
                },
                "AuthenticationInfo": {
                    "type": "object",
                    "properties": {
                        "principal_email": {
                            "type": "string"
                        },
                        "authority_selector": {
                            "type": "string"
                        },
                        "third_party_principal": {
                            "type": "object"
                        },
                        "service_account_key_name": {
                            "type": "string"
                        },
                        "service_account_delegation_info": {
                            "type": "array",
                            "items": {
                                "$ref": "#/properties/AuditLogWrittenEvent/definitions/ServiceAccountDelegationInfo"
                            }
                        },
                        "principal_subject": {
                            "type": "string"
                        }
                    }
                },
                "Resource": {
                    "type": "object",
                    "properties": {
                        "service": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        },
                        "type": {
                            "type": "string"
                        },
                        "labels": {
                            "type": "object"
                        }
                    }
                },
                "AuthorizationInfo": {
                    "type": "object",
                    "properties": {
                        "resource": {
                            "type": "string"
                        },
                        "permission": {
                            "type": "string"
                        },
                        "granted": {
                            "type": "boolean"
                        },
                        "resource_attributes": {
                            "$ref": "#/properties/AuditLogWrittenEvent/definitions/Resource"
                        }
                    }
                },
                "Auth": {
                    "type": "object",
                    "properties": {
                        "principal": {
                            "type": "string"
                        },
                        "audiences": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "presenter": {
                            "type": "string"
                        },
                        "claims": {
                            "type": "object"
                        },
                        "access_levels": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                },
                "Request": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string"
                        },
                        "method": {
                            "type": "string"
                        },
                        "headers": {
                            "type": "object"
                        },
                        "path": {
                            "type": "string"
                        },
                        "host": {
                            "type": "string"
                        },
                        "scheme": {
                            "type": "string"
                        },
                        "query": {
                            "type": "string"
                        },
                        "time": {
                            "type": "string"
                        },
                        "size": {
                            "type": "integer"
                        },
                        "protocol": {
                            "type": "string"
                        },
                        "reason": {
                            "type": "string"
                        },
                        "auth": {
                            "$ref": "#/properties/AuditLogWrittenEvent/definitions/Auth"
                        }
                    }
                },
                "Peer": {
                    "type": "object",
                    "properties": {
                        "ip": {
                            "type": "string"
                        },
                        "port": {
                            "type": "integer"
                        },
                        "labels": {
                            "type": "object"
                        },
                        "principal": {
                            "type": "string"
                        },
                        "region_code": {
                            "type": "string"
                        }
                    }
                },
                "RequestMetadata": {
                    "type": "object",
                    "properties": {
                        "caller_ip": {
                            "type": "string"
                        },
                        "caller_supplied_user_agent": {
                            "type": "string"
                        },
                        "caller_network": {
                            "type": "string"
                        },
                        "request_attributes": {
                            "$ref": "#/properties/AuditLogWrittenEvent/definitions/Request"
                        },
                        "destination_attributes": {
                            "$ref": "#/properties/AuditLogWrittenEvent/definitions/Peer"
                        }
                    }
                },
                "AuditLog": {
                    "type": "object",
                    "properties": {
                        "service_name": {
                            "type": "string"
                        },
                        "method_name": {
                            "type": "string"
                        },
                        "resource_name": {
                            "type": "string"
                        },
                        "resource_location": {
                            "$ref": "#/properties/AuditLogWrittenEvent/definitions/ResourceLocation"
                        },
                        "resource_original_state": {
                            "type": "object"
                        },
                        "num_response_items": {
                            "type": "integer"
                        },
                        "status": {
                            "$ref": "#/properties/AuditLogWrittenEvent/definitions/Status"
                        },
                        "authentication_info": {
                            "$ref": "#/properties/AuditLogWrittenEvent/definitions/AuthenticationInfo"
                        },
                        "authorization_info": {
                            "type": "array",
                            "items": {
                                "$ref": "#/properties/AuditLogWrittenEvent/definitions/AuthorizationInfo"
                            }
                        },
                        "request_metadata": {
                            "$ref": "#/properties/AuditLogWrittenEvent/definitions/RequestMetadata"
                        },
                        "request": {
                            "type": "object"
                        },
                        "response": {
                            "type": "object"
                        },
                        "metadata": {
                            "type": "object"
                        },
                        "service_data": {
                            "type": "object"
                        }
                    }
                },
                "LogEntryOperation": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string"
                        },
                        "producer": {
                            "type": "string"
                        },
                        "first": {
                            "type": "boolean"
                        },
                        "last": {
                            "type": "boolean"
                        }
                    }
                }
            },
            "properties": {
                "log_name": {
                    "type": "string"
                },
                "resource": {
                    "$ref": "#/properties/AuditLogWrittenEvent/definitions/MonitoredResource"
                },
                "proto_payload": {
                    "$ref": "#/properties/AuditLogWrittenEvent/definitions/AuditLog"
                },
                "insert_id": {
                    "type": "string"
                },
                "labels": {
                    "type": "object"
                },
                "operation": {
                    "$ref": "#/properties/AuditLogWrittenEvent/definitions/LogEntryOperation"
                },
                "timestamp": {
                    "type": "string"
                },
                "receive_timestamp": {
                    "type": "string"
                },
                "severity": {
                    "type": "integer",
                    "enum": [
                        0,
                        100,
                        200,
                        300,
                        400,
                        500,
                        600,
                        700,
                        800
                    ]
                },
                "trace": {
                    "type": "string"
                },
                "span_id": {
                    "type": "string"
                }
            }
        }
    }
}`
  const { lines: pythonPerson } = await quicktypeJSONSchema(
    "typescript",
    "AuditLogWrittenEvent",
    json
    // path too
  );
  console.log(pythonPerson.join("\n"));
}

main();