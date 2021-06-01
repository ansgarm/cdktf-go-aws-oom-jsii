import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#access_policies ElasticsearchDomain#access_policies}.
     */
    readonly accessPolicies?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#advanced_options ElasticsearchDomain#advanced_options}.
     */
    readonly advancedOptions?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#domain_name ElasticsearchDomain#domain_name}.
     */
    readonly domainName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#elasticsearch_version ElasticsearchDomain#elasticsearch_version}.
     */
    readonly elasticsearchVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tags ElasticsearchDomain#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tags_all ElasticsearchDomain#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * advanced_security_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#advanced_security_options ElasticsearchDomain#advanced_security_options}
     */
    readonly advancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptions[];
    /**
     * cluster_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cluster_config ElasticsearchDomain#cluster_config}
     */
    readonly clusterConfig?: ElasticsearchDomainClusterConfig[];
    /**
     * cognito_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cognito_options ElasticsearchDomain#cognito_options}
     */
    readonly cognitoOptions?: ElasticsearchDomainCognitoOptions[];
    /**
     * domain_endpoint_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#domain_endpoint_options ElasticsearchDomain#domain_endpoint_options}
     */
    readonly domainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions[];
    /**
     * ebs_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#ebs_options ElasticsearchDomain#ebs_options}
     */
    readonly ebsOptions?: ElasticsearchDomainEbsOptions[];
    /**
     * encrypt_at_rest block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#encrypt_at_rest ElasticsearchDomain#encrypt_at_rest}
     */
    readonly encryptAtRest?: ElasticsearchDomainEncryptAtRest[];
    /**
     * log_publishing_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#log_publishing_options ElasticsearchDomain#log_publishing_options}
     */
    readonly logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[];
    /**
     * node_to_node_encryption block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#node_to_node_encryption ElasticsearchDomain#node_to_node_encryption}
     */
    readonly nodeToNodeEncryption?: ElasticsearchDomainNodeToNodeEncryption[];
    /**
     * snapshot_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#snapshot_options ElasticsearchDomain#snapshot_options}
     */
    readonly snapshotOptions?: ElasticsearchDomainSnapshotOptions[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#timeouts ElasticsearchDomain#timeouts}
     */
    readonly timeouts?: ElasticsearchDomainTimeouts;
    /**
     * vpc_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#vpc_options ElasticsearchDomain#vpc_options}
     */
    readonly vpcOptions?: ElasticsearchDomainVpcOptions[];
}
export interface ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_arn ElasticsearchDomain#master_user_arn}.
     */
    readonly masterUserArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_name ElasticsearchDomain#master_user_name}.
     */
    readonly masterUserName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_password ElasticsearchDomain#master_user_password}.
     */
    readonly masterUserPassword?: string;
}
export interface ElasticsearchDomainAdvancedSecurityOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}.
     */
    readonly enabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}.
     */
    readonly internalUserDatabaseEnabled?: boolean;
    /**
     * master_user_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_options ElasticsearchDomain#master_user_options}
     */
    readonly masterUserOptions?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions[];
}
export interface ElasticsearchDomainClusterConfigZoneAwarenessConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#availability_zone_count ElasticsearchDomain#availability_zone_count}.
     */
    readonly availabilityZoneCount?: number;
}
export interface ElasticsearchDomainClusterConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_count ElasticsearchDomain#dedicated_master_count}.
     */
    readonly dedicatedMasterCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}.
     */
    readonly dedicatedMasterEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_type ElasticsearchDomain#dedicated_master_type}.
     */
    readonly dedicatedMasterType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#instance_count ElasticsearchDomain#instance_count}.
     */
    readonly instanceCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#instance_type ElasticsearchDomain#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_count ElasticsearchDomain#warm_count}.
     */
    readonly warmCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_enabled ElasticsearchDomain#warm_enabled}.
     */
    readonly warmEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_type ElasticsearchDomain#warm_type}.
     */
    readonly warmType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}.
     */
    readonly zoneAwarenessEnabled?: boolean;
    /**
     * zone_awareness_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#zone_awareness_config ElasticsearchDomain#zone_awareness_config}
     */
    readonly zoneAwarenessConfig?: ElasticsearchDomainClusterConfigZoneAwarenessConfig[];
}
export interface ElasticsearchDomainCognitoOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#identity_pool_id ElasticsearchDomain#identity_pool_id}.
     */
    readonly identityPoolId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#role_arn ElasticsearchDomain#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#user_pool_id ElasticsearchDomain#user_pool_id}.
     */
    readonly userPoolId: string;
}
export interface ElasticsearchDomainDomainEndpointOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint ElasticsearchDomain#custom_endpoint}.
     */
    readonly customEndpoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}.
     */
    readonly customEndpointCertificateArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}.
     */
    readonly customEndpointEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enforce_https ElasticsearchDomain#enforce_https}.
     */
    readonly enforceHttps?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tls_security_policy ElasticsearchDomain#tls_security_policy}.
     */
    readonly tlsSecurityPolicy?: string;
}
export interface ElasticsearchDomainEbsOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#ebs_enabled ElasticsearchDomain#ebs_enabled}.
     */
    readonly ebsEnabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#iops ElasticsearchDomain#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#volume_size ElasticsearchDomain#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#volume_type ElasticsearchDomain#volume_type}.
     */
    readonly volumeType?: string;
}
export interface ElasticsearchDomainEncryptAtRest {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}.
     */
    readonly enabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#kms_key_id ElasticsearchDomain#kms_key_id}.
     */
    readonly kmsKeyId?: string;
}
export interface ElasticsearchDomainLogPublishingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}.
     */
    readonly cloudwatchLogGroupArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#log_type ElasticsearchDomain#log_type}.
     */
    readonly logType: string;
}
export interface ElasticsearchDomainNodeToNodeEncryption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}.
     */
    readonly enabled: boolean;
}
export interface ElasticsearchDomainSnapshotOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}.
     */
    readonly automatedSnapshotStartHour: number;
}
export interface ElasticsearchDomainTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#update ElasticsearchDomain#update}.
     */
    readonly update?: string;
}
export interface ElasticsearchDomainVpcOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#security_group_ids ElasticsearchDomain#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#subnet_ids ElasticsearchDomain#subnet_ids}.
     */
    readonly subnetIds?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain}.
 */
