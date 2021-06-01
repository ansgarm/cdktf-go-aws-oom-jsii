import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MskClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#cluster_name MskCluster#cluster_name}.
     */
    readonly clusterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enhanced_monitoring MskCluster#enhanced_monitoring}.
     */
    readonly enhancedMonitoring?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#kafka_version MskCluster#kafka_version}.
     */
    readonly kafkaVersion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#number_of_broker_nodes MskCluster#number_of_broker_nodes}.
     */
    readonly numberOfBrokerNodes: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tags MskCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tags_all MskCluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * broker_node_group_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#broker_node_group_info MskCluster#broker_node_group_info}
     */
    readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo[];
    /**
     * client_authentication block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_authentication MskCluster#client_authentication}
     */
    readonly clientAuthentication?: MskClusterClientAuthentication[];
    /**
     * configuration_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#configuration_info MskCluster#configuration_info}
     */
    readonly configurationInfo?: MskClusterConfigurationInfo[];
    /**
     * encryption_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_info MskCluster#encryption_info}
     */
    readonly encryptionInfo?: MskClusterEncryptionInfo[];
    /**
     * logging_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#logging_info MskCluster#logging_info}
     */
    readonly loggingInfo?: MskClusterLoggingInfo[];
    /**
     * open_monitoring block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#open_monitoring MskCluster#open_monitoring}
     */
    readonly openMonitoring?: MskClusterOpenMonitoring[];
}
export interface MskClusterBrokerNodeGroupInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#az_distribution MskCluster#az_distribution}.
     */
    readonly azDistribution?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_subnets MskCluster#client_subnets}.
     */
    readonly clientSubnets: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#ebs_volume_size MskCluster#ebs_volume_size}.
     */
    readonly ebsVolumeSize: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#instance_type MskCluster#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#security_groups MskCluster#security_groups}.
     */
    readonly securityGroups: string[];
}
export interface MskClusterClientAuthenticationSasl {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#scram MskCluster#scram}.
     */
    readonly scram?: boolean;
}
export interface MskClusterClientAuthenticationTls {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#certificate_authority_arns MskCluster#certificate_authority_arns}.
     */
    readonly certificateAuthorityArns?: string[];
}
export interface MskClusterClientAuthentication {
    /**
     * sasl block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#sasl MskCluster#sasl}
     */
    readonly sasl?: MskClusterClientAuthenticationSasl[];
    /**
     * tls block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tls MskCluster#tls}
     */
    readonly tls?: MskClusterClientAuthenticationTls[];
}
export interface MskClusterConfigurationInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#arn MskCluster#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#revision MskCluster#revision}.
     */
    readonly revision: number;
}
export interface MskClusterEncryptionInfoEncryptionInTransit {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_broker MskCluster#client_broker}.
     */
    readonly clientBroker?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#in_cluster MskCluster#in_cluster}.
     */
    readonly inCluster?: boolean;
}
export interface MskClusterEncryptionInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}.
     */
    readonly encryptionAtRestKmsKeyArn?: string;
    /**
     * encryption_in_transit block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_in_transit MskCluster#encryption_in_transit}
     */
    readonly encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit[];
}
export interface MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}.
     */
    readonly enabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#log_group MskCluster#log_group}.
     */
    readonly logGroup?: string;
}
export interface MskClusterLoggingInfoBrokerLogsFirehose {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#delivery_stream MskCluster#delivery_stream}.
     */
    readonly deliveryStream?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}.
     */
    readonly enabled: boolean;
}
export interface MskClusterLoggingInfoBrokerLogsS3 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#bucket MskCluster#bucket}.
     */
    readonly bucket?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}.
     */
    readonly enabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#prefix MskCluster#prefix}.
     */
    readonly prefix?: string;
}
export interface MskClusterLoggingInfoBrokerLogs {
    /**
     * cloudwatch_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#cloudwatch_logs MskCluster#cloudwatch_logs}
     */
    readonly cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs[];
    /**
     * firehose block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#firehose MskCluster#firehose}
     */
    readonly firehose?: MskClusterLoggingInfoBrokerLogsFirehose[];
    /**
     * s3 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#s3 MskCluster#s3}
     */
    readonly s3?: MskClusterLoggingInfoBrokerLogsS3[];
}
export interface MskClusterLoggingInfo {
    /**
     * broker_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#broker_logs MskCluster#broker_logs}
     */
    readonly brokerLogs: MskClusterLoggingInfoBrokerLogs[];
}
export interface MskClusterOpenMonitoringPrometheusJmxExporter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled_in_broker MskCluster#enabled_in_broker}.
     */
    readonly enabledInBroker: boolean;
}
export interface MskClusterOpenMonitoringPrometheusNodeExporter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled_in_broker MskCluster#enabled_in_broker}.
     */
    readonly enabledInBroker: boolean;
}
export interface MskClusterOpenMonitoringPrometheus {
    /**
     * jmx_exporter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#jmx_exporter MskCluster#jmx_exporter}
     */
    readonly jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter[];
    /**
     * node_exporter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#node_exporter MskCluster#node_exporter}
     */
    readonly nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter[];
}
export interface MskClusterOpenMonitoring {
    /**
     * prometheus block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#prometheus MskCluster#prometheus}
     */
    readonly prometheus: MskClusterOpenMonitoringPrometheus[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html aws_msk_cluster}.
 */
export declare class MskCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html aws_msk_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MskClusterConfig);
    get arn(): string;
    get bootstrapBrokers(): string;
    get bootstrapBrokersSaslScram(): string;
    get bootstrapBrokersTls(): string;
    private _clusterName;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get currentVersion(): string;
    private _enhancedMonitoring?;
    get enhancedMonitoring(): string;
    set enhancedMonitoring(value: string);
    resetEnhancedMonitoring(): void;
    get enhancedMonitoringInput(): string | undefined;
    get id(): string;
    private _kafkaVersion;
    get kafkaVersion(): string;
    set kafkaVersion(value: string);
    get kafkaVersionInput(): string;
    private _numberOfBrokerNodes;
    get numberOfBrokerNodes(): number;
    set numberOfBrokerNodes(value: number);
    get numberOfBrokerNodesInput(): number;
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
    get zookeeperConnectString(): string;
    private _brokerNodeGroupInfo;
    get brokerNodeGroupInfo(): MskClusterBrokerNodeGroupInfo[];
    set brokerNodeGroupInfo(value: MskClusterBrokerNodeGroupInfo[]);
    get brokerNodeGroupInfoInput(): MskClusterBrokerNodeGroupInfo[];
    private _clientAuthentication?;
    get clientAuthentication(): MskClusterClientAuthentication[];
    set clientAuthentication(value: MskClusterClientAuthentication[]);
    resetClientAuthentication(): void;
    get clientAuthenticationInput(): MskClusterClientAuthentication[] | undefined;
    private _configurationInfo?;
    get configurationInfo(): MskClusterConfigurationInfo[];
    set configurationInfo(value: MskClusterConfigurationInfo[]);
    resetConfigurationInfo(): void;
    get configurationInfoInput(): MskClusterConfigurationInfo[] | undefined;
    private _encryptionInfo?;
    get encryptionInfo(): MskClusterEncryptionInfo[];
    set encryptionInfo(value: MskClusterEncryptionInfo[]);
    resetEncryptionInfo(): void;
    get encryptionInfoInput(): MskClusterEncryptionInfo[] | undefined;
    private _loggingInfo?;
    get loggingInfo(): MskClusterLoggingInfo[];
    set loggingInfo(value: MskClusterLoggingInfo[]);
    resetLoggingInfo(): void;
    get loggingInfoInput(): MskClusterLoggingInfo[] | undefined;
    private _openMonitoring?;
    get openMonitoring(): MskClusterOpenMonitoring[];
    set openMonitoring(value: MskClusterOpenMonitoring[]);
    resetOpenMonitoring(): void;
    get openMonitoringInput(): MskClusterOpenMonitoring[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
