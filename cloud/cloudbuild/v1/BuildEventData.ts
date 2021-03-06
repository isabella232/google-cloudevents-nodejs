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
 * Build event data
 * Common build format for Google Cloud Platform API operations.
 * Copied from
 *
 * https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto.
 */
export interface BuildEventData {
    /**
     * Artifacts produced by the build that should be uploaded upon
     * successful completion of all build steps.
     */
    artifacts?: Artifacts;
    /**
     * The ID of the `BuildTrigger` that triggered this build, if it
     * was triggered automatically.
     */
    buildTriggerId?: string;
    /**
     * Time at which the request to create the build was received.
     */
    createTime?: Date;
    /**
     * Time at which execution of the build was finished.
     *
     * The difference between finish_time and start_time is the duration of the
     * build's execution.
     */
    finishTime?: Date;
    /**
     * Unique identifier of the build.
     */
    id?: string;
    /**
     * A list of images to be pushed upon the successful completion of all build
     * steps.
     *
     * The images are pushed using the builder service account's credentials.
     *
     * The digests of the pushed images will be stored in the `Build` resource's
     * results field.
     *
     * If any of the images fail to be pushed, the build status is marked
     * `FAILURE`.
     */
    images?: string[];
    /**
     * Google Cloud Storage bucket where logs should be written (see
     * [Bucket Name
     * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     * Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.
     */
    logsBucket?: string;
    /**
     * URL to logs for this build in Google Cloud Console.
     */
    logUrl?: string;
    /**
     * Special options for this build.
     */
    options?: Options;
    /**
     * ID of the project.
     */
    projectId?: string;
    /**
     * TTL in queue for this build. If provided and the build is enqueued longer
     * than this value, the build will expire and the build status will be
     * `EXPIRED`.
     *
     * The TTL starts ticking from create_time.
     */
    queueTtl?: QueueTTL;
    /**
     * Results of the build.
     */
    results?: Results;
    /**
     * Secrets to decrypt using Cloud Key Management Service.
     */
    secrets?: Secret[];
    /**
     * The location of the source files to build.
     */
    source?: Source;
    /**
     * A permanent fixed identifier for source.
     */
    sourceProvenance?: SourceProvenance;
    /**
     * Time at which execution of the build was started.
     */
    startTime?: Date;
    /**
     * Status of the build.
     */
    status?: StatusEnum | number;
    /**
     * Customer-readable message about the current status.
     */
    statusDetail?: string;
    /**
     * The operations to be performed on the workspace.
     */
    steps?: Step[];
    /**
     * Substitutions data for `Build` resource.
     */
    substitutions?: { [key: string]: string };
    /**
     * Tags for annotation of a `Build`. These are not docker tags.
     */
    tags?: string[];
    /**
     * Amount of time that this build should be allowed to run, to second
     * granularity. If this amount of time elapses, work on the build will cease
     * and the build status will be `TIMEOUT`.
     */
    timeout?: BuildEventDataTimeout;
    /**
     * Stores timing information for phases of the build. Valid keys
     * are:
     *
     * * BUILD: time to execute all build steps
     * * PUSH: time to push all specified images.
     * * FETCHSOURCE: time to fetch source.
     *
     * If the build does not specify source or images,
     * these keys will not be included.
     */
    timing?: { [key: string]: { [key: string]: any } };
}

/**
 * Artifacts produced by the build that should be uploaded upon
 * successful completion of all build steps.
 */
export interface Artifacts {
    /**
     * A list of images to be pushed upon the successful completion of all build
     * steps.
     *
     * The images will be pushed using the builder service account's credentials.
     *
     * The digests of the pushed images will be stored in the Build resource's
     * results field.
     *
     * If any of the images fail to be pushed, the build is marked FAILURE.
     */
    images?: string[];
    /**
     * A list of objects to be uploaded to Cloud Storage upon successful
     * completion of all build steps.
     *
     * Files in the workspace matching specified paths globs will be uploaded to
     * the specified Cloud Storage location using the builder service account's
     * credentials.
     *
     * The location and generation of the uploaded objects will be stored in the
     * Build resource's results field.
     *
     * If any objects fail to be pushed, the build is marked FAILURE.
     */
    objects?: Objects;
}

/**
 * A list of objects to be uploaded to Cloud Storage upon successful
 * completion of all build steps.
 *
 * Files in the workspace matching specified paths globs will be uploaded to
 * the specified Cloud Storage location using the builder service account's
 * credentials.
 *
 * The location and generation of the uploaded objects will be stored in the
 * Build resource's results field.
 *
 * If any objects fail to be pushed, the build is marked FAILURE.
 */
