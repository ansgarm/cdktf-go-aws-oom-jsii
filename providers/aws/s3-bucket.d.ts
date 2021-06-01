import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#acceleration_status S3Bucket#acceleration_status}.
     */
    readonly accelerationStatus?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#acl S3Bucket#acl}.
     */
    readonly acl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket S3Bucket#bucket}.
     */
    readonly bucket?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket_prefix S3Bucket#bucket_prefix}.
     */
    readonly bucketPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#force_destroy S3Bucket#force_destroy}.
     */
    readonly forceDestroy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#hosted_zone_id S3Bucket#hosted_zone_id}.
     */
    readonly hostedZoneId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#policy S3Bucket#policy}.
     */
    readonly policy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#request_payer S3Bucket#request_payer}.
     */
    readonly requestPayer?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags_all S3Bucket#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website_domain S3Bucket#website_domain}.
     */
    readonly websiteDomain?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website_endpoint S3Bucket#website_endpoint}.
     */
    readonly websiteEndpoint?: string;
    /**
     * cors_rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#cors_rule S3Bucket#cors_rule}
     */
    readonly corsRule?: S3BucketCorsRule[];
    /**
     * grant block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#grant S3Bucket#grant}
     */
    readonly grant?: S3BucketGrant[];
    /**
     * lifecycle_rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#lifecycle_rule S3Bucket#lifecycle_rule}
     */
    readonly lifecycleRule?: S3BucketLifecycleRule[];
    /**
     * logging block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#logging S3Bucket#logging}
     */
    readonly logging?: S3BucketLogging[];
    /**
     * object_lock_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#object_lock_configuration S3Bucket#object_lock_configuration}
     */
    readonly objectLockConfiguration?: S3BucketObjectLockConfiguration[];
    /**
     * replication_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#replication_configuration S3Bucket#replication_configuration}
     */
    readonly replicationConfiguration?: S3BucketReplicationConfiguration[];
    /**
     * server_side_encryption_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}
     */
    readonly serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration[];
    /**
     * versioning block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#versioning S3Bucket#versioning}
     */
    readonly versioning?: S3BucketVersioning[];
    /**
     * website block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website S3Bucket#website}
     */
    readonly website?: S3BucketWebsite[];
}
export interface S3BucketCorsRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_headers S3Bucket#allowed_headers}.
     */
    readonly allowedHeaders?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_methods S3Bucket#allowed_methods}.
     */
    readonly allowedMethods: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_origins S3Bucket#allowed_origins}.
     */
    readonly allowedOrigins: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expose_headers S3Bucket#expose_headers}.
     */
    readonly exposeHeaders?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#max_age_seconds S3Bucket#max_age_seconds}.
     */
    readonly maxAgeSeconds?: number;
}
export interface S3BucketGrant {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#permissions S3Bucket#permissions}.
     */
    readonly permissions: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#type S3Bucket#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#uri S3Bucket#uri}.
     */
    readonly uri?: string;
}
export interface S3BucketLifecycleRuleExpiration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#date S3Bucket#date}.
     */
    readonly date?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}.
     */
    readonly days?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expired_object_delete_marker S3Bucket#expired_object_delete_marker}.
     */
    readonly expiredObjectDeleteMarker?: boolean;
}
export interface S3BucketLifecycleRuleNoncurrentVersionExpiration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}.
     */
    readonly days?: number;
}
export interface S3BucketLifecycleRuleNoncurrentVersionTransition {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}.
     */
    readonly days?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}.
     */
    readonly storageClass: string;
}
export interface S3BucketLifecycleRuleTransition {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#date S3Bucket#date}.
     */
    readonly date?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}.
     */
    readonly days?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}.
     */
    readonly storageClass: string;
}
export interface S3BucketLifecycleRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}.
     */
    readonly abortIncompleteMultipartUploadDays?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}.
     */
    readonly enabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * expiration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expiration S3Bucket#expiration}
     */
    readonly expiration?: S3BucketLifecycleRuleExpiration[];
    /**
     * noncurrent_version_expiration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}
     */
    readonly noncurrentVersionExpiration?: S3BucketLifecycleRuleNoncurrentVersionExpiration[];
    /**
     * noncurrent_version_transition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#noncurrent_version_transition S3Bucket#noncurrent_version_transition}
     */
    readonly noncurrentVersionTransition?: S3BucketLifecycleRuleNoncurrentVersionTransition[];
    /**
     * transition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#transition S3Bucket#transition}
     */
    readonly transition?: S3BucketLifecycleRuleTransition[];
}
export interface S3BucketLogging {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#target_bucket S3Bucket#target_bucket}.
     */
    readonly targetBucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#target_prefix S3Bucket#target_prefix}.
     */
    readonly targetPrefix?: string;
}
export interface S3BucketObjectLockConfigurationRuleDefaultRetention {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}.
     */
    readonly days?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#mode S3Bucket#mode}.
     */
    readonly mode: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#years S3Bucket#years}.
     */
    readonly years?: number;
}
export interface S3BucketObjectLockConfigurationRule {
    /**
     * default_retention block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#default_retention S3Bucket#default_retention}
     */
    readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetention[];
}
export interface S3BucketObjectLockConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#object_lock_enabled S3Bucket#object_lock_enabled}.
     */
    readonly objectLockEnabled: string;
    /**
     * rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rule S3Bucket#rule}
     */
    readonly rule?: S3BucketObjectLockConfigurationRule[];
}
export interface S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#owner S3Bucket#owner}.
     */
    readonly owner: string;
}
export interface S3BucketReplicationConfigurationRulesDestination {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#account_id S3Bucket#account_id}.
     */
    readonly accountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket S3Bucket#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#replica_kms_key_id S3Bucket#replica_kms_key_id}.
     */
    readonly replicaKmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}.
     */
    readonly storageClass?: string;
    /**
     * access_control_translation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#access_control_translation S3Bucket#access_control_translation}
     */
    readonly accessControlTranslation?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation[];
}
export interface S3BucketReplicationConfigurationRulesFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}.
     */
    readonly enabled: boolean;
}
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteria {
    /**
     * sse_kms_encrypted_objects block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#sse_kms_encrypted_objects S3Bucket#sse_kms_encrypted_objects}
     */
    readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects[];
}
export interface S3BucketReplicationConfigurationRules {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#priority S3Bucket#priority}.
     */
    readonly priority?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#status S3Bucket#status}.
     */
    readonly status: string;
    /**
     * destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#destination S3Bucket#destination}
     */
    readonly destination: S3BucketReplicationConfigurationRulesDestination[];
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#filter S3Bucket#filter}
     */
    readonly filter?: S3BucketReplicationConfigurationRulesFilter[];
    /**
     * source_selection_criteria block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#source_selection_criteria S3Bucket#source_selection_criteria}
     */
    readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria[];
}
export interface S3BucketReplicationConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#role S3Bucket#role}.
     */
    readonly role: string;
    /**
     * rules block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rules S3Bucket#rules}
     */
    readonly rules: S3BucketReplicationConfigurationRules[];
}
export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#kms_master_key_id S3Bucket#kms_master_key_id}.
     */
    readonly kmsMasterKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#sse_algorithm S3Bucket#sse_algorithm}.
     */
    readonly sseAlgorithm: string;
}
export interface S3BucketServerSideEncryptionConfigurationRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket_key_enabled S3Bucket#bucket_key_enabled}.
     */
    readonly bucketKeyEnabled?: boolean;
    /**
     * apply_server_side_encryption_by_default block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#apply_server_side_encryption_by_default S3Bucket#apply_server_side_encryption_by_default}
     */
    readonly applyServerSideEncryptionByDefault: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault[];
}
export interface S3BucketServerSideEncryptionConfiguration {
    /**
     * rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rule S3Bucket#rule}
     */
    readonly rule: S3BucketServerSideEncryptionConfigurationRule[];
}
export interface S3BucketVersioning {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#mfa_delete S3Bucket#mfa_delete}.
     */
    readonly mfaDelete?: boolean;
}
export interface S3BucketWebsite {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#error_document S3Bucket#error_document}.
     */
    readonly errorDocument?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#index_document S3Bucket#index_document}.
     */
    readonly indexDocument?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#redirect_all_requests_to S3Bucket#redirect_all_requests_to}.
     */
    readonly redirectAllRequestsTo?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#routing_rules S3Bucket#routing_rules}.
     */
    readonly routingRules?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket}.
 */
