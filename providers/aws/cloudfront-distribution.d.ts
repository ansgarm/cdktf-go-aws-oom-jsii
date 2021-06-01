import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#aliases CloudfrontDistribution#aliases}.
     */
    readonly aliases?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#comment CloudfrontDistribution#comment}.
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_root_object CloudfrontDistribution#default_root_object}.
     */
    readonly defaultRootObject?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#enabled CloudfrontDistribution#enabled}.
     */
    readonly enabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#http_version CloudfrontDistribution#http_version}.
     */
    readonly httpVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}.
     */
    readonly isIpv6Enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#price_class CloudfrontDistribution#price_class}.
     */
    readonly priceClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#retain_on_delete CloudfrontDistribution#retain_on_delete}.
     */
    readonly retainOnDelete?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#tags CloudfrontDistribution#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#tags_all CloudfrontDistribution#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#wait_for_deployment CloudfrontDistribution#wait_for_deployment}.
     */
    readonly waitForDeployment?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#web_acl_id CloudfrontDistribution#web_acl_id}.
     */
    readonly webAclId?: string;
    /**
     * custom_error_response block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_error_response CloudfrontDistribution#custom_error_response}
     */
    readonly customErrorResponse?: CloudfrontDistributionCustomErrorResponse[];
    /**
     * default_cache_behavior block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_cache_behavior CloudfrontDistribution#default_cache_behavior}
     */
    readonly defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehavior[];
    /**
     * logging_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#logging_config CloudfrontDistribution#logging_config}
     */
    readonly loggingConfig?: CloudfrontDistributionLoggingConfig[];
    /**
     * ordered_cache_behavior block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}
     */
    readonly orderedCacheBehavior?: CloudfrontDistributionOrderedCacheBehavior[];
    /**
     * origin block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin CloudfrontDistribution#origin}
     */
    readonly origin: CloudfrontDistributionOrigin[];
    /**
     * origin_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_group CloudfrontDistribution#origin_group}
     */
    readonly originGroup?: CloudfrontDistributionOriginGroup[];
    /**
     * restrictions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#restrictions CloudfrontDistribution#restrictions}
     */
    readonly restrictions: CloudfrontDistributionRestrictions[];
    /**
     * viewer_certificate block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_certificate CloudfrontDistribution#viewer_certificate}
     */
    readonly viewerCertificate: CloudfrontDistributionViewerCertificate[];
}
export declare class CloudfrontDistributionTrustedKeyGroupsItems extends cdktf.ComplexComputedList {
    get keyGroupId(): string;
    get keyPairIds(): string[];
}
export declare class CloudfrontDistributionTrustedKeyGroups extends cdktf.ComplexComputedList {
    get enabled(): boolean;
    get items(): any;
}
export declare class CloudfrontDistributionTrustedSignersItems extends cdktf.ComplexComputedList {
    get awsAccountNumber(): string;
    get keyPairIds(): string[];
}
export declare class CloudfrontDistributionTrustedSigners extends cdktf.ComplexComputedList {
    get enabled(): boolean;
    get items(): any;
}
export interface CloudfrontDistributionCustomErrorResponse {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}.
     */
    readonly errorCachingMinTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#error_code CloudfrontDistribution#error_code}.
     */
    readonly errorCode: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#response_code CloudfrontDistribution#response_code}.
     */
    readonly responseCode?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#response_page_path CloudfrontDistribution#response_page_path}.
     */
    readonly responsePagePath?: string;
}
export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forward CloudfrontDistribution#forward}.
     */
    readonly forward: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#whitelisted_names CloudfrontDistribution#whitelisted_names}.
     */
    readonly whitelistedNames?: string[];
}
export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValues {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#headers CloudfrontDistribution#headers}.
     */
    readonly headers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string CloudfrontDistribution#query_string}.
     */
    readonly queryString: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.
     */
    readonly queryStringCacheKeys?: string[];
    /**
     * cookies block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cookies CloudfrontDistribution#cookies}
     */
    readonly cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies[];
}
export interface CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}.
     */
    readonly eventType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_body CloudfrontDistribution#include_body}.
     */
    readonly includeBody?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_arn CloudfrontDistribution#lambda_arn}.
     */
    readonly lambdaArn: string;
}
export interface CloudfrontDistributionDefaultCacheBehavior {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#allowed_methods CloudfrontDistribution#allowed_methods}.
     */
    readonly allowedMethods: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cache_policy_id CloudfrontDistribution#cache_policy_id}.
     */
    readonly cachePolicyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cached_methods CloudfrontDistribution#cached_methods}.
     */
    readonly cachedMethods: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#compress CloudfrontDistribution#compress}.
     */
    readonly compress?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_ttl CloudfrontDistribution#default_ttl}.
     */
    readonly defaultTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.
     */
    readonly fieldLevelEncryptionId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#max_ttl CloudfrontDistribution#max_ttl}.
     */
    readonly maxTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#min_ttl CloudfrontDistribution#min_ttl}.
     */
    readonly minTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.
     */
    readonly originRequestPolicyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.
     */
    readonly realtimeLogConfigArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#smooth_streaming CloudfrontDistribution#smooth_streaming}.
     */
    readonly smoothStreaming?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#target_origin_id CloudfrontDistribution#target_origin_id}.
     */
    readonly targetOriginId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.
     */
    readonly trustedKeyGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_signers CloudfrontDistribution#trusted_signers}.
     */
    readonly trustedSigners?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.
     */
    readonly viewerProtocolPolicy: string;
    /**
     * forwarded_values block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forwarded_values CloudfrontDistribution#forwarded_values}
     */
    readonly forwardedValues?: CloudfrontDistributionDefaultCacheBehaviorForwardedValues[];
    /**
     * lambda_function_association block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_function_association CloudfrontDistribution#lambda_function_association}
     */
    readonly lambdaFunctionAssociation?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[];
}
export interface CloudfrontDistributionLoggingConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#bucket CloudfrontDistribution#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_cookies CloudfrontDistribution#include_cookies}.
     */
    readonly includeCookies?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#prefix CloudfrontDistribution#prefix}.
     */
    readonly prefix?: string;
}
export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forward CloudfrontDistribution#forward}.
     */
    readonly forward: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#whitelisted_names CloudfrontDistribution#whitelisted_names}.
     */
    readonly whitelistedNames?: string[];
}
export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValues {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#headers CloudfrontDistribution#headers}.
     */
    readonly headers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string CloudfrontDistribution#query_string}.
     */
    readonly queryString: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.
     */
    readonly queryStringCacheKeys?: string[];
    /**
     * cookies block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cookies CloudfrontDistribution#cookies}
     */
    readonly cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies[];
}
export interface CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}.
     */
    readonly eventType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_body CloudfrontDistribution#include_body}.
     */
    readonly includeBody?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_arn CloudfrontDistribution#lambda_arn}.
     */
    readonly lambdaArn: string;
}
export interface CloudfrontDistributionOrderedCacheBehavior {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#allowed_methods CloudfrontDistribution#allowed_methods}.
     */
    readonly allowedMethods: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cache_policy_id CloudfrontDistribution#cache_policy_id}.
     */
    readonly cachePolicyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cached_methods CloudfrontDistribution#cached_methods}.
     */
    readonly cachedMethods: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#compress CloudfrontDistribution#compress}.
     */
    readonly compress?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_ttl CloudfrontDistribution#default_ttl}.
     */
    readonly defaultTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.
     */
    readonly fieldLevelEncryptionId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#max_ttl CloudfrontDistribution#max_ttl}.
     */
    readonly maxTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#min_ttl CloudfrontDistribution#min_ttl}.
     */
    readonly minTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.
     */
    readonly originRequestPolicyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#path_pattern CloudfrontDistribution#path_pattern}.
     */
    readonly pathPattern: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.
     */
    readonly realtimeLogConfigArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#smooth_streaming CloudfrontDistribution#smooth_streaming}.
     */
    readonly smoothStreaming?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#target_origin_id CloudfrontDistribution#target_origin_id}.
     */
    readonly targetOriginId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.
     */
    readonly trustedKeyGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_signers CloudfrontDistribution#trusted_signers}.
     */
    readonly trustedSigners?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.
     */
    readonly viewerProtocolPolicy: string;
    /**
     * forwarded_values block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forwarded_values CloudfrontDistribution#forwarded_values}
     */
    readonly forwardedValues?: CloudfrontDistributionOrderedCacheBehaviorForwardedValues[];
    /**
     * lambda_function_association block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_function_association CloudfrontDistribution#lambda_function_association}
     */
    readonly lambdaFunctionAssociation?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[];
}
export interface CloudfrontDistributionOriginCustomHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#name CloudfrontDistribution#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#value CloudfrontDistribution#value}.
     */
    readonly value: string;
}
export interface CloudfrontDistributionOriginCustomOriginConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#http_port CloudfrontDistribution#http_port}.
     */
    readonly httpPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#https_port CloudfrontDistribution#https_port}.
     */
    readonly httpsPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}.
     */
    readonly originKeepaliveTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}.
     */
    readonly originProtocolPolicy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_read_timeout CloudfrontDistribution#origin_read_timeout}.
     */
    readonly originReadTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}.
     */
    readonly originSslProtocols: string[];
}
export interface CloudfrontDistributionOriginS3OriginConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_access_identity CloudfrontDistribution#origin_access_identity}.
     */
    readonly originAccessIdentity: string;
}
export interface CloudfrontDistributionOrigin {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#domain_name CloudfrontDistribution#domain_name}.
     */
    readonly domainName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}.
     */
    readonly originId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_path CloudfrontDistribution#origin_path}.
     */
    readonly originPath?: string;
    /**
     * custom_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_header CloudfrontDistribution#custom_header}
     */
    readonly customHeader?: CloudfrontDistributionOriginCustomHeader[];
    /**
     * custom_origin_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_origin_config CloudfrontDistribution#custom_origin_config}
     */
    readonly customOriginConfig?: CloudfrontDistributionOriginCustomOriginConfig[];
    /**
     * s3_origin_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#s3_origin_config CloudfrontDistribution#s3_origin_config}
     */
    readonly s3OriginConfig?: CloudfrontDistributionOriginS3OriginConfig[];
}
export interface CloudfrontDistributionOriginGroupFailoverCriteria {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#status_codes CloudfrontDistribution#status_codes}.
     */
    readonly statusCodes: number[];
}
export interface CloudfrontDistributionOriginGroupMember {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}.
     */
    readonly originId: string;
}
export interface CloudfrontDistributionOriginGroup {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}.
     */
    readonly originId: string;
    /**
     * failover_criteria block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#failover_criteria CloudfrontDistribution#failover_criteria}
     */
    readonly failoverCriteria: CloudfrontDistributionOriginGroupFailoverCriteria[];
    /**
     * member block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#member CloudfrontDistribution#member}
     */
    readonly member: CloudfrontDistributionOriginGroupMember[];
}
export interface CloudfrontDistributionRestrictionsGeoRestriction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#locations CloudfrontDistribution#locations}.
     */
    readonly locations?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#restriction_type CloudfrontDistribution#restriction_type}.
     */
    readonly restrictionType: string;
}
export interface CloudfrontDistributionRestrictions {
    /**
     * geo_restriction block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#geo_restriction CloudfrontDistribution#geo_restriction}
     */
    readonly geoRestriction: CloudfrontDistributionRestrictionsGeoRestriction[];
}
export interface CloudfrontDistributionViewerCertificate {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}.
     */
    readonly acmCertificateArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}.
     */
    readonly cloudfrontDefaultCertificate?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#iam_certificate_id CloudfrontDistribution#iam_certificate_id}.
     */
    readonly iamCertificateId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}.
     */
    readonly minimumProtocolVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#ssl_support_method CloudfrontDistribution#ssl_support_method}.
     */
    readonly sslSupportMethod?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution}.
 */