export interface Objects {
    /**
     * Cloud Storage bucket and optional object path, in the form
     * "gs://bucket/path/to/somewhere/". (see [Bucket Name
     * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     *
     * Files in the workspace matching any path pattern will be uploaded to
     * Cloud Storage with this location as a prefix.
     */
    location?: string;
    /**
     * Path globs used to match files in the build's workspace.
     */
    paths?: string[];
    /**
     * Stores timing information for pushing all artifact objects.
     */
    timing?: { [key: string]: any };
}

/**
 * Special options for this build.
 */
export interface Options {
    /**
     * Requested disk size for the VM that runs the build. Note that this is *NOT*
     * "disk free"; some of the space will be used by the operating system and
     * build utilities. Also note that this is the minimum disk size that will be
     * allocated for the build -- the build may run with a larger disk than
     * requested. At present, the maximum disk size is 1000GB; builds that request
     * more than the maximum are rejected with an error.
     */
    diskSizeGb?: number | string;
    /**
     * A list of global environment variable definitions that will exist for all
     * build steps in this build. If a variable is defined in both globally and in
     * a build step, the variable will use the build step value.
     *
     * The elements are of the form "KEY=VALUE" for the environment variable "KEY"
     * being given the value "VALUE".
     */
    env?: string[];
    /**
     * Option to specify the logging mode, which determines where the logs are
     * stored.
     */
    logging?: LoggingEnum | number;
    /**
     * Option to define build log streaming behavior to Google Cloud
     * Storage.
     */
    logStreamingOption?: LogStreamingOptionEnum | number;
    /**
     * Compute Engine machine type on which to run the build.
     */
    machineType?: MachineTypeEnum | number;
    /**
     * Requested verifiability options.
     */
    requestedVerifyOption?: RequestedVerifyOptionEnum | number;
    /**
     * A list of global environment variables, which are encrypted using a Cloud
     * Key Management Service crypto key. These values must be specified in the
     * build's `Secret`. These variables will be available to all build steps
     * in this build.
     */
    secretEnv?: string[];
    /**
     * Requested hash for SourceProvenance.
     */
    sourceProvenanceHash?: Array<number | string>;
    /**
     * Option to specify behavior when there is an error in the substitution
     * checks.
     */
    substitutionOption?: SubstitutionOptionEnum | number;
    /**
     * Global list of volumes to mount for ALL build steps
     *
     * Each volume is created as an empty volume prior to starting the build
     * process. Upon completion of the build, volumes and their contents are
     * discarded. Global volume names and paths cannot conflict with the volumes
     * defined a build step.
     *
     * Using a global volume in a build with only one step is not valid as
     * it is indicative of a build request with an incorrect configuration.
     */
    volumes?: any[];
    /**
     * Option to specify a `WorkerPool` for the build.
     * Format: projects/{project}/locations/{location}/workerPools/{workerPool}
     */
    workerPool?: string;
}

export enum LogStreamingOptionEnum {
    StreamDefault = "STREAM_DEFAULT",
    StreamOff = "STREAM_OFF",
    StreamOn = "STREAM_ON",
}

export enum LoggingEnum {
    GcsOnly = "GCS_ONLY",
    Legacy = "LEGACY",
    LoggingUnspecified = "LOGGING_UNSPECIFIED",
}

export enum MachineTypeEnum {
    N1Highcpu32 = "N1_HIGHCPU_32",
    N1Highcpu8 = "N1_HIGHCPU_8",
    Unspecified = "UNSPECIFIED",
}

export enum RequestedVerifyOptionEnum {
    NotVerified = "NOT_VERIFIED",
    Verified = "VERIFIED",
}

export enum SubstitutionOptionEnum {
    AllowLoose = "ALLOW_LOOSE",
    MustMatch = "MUST_MATCH",
}

/**
 * TTL in queue for this build. If provided and the build is enqueued longer
 * than this value, the build will expire and the build status will be
 * `EXPIRED`.
 *
 * The TTL starts ticking from create_time.
 */
export interface QueueTTL {
    /**
     * Signed fractions of a second at nanosecond resolution of the span
     * of time. Durations less than one second are represented with a 0
     * `seconds` field and a positive or negative `nanos` field. For durations
     * of one second or more, a non-zero value for the `nanos` field must be
     * of the same sign as the `seconds` field. Must be from -999,999,999
     * to +999,999,999 inclusive.
     */
    nanos?: number;
    /**
     * Signed seconds of the span of time. Must be from -315,576,000,000
     * to +315,576,000,000 inclusive. Note: these bounds are computed from:
     * 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     */
    seconds?: number | string;
}

