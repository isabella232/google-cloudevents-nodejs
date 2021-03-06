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
 * The data within all Firebase Auth events
 */
export interface AuthEventData {
    /**
     * User's custom claims, typically used to define user roles and propagated
     * to an authenticated user's ID token.
     */
    customClaims?: CustomClaims;
    /**
     * Whether the user is disabled.
     */
    disabled?: boolean;
    /**
     * The user's display name.
     */
    displayName?: string;
    /**
     * The user's primary email, if set.
     */
    email?: string;
    /**
     * Whether or not the user's primary email is verified.
     */
    emailVerified?: boolean;
    /**
     * Additional metadata about the user.
     */
    metadata?: Metadata;
    /**
     * The user's phone number.
     */
    phoneNumber?: string;
    /**
     * The user's photo URL.
     */
    photoUrl?: string;
    /**
     * User's info at the providers
     */
    providerData?: ProviderDatum[];
    /**
     * The user identifier in the Firebase app.
     */
    uid?: string;
}

/**
 * User's custom claims, typically used to define user roles and propagated
 * to an authenticated user's ID token.
 */
export interface CustomClaims {
    /**
     * Unordered map of dynamically typed values.
     */
    fields?: { [key: string]: { [key: string]: any } | null };
}

/**
 * Additional metadata about the user.
 */
export interface Metadata {
    /**
     * The date the user was created.
     */
    createdAt?: Date;
    /**
     * The date the user last signed in.
     */
    lastSignedInAt?: Date;
}

/**
 * User's info at the identity provider
 */
export interface ProviderDatum {
    /**
     * The display name for the linked provider.
     */
    displayName?: string;
    /**
     * The email for the linked provider.
     */
    email?: string;
    /**
     * The photo URL for the linked provider.
     */
    photoUrl?: string;
    /**
     * The linked provider ID (e.g. "google.com" for the Google provider).
     */
    providerId?: string;
    /**
     * The user identifier for the linked provider.
     */
    uid?: string;
}
