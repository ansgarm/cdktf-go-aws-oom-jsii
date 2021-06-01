import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html#domain_name DataAwsElasticsearchDomain#domain_name}.
     */
    readonly domainName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html#tags DataAwsElasticsearchDomain#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsElasticsearchDomainAdvancedSecurityOptions extends cdktf.ComplexComputedList {
    get enabled(): boolean;
    get internalUserDatabaseEnabled(): boolean;
}
export declare class DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig extends cdktf.ComplexComputedList {
    get availabilityZoneCount(): number;
}
export declare class DataAwsElasticsearchDomainClusterConfig extends cdktf.ComplexComputedList {
    get dedicatedMasterCount(): number;
    get dedicatedMasterEnabled(): boolean;
    get dedicatedMasterType(): string;
    get instanceCount(): number;
    get instanceType(): string;
    get warmCount(): number;
    get warmEnabled(): boolean;
    get warmType(): string;
    get zoneAwarenessConfig(): any;
    get zoneAwarenessEnabled(): boolean;
}
export declare class DataAwsElasticsearchDomainCognitoOptions extends cdktf.ComplexComputedList {
    get enabled(): boolean;
    get identityPoolId(): string;
    get roleArn(): string;
    get userPoolId(): string;
}
export declare class DataAwsElasticsearchDomainEbsOptions extends cdktf.ComplexComputedList {
    get ebsEnabled(): boolean;
    get iops(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsElasticsearchDomainEncryptionAtRest extends cdktf.ComplexComputedList {
    get enabled(): boolean;
    get kmsKeyId(): string;
}
export declare class DataAwsElasticsearchDomainLogPublishingOptions extends cdktf.ComplexComputedList {
    get cloudwatchLogGroupArn(): string;
    get enabled(): boolean;
    get logType(): string;
}
export declare class DataAwsElasticsearchDomainNodeToNodeEncryption extends cdktf.ComplexComputedList {
    get enabled(): boolean;
}
export declare class DataAwsElasticsearchDomainSnapshotOptions extends cdktf.ComplexComputedList {
    get automatedSnapshotStartHour(): number;
}
export declare class DataAwsElasticsearchDomainVpcOptions extends cdktf.ComplexComputedList {
    get availabilityZones(): string[];
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain}.
 */
export declare class DataAwsElasticsearchDomain extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsElasticsearchDomainConfig);
    get accessPolicies(): string;
    advancedOptions(key: string): string;
    advancedSecurityOptions(index: string): DataAwsElasticsearchDomainAdvancedSecurityOptions;
    get arn(): string;
    clusterConfig(index: string): DataAwsElasticsearchDomainClusterConfig;
    cognitoOptions(index: string): DataAwsElasticsearchDomainCognitoOptions;
    get created(): boolean;
    get deleted(): boolean;
    get domainId(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    ebsOptions(index: string): DataAwsElasticsearchDomainEbsOptions;
    get elasticsearchVersion(): string;
    encryptionAtRest(index: string): DataAwsElasticsearchDomainEncryptionAtRest;
    get endpoint(): string;
    get id(): string;
    get kibanaEndpoint(): string;
    logPublishingOptions(index: string): DataAwsElasticsearchDomainLogPublishingOptions;
    nodeToNodeEncryption(index: string): DataAwsElasticsearchDomainNodeToNodeEncryption;
    get processing(): boolean;
    snapshotOptions(index: string): DataAwsElasticsearchDomainSnapshotOptions;
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
    vpcOptions(index: string): DataAwsElasticsearchDomainVpcOptions;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