/**
 * Results of the build.
 */
export interface Results {
    /**
     * Path to the artifact manifest. Only populated when artifacts are uploaded.
     */
    artifactManifest?: string;
    /**
     * Time to push all non-container artifacts.
     */
    artifactTiming?: { [key: string]: any };
    /**
     * List of build step digests, in the order corresponding to build step
     * indices.
     */
    buildStepImages?: string[];
    /**
     * List of build step outputs, produced by builder images, in the order
     * corresponding to build step indices.
     *
     * [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders)
     * can produce this output by writing to `$BUILDER_OUTPUT/output`.
     * Only the first 4KB of data is stored.
     */
    buildStepOutputs?: string[];
    /**
     * Container images that were built as a part of the build.
     */
    images?: Image[];
    /**
     * Number of artifacts uploaded. Only populated when artifacts are uploaded.
     */
    numArtifacts?: number | string;
}

/**
 * An image built by the pipeline.
 */
export interface Image {
    /**
     * Docker Registry 2.0 digest.
     */
    digest?: string;
    /**
     * Name used to push the container image to Google Container Registry, as
     * presented to `docker push`.
     */
    name?: string;
    /**
     * Stores timing information for pushing the specified image.
     */
    pushTiming?: { [key: string]: any };
}

/**
 * Pairs a set of secret environment variables containing encrypted
 * values with the Cloud KMS key to use to decrypt the value.
 */
export interface Secret {
    /**
     * Cloud KMS key name to use to decrypt these envs.
     */
    kmsKeyName?: string;
    /**
     * Map of environment variable name to its encrypted value.
     *
     * Secret environment variables must be unique across all of a build's
     * secrets, and must be used by at least one build step. Values can be at most
     * 64 KB in size. There can be at most 100 secret values across all of a
     * build's secrets.
     */
    secretEnv?: { [key: string]: string };
}

/**
 * The location of the source files to build.
 */
export interface Source {
    /**
     * If provided, get the source from this location in a Cloud Source
     * Repository.
     */
    repoSource?: { [key: string]: any };
    /**
     * If provided, get the source from this location in Google Cloud Storage.
     */
    storageSource?: { [key: string]: any };
}

/**
 * A permanent fixed identifier for source.
 */
export interface SourceProvenance {
    /**
     * Hash(es) of the build source, which can be used to verify that
     * the original source integrity was maintained in the build. Note that
     * `FileHashes` will only be populated if `BuildOptions` has requested a
     * `SourceProvenanceHash`.
     *
     * The keys to this map are file paths used as build source and the values
     * contain the hash values for those files.
     *
     * If the build source came in a single package such as a gzipped tarfile
     * (`.tar.gz`), the `FileHash` will be for the single path to that file.
     */
    fileHashes?: { [key: string]: FileHashValue };
    /**
     * A copy of the build's `source.repo_source`, if exists, with any
     * revisions resolved.
     */
    resolvedRepoSource?: { [key: string]: any };
    /**
     * A copy of the build's `source.storage_source`, if exists, with any
     * generations resolved.
     */
    resolvedStorageSource?: { [key: string]: any };
}

export interface FileHashValue {
    /**
     * Collection of file hashes.
     */
    fileHash?: FileHashElement[];
}

/**
 * Container message for hash values.
 */
export interface FileHashElement {
    /**
     * The type of hash that was performed.
     */
    type?: TypeEnum | number;
    /**
     * The hash value.
     */
    value?: string;
}

export enum TypeEnum {
    Md5 = "MD5",
    None = "NONE",
    Sha256 = "SHA256",
}

export enum StatusEnum {
    Cancelled = "CANCELLED",
    Expired = "EXPIRED",
    Failure = "FAILURE",
    InternalError = "INTERNAL_ERROR",
    Queued = "QUEUED",
    StatusUnknown = "STATUS_UNKNOWN",
    Success = "SUCCESS",
    Timeout = "TIMEOUT",
    Working = "WORKING",
}

/**
 * A step in the build pipeline.
 */