export declare class S3Bucket extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: S3BucketConfig);
    private _accelerationStatus?;
    get accelerationStatus(): string;
    set accelerationStatus(value: string);
    resetAccelerationStatus(): void;
    get accelerationStatusInput(): string | undefined;
    private _acl?;
    get acl(): string;
    set acl(value: string);
    resetAcl(): void;
    get aclInput(): string | undefined;
    get arn(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    get bucketDomainName(): string;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    get bucketRegionalDomainName(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean;
    set forceDestroy(value: boolean);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | undefined;
    private _hostedZoneId?;
    get hostedZoneId(): string;
    set hostedZoneId(value: string);
    resetHostedZoneId(): void;
    get hostedZoneIdInput(): string | undefined;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    get region(): string;
    private _requestPayer?;
    get requestPayer(): string;
    set requestPayer(value: string);
    resetRequestPayer(): void;
    get requestPayerInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _websiteDomain?;
    get websiteDomain(): string;
    set websiteDomain(value: string);
    resetWebsiteDomain(): void;
    get websiteDomainInput(): string | undefined;
    private _websiteEndpoint?;
    get websiteEndpoint(): string;
    set websiteEndpoint(value: string);
    resetWebsiteEndpoint(): void;
    get websiteEndpointInput(): string | undefined;
    private _corsRule?;
    get corsRule(): S3BucketCorsRule[];
    set corsRule(value: S3BucketCorsRule[]);
    resetCorsRule(): void;
    get corsRuleInput(): S3BucketCorsRule[] | undefined;
    private _grant?;
    get grant(): S3BucketGrant[];
    set grant(value: S3BucketGrant[]);
    resetGrant(): void;
    get grantInput(): S3BucketGrant[] | undefined;
    private _lifecycleRule?;
    get lifecycleRule(): S3BucketLifecycleRule[];
    set lifecycleRule(value: S3BucketLifecycleRule[]);
    resetLifecycleRule(): void;
    get lifecycleRuleInput(): S3BucketLifecycleRule[] | undefined;
    private _logging?;
    get logging(): S3BucketLogging[];
    set logging(value: S3BucketLogging[]);
    resetLogging(): void;
    get loggingInput(): S3BucketLogging[] | undefined;
    private _objectLockConfiguration?;
    get objectLockConfiguration(): S3BucketObjectLockConfiguration[];
    set objectLockConfiguration(value: S3BucketObjectLockConfiguration[]);
    resetObjectLockConfiguration(): void;
    get objectLockConfigurationInput(): S3BucketObjectLockConfiguration[] | undefined;
    private _replicationConfiguration?;
    get replicationConfiguration(): S3BucketReplicationConfiguration[];
    set replicationConfiguration(value: S3BucketReplicationConfiguration[]);
    resetReplicationConfiguration(): void;
    get replicationConfigurationInput(): S3BucketReplicationConfiguration[] | undefined;
    private _serverSideEncryptionConfiguration?;
    get serverSideEncryptionConfiguration(): S3BucketServerSideEncryptionConfiguration[];
    set serverSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration[]);
    resetServerSideEncryptionConfiguration(): void;
    get serverSideEncryptionConfigurationInput(): S3BucketServerSideEncryptionConfiguration[] | undefined;
    private _versioning?;
    get versioning(): S3BucketVersioning[];
    set versioning(value: S3BucketVersioning[]);
    resetVersioning(): void;
    get versioningInput(): S3BucketVersioning[] | undefined;
    private _website?;
    get website(): S3BucketWebsite[];
    set website(value: S3BucketWebsite[]);
    resetWebsite(): void;
    get websiteInput(): S3BucketWebsite[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
