// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * The data received in an event when a message is published to a topic.
 */
export interface MessagePublishedData {
    /**
     * The message that was published.
     */
    message?: Message;
    /**
     * The resource name of the subscription for which this event was
     * generated. The format of the value is
     * `projects/{project-id}/subscriptions/{subscription-id}`.
     */
    subscription?: string;
}

/**
 * The message that was published.
 */
export interface Message {
    /**
     * Attributes for this message.
     */
    attributes?: { [key: string]: string };
    /**
     * The binary data in the message.
     */
    data?: string;
    /**
     * ID of this message, assigned by the server when the message is published.
     * Guaranteed to be unique within the topic.
     */
    messageId?: string;
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {MessagePublishedData} The object with type annotations
 */
export const toMessagePublishedData = (json: object) => {
  return json as MessagePublishedData;
};