export interface Step {
    /**
     * A list of arguments that will be presented to the step when it is started.
     *
     * If the image used to run the step's container has an entrypoint, the `args`
     * are used as arguments to that entrypoint. If the image does not define
     * an entrypoint, the first element in args is used as the entrypoint,
     * and the remainder will be used as arguments.
     */
    args?: string[];
    /**
     * Working directory to use when running this step's container.
     *
     * If this value is a relative path, it is relative to the build's working
     * directory. If this value is absolute, it may be outside the build's working
     * directory, in which case the contents of the path may not be persisted
     * across build step executions, unless a `volume` for that path is specified.
     *
     * If the build specifies a `RepoSource` with `dir` and a step with a `dir`,
     * which specifies an absolute path, the `RepoSource` `dir` is ignored for
     * the step's execution.
     */
    dir?: string;
    /**
     * Entrypoint to be used instead of the build step image's default entrypoint.
     * If unset, the image's default entrypoint is used.
     */
    entrypoint?: string;
    /**
     * A list of environment variable definitions to be used when running a step.
     *
     * The elements are of the form "KEY=VALUE" for the environment variable "KEY"
     * being given the value "VALUE".
     */
    env?: string[];
    /**
     * Unique identifier for this build step, used in `wait_for` to
     * reference this build step as a dependency.
     */
    id?: string;
    /**
     * The name of the container image that will run this particular
     * build step.
     *
     * If the image is available in the host's Docker daemon's cache, it
     * will be run directly. If not, the host will attempt to pull the image
     * first, using the builder service account's credentials if necessary.
     *
     * The Docker daemon's cache will already have the latest versions of all of
     * the officially supported build steps
     *
     * ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)).
     * The Docker daemon will also have cached many of the layers for some popular
     * images, like "ubuntu", "debian", but they will be refreshed at the time you
     * attempt to use them.
     *
     * If you built an image in a previous build step, it will be stored in the
     * host's Docker daemon's cache and is available to use as the name for a
     * later build step.
     */
    name?: string;
    /**
     * Stores timing information for pulling this build step's
     * builder image only.
     */
    pullTiming?: { [key: string]: any };
    /**
     * A list of environment variables which are encrypted using a Cloud Key
     * Management Service crypto key. These values must be specified in the
     * build's `Secret`.
     */
    secretEnv?: string[];
    /**
     * Status of the build step. At this time, build step status is
     * only updated on build completion; step status is not updated in real-time
     * as the build progresses.
     */
    status?: number | string;
    /**
     * Time limit for executing this build step. If not defined, the step has no
     * time limit and will be allowed to continue to run until either it completes
     * or the build itself times out.
     */
    timeout?: StepTimeout;
    /**
     * Stores timing information for executing this build step.
     */
    timing?: { [key: string]: any };
    /**
     * List of volumes to mount into the build step.
     *
     * Each volume is created as an empty volume prior to execution of the
     * build step. Upon completion of the build, volumes and their contents are
     * discarded.
     *
     * Using a named volume in only one step is not valid as it is indicative
     * of a build request with an incorrect configuration.
     */
    volumes?: any[];
    /**
     * The ID(s) of the step(s) that this build step depends on.
     * This build step will not start until all the build steps in `wait_for`
     * have completed successfully. If `wait_for` is empty, this build step will
     * start when all previous build steps in the `Build.Steps` list have
     * completed successfully.
     */
    waitFor?: string[];
}

/**
 * Time limit for executing this build step. If not defined, the step has no
 * time limit and will be allowed to continue to run until either it completes
 * or the build itself times out.
 */
export interface StepTimeout {
    /**
     * Signed fractions of a second at nanosecond resolution of the span
     * of time. Durations less than one second are represented with a 0
     * `seconds` field and a positive or negative `nanos` field. For durations
     * of one second or more, a non-zero value for the `nanos` field must be
     * of the same sign as the `seconds` field. Must be from -999,999,999
     * to +999,999,999 inclusive.
     */
    nanos?: number;
    /**
     * Signed seconds of the span of time. Must be from -315,576,000,000
     * to +315,576,000,000 inclusive. Note: these bounds are computed from:
     * 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     */
    seconds?: number | string;
}

/**
 * Amount of time that this build should be allowed to run, to second
 * granularity. If this amount of time elapses, work on the build will cease
 * and the build status will be `TIMEOUT`.
 */
export interface BuildEventDataTimeout {
    /**
     * Signed fractions of a second at nanosecond resolution of the span
     * of time. Durations less than one second are represented with a 0
     * `seconds` field and a positive or negative `nanos` field. For durations
     * of one second or more, a non-zero value for the `nanos` field must be
     * of the same sign as the `seconds` field. Must be from -999,999,999
     * to +999,999,999 inclusive.
     */
    nanos?: number;
    /**
     * Signed seconds of the span of time. Must be from -315,576,000,000
     * to +315,576,000,000 inclusive. Note: these bounds are computed from:
     * 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     */
    seconds?: number | string;
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {BuildEventData} The object with type annotations
 */
export const toBuildEventData = (json: object) => {
  return json as BuildEventData;
};