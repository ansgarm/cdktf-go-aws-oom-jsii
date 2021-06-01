import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMqBrokerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html#broker_id DataAwsMqBroker#broker_id}.
     */
    readonly brokerId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html#broker_name DataAwsMqBroker#broker_name}.
     */
    readonly brokerName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html#tags DataAwsMqBroker#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html#logs DataAwsMqBroker#logs}
     */
    readonly logs?: DataAwsMqBrokerLogs[];
}
export declare class DataAwsMqBrokerConfiguration extends cdktf.ComplexComputedList {
    get id(): string;
    get revision(): number;
}
export declare class DataAwsMqBrokerEncryptionOptions extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
    get useAwsOwnedKey(): boolean;
}
export declare class DataAwsMqBrokerInstances extends cdktf.ComplexComputedList {
    get consoleUrl(): string;
    get endpoints(): string[];
    get ipAddress(): string;
}
export declare class DataAwsMqBrokerLdapServerMetadata extends cdktf.ComplexComputedList {
    get hosts(): string[];
    get roleBase(): string;
    get roleName(): string;
    get roleSearchMatching(): string;
    get roleSearchSubtree(): boolean;
    get serviceAccountPassword(): string;
    get serviceAccountUsername(): string;
    get userBase(): string;
    get userRoleName(): string;
    get userSearchMatching(): string;
    get userSearchSubtree(): boolean;
}
export declare class DataAwsMqBrokerMaintenanceWindowStartTime extends cdktf.ComplexComputedList {
    get dayOfWeek(): string;
    get timeOfDay(): string;
    get timeZone(): string;
}
export declare class DataAwsMqBrokerUser extends cdktf.ComplexComputedList {
    get consoleAccess(): boolean;
    get groups(): string[];
    get username(): string;
}
export interface DataAwsMqBrokerLogs {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker}.
 */
export declare class DataAwsMqBroker extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsMqBrokerConfig);
    get arn(): string;
    get authenticationStrategy(): string;
    get autoMinorVersionUpgrade(): boolean;
    private _brokerId?;
    get brokerId(): string;
    set brokerId(value: string);
    resetBrokerId(): void;
    get brokerIdInput(): string | undefined;
    private _brokerName?;
    get brokerName(): string;
    set brokerName(value: string);
    resetBrokerName(): void;
    get brokerNameInput(): string | undefined;
    configuration(index: string): DataAwsMqBrokerConfiguration;
    get deploymentMode(): string;
    encryptionOptions(index: string): DataAwsMqBrokerEncryptionOptions;
    get engineType(): string;
    get engineVersion(): string;
    get hostInstanceType(): string;
    get id(): string;
    instances(index: string): DataAwsMqBrokerInstances;
    ldapServerMetadata(index: string): DataAwsMqBrokerLdapServerMetadata;
    maintenanceWindowStartTime(index: string): DataAwsMqBrokerMaintenanceWindowStartTime;
    get publiclyAccessible(): boolean;
    get securityGroups(): string[];
    get storageType(): string;
    get subnetIds(): string[];
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
    user(index: string): DataAwsMqBrokerUser;
    private _logs?;
    get logs(): DataAwsMqBrokerLogs[];
    set logs(value: DataAwsMqBrokerLogs[]);
    resetLogs(): void;
    get logsInput(): DataAwsMqBrokerLogs[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