export declare class ElasticsearchDomain extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElasticsearchDomainConfig);
    private _accessPolicies?;
    get accessPolicies(): string;
    set accessPolicies(value: string);
    resetAccessPolicies(): void;
    get accessPoliciesInput(): string | undefined;
    private _advancedOptions?;
    get advancedOptions(): {
        [key: string]: string;
    };
    set advancedOptions(value: {
        [key: string]: string;
    });
    resetAdvancedOptions(): void;
    get advancedOptionsInput(): {
        [key: string]: string;
    } | undefined;
    get arn(): string;
    get domainId(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    private _elasticsearchVersion?;
    get elasticsearchVersion(): string;
    set elasticsearchVersion(value: string);
    resetElasticsearchVersion(): void;
    get elasticsearchVersionInput(): string | undefined;
    get endpoint(): string;
    get id(): string;
    get kibanaEndpoint(): string;
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
    private _advancedSecurityOptions?;
    get advancedSecurityOptions(): ElasticsearchDomainAdvancedSecurityOptions[];
    set advancedSecurityOptions(value: ElasticsearchDomainAdvancedSecurityOptions[]);
    resetAdvancedSecurityOptions(): void;
    get advancedSecurityOptionsInput(): ElasticsearchDomainAdvancedSecurityOptions[] | undefined;
    private _clusterConfig?;
    get clusterConfig(): ElasticsearchDomainClusterConfig[];
    set clusterConfig(value: ElasticsearchDomainClusterConfig[]);
    resetClusterConfig(): void;
    get clusterConfigInput(): ElasticsearchDomainClusterConfig[] | undefined;
    private _cognitoOptions?;
    get cognitoOptions(): ElasticsearchDomainCognitoOptions[];
    set cognitoOptions(value: ElasticsearchDomainCognitoOptions[]);
    resetCognitoOptions(): void;
    get cognitoOptionsInput(): ElasticsearchDomainCognitoOptions[] | undefined;
    private _domainEndpointOptions?;
    get domainEndpointOptions(): ElasticsearchDomainDomainEndpointOptions[];
    set domainEndpointOptions(value: ElasticsearchDomainDomainEndpointOptions[]);
    resetDomainEndpointOptions(): void;
    get domainEndpointOptionsInput(): ElasticsearchDomainDomainEndpointOptions[] | undefined;
    private _ebsOptions?;
    get ebsOptions(): ElasticsearchDomainEbsOptions[];
    set ebsOptions(value: ElasticsearchDomainEbsOptions[]);
    resetEbsOptions(): void;
    get ebsOptionsInput(): ElasticsearchDomainEbsOptions[] | undefined;
    private _encryptAtRest?;
    get encryptAtRest(): ElasticsearchDomainEncryptAtRest[];
    set encryptAtRest(value: ElasticsearchDomainEncryptAtRest[]);
    resetEncryptAtRest(): void;
    get encryptAtRestInput(): ElasticsearchDomainEncryptAtRest[] | undefined;
    private _logPublishingOptions?;
    get logPublishingOptions(): ElasticsearchDomainLogPublishingOptions[];
    set logPublishingOptions(value: ElasticsearchDomainLogPublishingOptions[]);
    resetLogPublishingOptions(): void;
    get logPublishingOptionsInput(): ElasticsearchDomainLogPublishingOptions[] | undefined;
    private _nodeToNodeEncryption?;
    get nodeToNodeEncryption(): ElasticsearchDomainNodeToNodeEncryption[];
    set nodeToNodeEncryption(value: ElasticsearchDomainNodeToNodeEncryption[]);
    resetNodeToNodeEncryption(): void;
    get nodeToNodeEncryptionInput(): ElasticsearchDomainNodeToNodeEncryption[] | undefined;
    private _snapshotOptions?;
    get snapshotOptions(): ElasticsearchDomainSnapshotOptions[];
    set snapshotOptions(value: ElasticsearchDomainSnapshotOptions[]);
    resetSnapshotOptions(): void;
    get snapshotOptionsInput(): ElasticsearchDomainSnapshotOptions[] | undefined;
    private _timeouts?;
    get timeouts(): ElasticsearchDomainTimeouts;
    set timeouts(value: ElasticsearchDomainTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): ElasticsearchDomainTimeouts | undefined;
    private _vpcOptions?;
    get vpcOptions(): ElasticsearchDomainVpcOptions[];
    set vpcOptions(value: ElasticsearchDomainVpcOptions[]);
    resetVpcOptions(): void;
    get vpcOptionsInput(): ElasticsearchDomainVpcOptions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
