import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#certificate_arn DmsEndpoint#certificate_arn}.
     */
    readonly certificateArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#database_name DmsEndpoint#database_name}.
     */
    readonly databaseName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#endpoint_id DmsEndpoint#endpoint_id}.
     */
    readonly endpointId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#endpoint_type DmsEndpoint#endpoint_type}.
     */
    readonly endpointType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#engine_name DmsEndpoint#engine_name}.
     */
    readonly engineName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.
     */
    readonly extraConnectionAttributes?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kms_key_arn DmsEndpoint#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#password DmsEndpoint#password}.
     */
    readonly password?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#port DmsEndpoint#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#server_name DmsEndpoint#server_name}.
     */
    readonly serverName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role DmsEndpoint#service_access_role}.
     */
    readonly serviceAccessRole?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#ssl_mode DmsEndpoint#ssl_mode}.
     */
    readonly sslMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#tags DmsEndpoint#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#tags_all DmsEndpoint#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#username DmsEndpoint#username}.
     */
    readonly username?: string;
    /**
     * elasticsearch_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#elasticsearch_settings DmsEndpoint#elasticsearch_settings}
     */
    readonly elasticsearchSettings?: DmsEndpointElasticsearchSettings[];
    /**
     * kafka_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kafka_settings DmsEndpoint#kafka_settings}
     */
    readonly kafkaSettings?: DmsEndpointKafkaSettings[];
    /**
     * kinesis_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#kinesis_settings DmsEndpoint#kinesis_settings}
     */
    readonly kinesisSettings?: DmsEndpointKinesisSettings[];
    /**
     * mongodb_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#mongodb_settings DmsEndpoint#mongodb_settings}
     */
    readonly mongodbSettings?: DmsEndpointMongodbSettings[];
    /**
     * s3_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#s3_settings DmsEndpoint#s3_settings}
     */
    readonly s3Settings?: DmsEndpointS3Settings[];
}
export interface DmsEndpointElasticsearchSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#endpoint_uri DmsEndpoint#endpoint_uri}.
     */
    readonly endpointUri: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#error_retry_duration DmsEndpoint#error_retry_duration}.
     */
    readonly errorRetryDuration?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#full_load_error_percentage DmsEndpoint#full_load_error_percentage}.
     */
    readonly fullLoadErrorPercentage?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role_arn DmsEndpoint#service_access_role_arn}.
     */
    readonly serviceAccessRoleArn: string;
}
export interface DmsEndpointKafkaSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#broker DmsEndpoint#broker}.
     */
    readonly broker: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#topic DmsEndpoint#topic}.
     */
    readonly topic?: string;
}
export interface DmsEndpointKinesisSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#message_format DmsEndpoint#message_format}.
     */
    readonly messageFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role_arn DmsEndpoint#service_access_role_arn}.
     */
    readonly serviceAccessRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#stream_arn DmsEndpoint#stream_arn}.
     */
    readonly streamArn?: string;
}
export interface DmsEndpointMongodbSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#auth_mechanism DmsEndpoint#auth_mechanism}.
     */
    readonly authMechanism?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#auth_source DmsEndpoint#auth_source}.
     */
    readonly authSource?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#auth_type DmsEndpoint#auth_type}.
     */
    readonly authType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#docs_to_investigate DmsEndpoint#docs_to_investigate}.
     */
    readonly docsToInvestigate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#extract_doc_id DmsEndpoint#extract_doc_id}.
     */
    readonly extractDocId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#nesting_level DmsEndpoint#nesting_level}.
     */
    readonly nestingLevel?: string;
}
export interface DmsEndpointS3Settings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#bucket_folder DmsEndpoint#bucket_folder}.
     */
    readonly bucketFolder?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#bucket_name DmsEndpoint#bucket_name}.
     */
    readonly bucketName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#compression_type DmsEndpoint#compression_type}.
     */
    readonly compressionType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#csv_delimiter DmsEndpoint#csv_delimiter}.
     */
    readonly csvDelimiter?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#csv_row_delimiter DmsEndpoint#csv_row_delimiter}.
     */
    readonly csvRowDelimiter?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#date_partition_enabled DmsEndpoint#date_partition_enabled}.
     */
    readonly datePartitionEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#external_table_definition DmsEndpoint#external_table_definition}.
     */
    readonly externalTableDefinition?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html#service_access_role_arn DmsEndpoint#service_access_role_arn}.
     */
    readonly serviceAccessRoleArn?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint}.
 */
export declare class DmsEndpoint extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DmsEndpointConfig);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    get endpointArn(): string;
    private _endpointId;
    get endpointId(): string;
    set endpointId(value: string);
    get endpointIdInput(): string;
    private _endpointType;
    get endpointType(): string;
    set endpointType(value: string);
    get endpointTypeInput(): string;
    private _engineName;
    get engineName(): string;
    set engineName(value: string);
    get engineNameInput(): string;
    private _extraConnectionAttributes?;
    get extraConnectionAttributes(): string;
    set extraConnectionAttributes(value: string);
    resetExtraConnectionAttributes(): void;
    get extraConnectionAttributesInput(): string | undefined;
    get id(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _serverName?;
    get serverName(): string;
    set serverName(value: string);
    resetServerName(): void;
    get serverNameInput(): string | undefined;
    private _serviceAccessRole?;
    get serviceAccessRole(): string;
    set serviceAccessRole(value: string);
    resetServiceAccessRole(): void;
    get serviceAccessRoleInput(): string | undefined;
    private _sslMode?;
    get sslMode(): string;
    set sslMode(value: string);
    resetSslMode(): void;
    get sslModeInput(): string | undefined;
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
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
    private _elasticsearchSettings?;
    get elasticsearchSettings(): DmsEndpointElasticsearchSettings[];
    set elasticsearchSettings(value: DmsEndpointElasticsearchSettings[]);
    resetElasticsearchSettings(): void;
    get elasticsearchSettingsInput(): DmsEndpointElasticsearchSettings[] | undefined;
    private _kafkaSettings?;
    get kafkaSettings(): DmsEndpointKafkaSettings[];
    set kafkaSettings(value: DmsEndpointKafkaSettings[]);
    resetKafkaSettings(): void;
    get kafkaSettingsInput(): DmsEndpointKafkaSettings[] | undefined;
    private _kinesisSettings?;
    get kinesisSettings(): DmsEndpointKinesisSettings[];
    set kinesisSettings(value: DmsEndpointKinesisSettings[]);
    resetKinesisSettings(): void;
    get kinesisSettingsInput(): DmsEndpointKinesisSettings[] | undefined;
    private _mongodbSettings?;
    get mongodbSettings(): DmsEndpointMongodbSettings[];
    set mongodbSettings(value: DmsEndpointMongodbSettings[]);
    resetMongodbSettings(): void;
    get mongodbSettingsInput(): DmsEndpointMongodbSettings[] | undefined;
    private _s3Settings?;
    get s3Settings(): DmsEndpointS3Settings[];
    set s3Settings(value: DmsEndpointS3Settings[]);
    resetS3Settings(): void;
    get s3SettingsInput(): DmsEndpointS3Settings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