export declare class CloudfrontDistribution extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudfrontDistributionConfig);
    private _aliases?;
    get aliases(): string[];
    set aliases(value: string[]);
    resetAliases(): void;
    get aliasesInput(): string[] | undefined;
    get arn(): string;
    get callerReference(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _defaultRootObject?;
    get defaultRootObject(): string;
    set defaultRootObject(value: string);
    resetDefaultRootObject(): void;
    get defaultRootObjectInput(): string | undefined;
    get domainName(): string;
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    get enabledInput(): boolean;
    get etag(): string;
    get hostedZoneId(): string;
    private _httpVersion?;
    get httpVersion(): string;
    set httpVersion(value: string);
    resetHttpVersion(): void;
    get httpVersionInput(): string | undefined;
    get id(): string;
    get inProgressValidationBatches(): number;
    private _isIpv6Enabled?;
    get isIpv6Enabled(): boolean;
    set isIpv6Enabled(value: boolean);
    resetIsIpv6Enabled(): void;
    get isIpv6EnabledInput(): boolean | undefined;
    get lastModifiedTime(): string;
    private _priceClass?;
    get priceClass(): string;
    set priceClass(value: string);
    resetPriceClass(): void;
    get priceClassInput(): string | undefined;
    private _retainOnDelete?;
    get retainOnDelete(): boolean;
    set retainOnDelete(value: boolean);
    resetRetainOnDelete(): void;
    get retainOnDeleteInput(): boolean | undefined;
    get status(): string;
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
    trustedKeyGroups(index: string): CloudfrontDistributionTrustedKeyGroups;
    trustedSigners(index: string): CloudfrontDistributionTrustedSigners;
    private _waitForDeployment?;
    get waitForDeployment(): boolean;
    set waitForDeployment(value: boolean);
    resetWaitForDeployment(): void;
    get waitForDeploymentInput(): boolean | undefined;
    private _webAclId?;
    get webAclId(): string;
    set webAclId(value: string);
    resetWebAclId(): void;
    get webAclIdInput(): string | undefined;
    private _customErrorResponse?;
    get customErrorResponse(): CloudfrontDistributionCustomErrorResponse[];
    set customErrorResponse(value: CloudfrontDistributionCustomErrorResponse[]);
    resetCustomErrorResponse(): void;
    get customErrorResponseInput(): CloudfrontDistributionCustomErrorResponse[] | undefined;
    private _defaultCacheBehavior;
    get defaultCacheBehavior(): CloudfrontDistributionDefaultCacheBehavior[];
    set defaultCacheBehavior(value: CloudfrontDistributionDefaultCacheBehavior[]);
    get defaultCacheBehaviorInput(): CloudfrontDistributionDefaultCacheBehavior[];
    private _loggingConfig?;
    get loggingConfig(): CloudfrontDistributionLoggingConfig[];
    set loggingConfig(value: CloudfrontDistributionLoggingConfig[]);
    resetLoggingConfig(): void;
    get loggingConfigInput(): CloudfrontDistributionLoggingConfig[] | undefined;
    private _orderedCacheBehavior?;
    get orderedCacheBehavior(): CloudfrontDistributionOrderedCacheBehavior[];
    set orderedCacheBehavior(value: CloudfrontDistributionOrderedCacheBehavior[]);
    resetOrderedCacheBehavior(): void;
    get orderedCacheBehaviorInput(): CloudfrontDistributionOrderedCacheBehavior[] | undefined;
    private _origin;
    get origin(): CloudfrontDistributionOrigin[];
    set origin(value: CloudfrontDistributionOrigin[]);
    get originInput(): CloudfrontDistributionOrigin[];
    private _originGroup?;
    get originGroup(): CloudfrontDistributionOriginGroup[];
    set originGroup(value: CloudfrontDistributionOriginGroup[]);
    resetOriginGroup(): void;
    get originGroupInput(): CloudfrontDistributionOriginGroup[] | undefined;
    private _restrictions;
    get restrictions(): CloudfrontDistributionRestrictions[];
    set restrictions(value: CloudfrontDistributionRestrictions[]);
    get restrictionsInput(): CloudfrontDistributionRestrictions[];
    private _viewerCertificate;
    get viewerCertificate(): CloudfrontDistributionViewerCertificate[];
    set viewerCertificate(value: CloudfrontDistributionViewerCertificate[]);
    get viewerCertificateInput(): CloudfrontDistributionViewerCertificate[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
